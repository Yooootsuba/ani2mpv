import { getDefaultStore } from "jotai";
import { videoUrlAtom } from "../../atoms/animeAtom";

import { apiGetM3U8 } from "../../api/api";

const store = getDefaultStore();

export const getM3U8 = () => {
    apiGetM3U8(
        (response) => {
            console.log(`ani2mpv: 影片 M3U8 ${response.data.src}`);
            store.set(videoUrlAtom, response.data.src);
        },
        (error) => {}
    );
};
