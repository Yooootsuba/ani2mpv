import { useState, useEffect } from "react";

export function useAdTimer(countToZeroCallback) {
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        if (timer !== null) {
            if (timer > 0) {
                setTimeout(() => {
                    console.log(`ani2mpv: 廣告播放中，還剩下 ${timer - 1} 秒`);
                    setTimer(timer - 1);
                }, 1000);
            } else {
                countToZeroCallback();
            }
        }
    }, [timer]);

    return { timer, setTimer };
}
