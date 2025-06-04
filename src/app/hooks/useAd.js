import { useEffect } from "react";

import { apiEndAd } from "../../api/api";

import { getM3U8 } from "../services/getM3U8";

import { useAtom } from "jotai";
import { adAtom, videoSnAtom } from "../../atoms/animeAtom";

export function useAd() {
    const [ad, setAd] = useAtom(adAtom);
    const [videoSn, setVideoSn] = useAtom(videoSnAtom);

    useEffect(() => {
        /*
         * 為空不執行
         *
         */
        if (ad == null) {
            return;
        }

        /*
         * 播放中的廣告的 videoSn 和頁面中的 videoSn 不符合，代表換頁了
         *
         * 直接初始化 ad
         *
         */
        if (ad.videoSn !== videoSn) {
            console.log("ani2mpv: 銷毀 adTimer");
            setAd(null);
            return;
        }

        /*
         * 倒數
         *
         */
        if (ad.timer > 0) {
            setTimeout(() => {
                console.log(`ani2mpv: 廣告播放中，還剩下 ${ad.timer - 1} 秒`);
                setAd((prev) => ({
                    ...prev,
                    timer: prev.timer - 1,
                }));
            }, 1000);

            return;
        }

        /*
         * 倒數結束
         *
         */
        if (ad.timer == 0) {
            apiEndAd(
                (response) => {
                    console.log("ani2mpv: 廣告結束");
                    getM3U8();
                },
                (error) => {}
            );
        }
    }, [ad]);

    return { ad, setAd };
}
