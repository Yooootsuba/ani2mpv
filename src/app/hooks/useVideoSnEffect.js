import { useEffect } from "react";
import { useAtom } from "jotai";
import { videoSnAtom, videoUrlAtom } from "../../atoms/animeAtom";

export function useVideoSnEffect() {
    const [videoSn, setVideoSn] = useAtom(videoSnAtom);
    const [videoUrl, setVideoUrl] = useAtom(videoUrlAtom);

    useEffect(() => {
        console.log("ani2mpv: 偵測到換頁，videoSn 變更為", videoSn);
        setVideoUrl(null);
    }, [videoSn]);

    return { videoSn, setVideoSn };
}
