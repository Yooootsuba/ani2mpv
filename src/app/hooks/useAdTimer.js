import { useState, useEffect } from "react";

import { apiEndAd } from "../../api/api";

import { getM3U8 } from "../services/getM3U8";

export function useAdTimer() {
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        if (timer !== null) {
            if (timer > 0) {
                setTimeout(() => {
                    console.log(`ani2mpv: 廣告播放中，還剩下 ${timer - 1} 秒`);
                    setTimer(timer - 1);
                }, 1000);
            } else {
                apiEndAd(
                    (response) => {
                        console.log("ani2mpv: 廣告結束");
                        getM3U8();
                    },
                    (error) => {}
                );
            }
        }
    }, [timer]);

    return { timer, setTimer };
}
