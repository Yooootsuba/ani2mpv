import { useEffect } from "react";
import { useAtom } from "jotai";
import { videoUrlAtom } from "../../atoms/animeAtom";

import { apiGetM3U8 } from "../../api/api";
import { animeToMpv } from "../../utils/animeToMpv";

export function useVideoAlert() {
    const [videoUrl, setVideoUrl] = useAtom(videoUrlAtom);

    useEffect(() => {
        if (videoUrl !== null) {
            animeToMpv(videoUrl);
        }
    }, [videoUrl]);

    const getM3U8 = () => {
        apiGetM3U8(
            (response) => {
                console.log(`ani2mpv: 影片 M3U8 ${response.data.src}`);
                setVideoUrl(response.data.src);
            },
            (error) => {}
        );
    };

    return { videoUrl, setVideoUrl, getM3U8 };
}
