import { Base64 } from "js-base64";

import { getDefaultStore } from "jotai";
import { videoTitleAtom } from "../atoms/animeAtom";

const store = getDefaultStore();

export const animeToMpv = (url) => {
    const title = `巴哈姆特動畫瘋 | ${store.get(
        videoTitleAtom
    )} | ani2mpv Yotsuba`;

    const mpv = `mpv://play/${Base64.encodeURI(
        url
    )}/?v_title=${Base64.encodeURI(title)}`;
    window.location.href = mpv;
};
