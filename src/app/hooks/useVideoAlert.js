import { useEffect } from "react";
import { useAtom } from "jotai";
import { videoUrlAtom } from "../../atoms/animeAtom";

import { animeToMpv } from "../../utils/animeToMpv";

export function useVideoAlert(countToZeroCallback) {
    const [videoUrl, setVideoUrl] = useAtom(videoUrlAtom);

    useEffect(() => {
        if (videoUrl !== null) {
            animeToMpv(videoUrl);
        }
    }, [videoUrl]);

    return { videoUrl, setVideoUrl };
}
