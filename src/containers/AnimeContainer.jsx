import React from "react";
import { useState, useEffect } from "react";

import AnimePage from "../components/pages/AnimePage";
import { apiStartAd, apiEndAd, apiGetM3U8, apiIsVip } from "../utils/ApiWrapper";


export default function MpvContainer() {
    /*
     * 用 useState 初始化一些狀態：
     *
     * vip 用來判斷使用者是否為付費會員
     *
     * timer 如果使用者不是付費會員，則需要一個模擬看廣告的計時器
     *
     * videoUrl 最終要跳轉到 MPV 的 M3U8 網址
     *
     */
    const [vip, setVip] = useState(null);
    const [timer, setTimer] = useState(null);
    const [videoUrl, setVideoUrl] = useState(null);


    /*
     * 首次載入頁面，先確定使用者是不是付費會員
     *
     */
    useEffect(() => {
        apiIsVip((vip) => {
            setVip(vip);
        });
    }, []);


    /*
     * 當 Timer 被初始化成 25，代表使用者點擊按鈕且非付費會員
     *
     * 這時會開始模擬播放廣告，Timer 歸 0 才會取得影片連結
     *
     */
    useEffect(() => {
        if (timer != null) {
            if (timer > 0) {
                setTimeout(() => {
                    setTimer(timer - 1)
                }, 1000);
            }
            else {
                apiEndAd(() => {
                    apiGetM3U8((videoUrl) => {
                        setVideoUrl(videoUrl);
                    });
                })
            }
        }
    }, [timer])


    /*
     * 取得影片網址後跳轉至 MPV
     *
     */
    useEffect(() => {
        if (videoUrl != null) {
            console.log(videoUrl);
        }
    }, [videoUrl]);


    /*
     * "用 MPV 播放" 的按鈕的 Handler
     *
     * 如果使用者不是付費會員，會模擬播放廣告
     *
     */
    function onClick() {
        if (vip == true) {
            apiGetM3U8((videoUrl) => {
                setVideoUrl(videoUrl);
            });
        }
        else {
            apiStartAd(() => {
                setTimer(25);
            })
        }

    }


    if (vip == true) {
        var text = `你是付費會員！`;
    }
    else if (vip == false && timer == null) {
        var text = `按下按鈕後自動觀看廣告`;
    }
    else if (vip == false && timer > 0) {
        var text = `廣告播放中，還剩下 ${timer} 秒`;
    }
    else if (vip == false && timer == 0) {
        var text = `廣告播放完畢`;
    }
    else {
        var text = `取得會員資訊中 ...`;
    }


    return (
        <AnimePage onClick={onClick} text={text} />
    );
}
