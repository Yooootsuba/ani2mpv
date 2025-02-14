import { useAtom } from "jotai";
import { videoUrlAtom } from "../../atoms/animeAtom";
import { apiGetM3U8 } from "../../api/api";

export const getM3U8 = () => {
    console.log(123);
    const [videoUrl, setVideoUrl] = useAtom(videoUrlAtom);
    console.log(456);

    apiGetM3U8(
        (response) => {
            console.log(response.data);

            setVideoUrl(response.data);
        },
        (error) => {}
    );
};
