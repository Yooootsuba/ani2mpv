import React from "react";

import Page from "./components/Page";

import { apiStartAd, apiEndAd } from "../api/api";

import { useAnime } from "./hooks/useAnime";
import { useAdTimer } from "./hooks/useAdTimer";
import { useVipStatus } from "./hooks/useVipStatus";
import { useVideoAlert } from "./hooks/useVideoAlert";
import { useVideoSnEffect } from "./hooks/useVideoSnEffect";

import { animeToMpv } from "../utils/animeToMpv";

import { useAtom } from "jotai";
import { videoUnlockedAtom } from "../atoms/animeAtom";

export default function Ani2Mpv() {
    /*
     * 第一次進頁面初始化動畫瘋標題和 videoSn
     *
     */
    useAnime();

    /*
     * videoSn 變更代表換頁，在這裡處理換頁邏輯
     *
     */
    useVideoSnEffect();

    /*
     * 初始化廣告計時器
     *
     * 下方參數是計時器歸 0 該做的事情，發送看完廣告的請求，然後取得 M3U8
     *
     */
    const { timer, setTimer } = useAdTimer(() => {
        apiEndAd(
            (response) => {
                console.log("ani2mpv: 廣告結束");
                getM3U8();
            },
            (error) => {}
        );
    });

    /*
     * 雖然外面會自動抓 VIP 資訊，但如果真的錯過了，這裡會重新抓一次
     *
     */
    const { vip } = useVipStatus();

    /*
     * 影片的 M3U8 Url 被設定時，自動跳轉到 MPV
     *
     */
    const { videoUrl, getM3U8 } = useVideoAlert();

    /*
     * 該影片是否需要觀看廣告的狀態
     *
     */
    const [videoUnlocked, setVideoUnlocked] = useAtom(videoUnlockedAtom);

    /*
     * "用 MPV 播放" 的按鈕的 Handler
     *
     * 如果使用者不是付費會員，會模擬播放廣告
     *
     */
    const onClick = () => {
        /*
         * videoUrl 已經有了就直接播放
         *
         */
        if (videoUrl) {
            animeToMpv();
            return;
        }

        /*
         * 沒有 videoUrl，是 VIP 或已經看過廣告，可以直接取得 M3U8
         *
         */
        if (vip || videoUnlocked) {
            getM3U8();
            return;
        }

        /*
         * 沒有 videoUrl，不是 VIP 需要先過廣告關卡
         *
         */
        apiStartAd(
            (response) => {
                console.log("ani2mpv: 廣告開始");
                setTimer(25);
            },
            (error) => {}
        );
    };

    /*
     * 文字方塊要顯示的內容
     *
     */
    if (vip == true) {
        var text = `你是付費會員！`;
    } else if (videoUnlocked) {
        var text = `不用觀看廣告即可播放`;
    } else if (vip == false && timer == null) {
        var text = `按下按鈕後自動觀看廣告`;
    } else if (vip == false && timer > 0) {
        var text = `廣告播放中，還剩下 ${timer} 秒`;
    } else if (vip == false && timer == 0) {
        var text = `廣告播放完畢`;
    } else {
        var text = `取得會員資訊中 ...`;
    }

    return <Page onClick={onClick} text={text} />;
}
