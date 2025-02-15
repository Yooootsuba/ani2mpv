import { useEffect } from "react";

import { useAtom } from "jotai";
import { videoSnAtom, videoTitleAtom } from "../../atoms/animeAtom";

export function useAnime() {
    const [videoSn, setVideoSn] = useAtom(videoSnAtom);
    const [videoTitle, setVideoTitle] = useAtom(videoTitleAtom);

    useEffect(() => {
        if (videoSn == null) {
            setVideoSn(animefun.videoSn);
        }

        if (videoTitle == null) {
            setVideoTitle(animefun.title);
        }
    }, []);
}
