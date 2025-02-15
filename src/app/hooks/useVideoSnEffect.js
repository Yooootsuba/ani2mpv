import { useEffect } from "react";
import { useAtom } from "jotai";
import { videoSnAtom, videoUrlAtom } from "../../atoms/animeAtom";

export function useVideoSnEffect() {
    const [videoSn, setVideoSn] = useAtom(videoSnAtom);
    const [videoUrl, setVideoUrl] = useAtom(videoUrlAtom);

    useEffect(() => {
        setVideoUrl(null);
    }, [videoSn]);
}
