import { useState, useEffect } from "react";

export function useAdTimer(countToZeroCallback) {
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        if (timer !== null) {
            if (timer > 0) {
                setTimeout(() => {
                    setTimer(timer - 1);
                }, 1000);
            } else {
                countToZeroCallback();
            }
        }
    }, [timer]);

    return { timer, setTimer };
}
