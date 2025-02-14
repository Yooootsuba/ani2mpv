import { Base64 } from "js-base64";

export const animeToMpv = (url) => {
    const title = animefun.title + " - Yotsuba ani2mpv";

    const mpv = `mpv://play/${Base64.encodeURI(
        url
    )}/?v_title=${Base64.encodeURI(title)}`;
    window.location.href = mpv;
};
