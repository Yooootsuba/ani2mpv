import { title } from "./AnimeConstant";
import { Base64 } from "js-base64";

export function animeToMpv(url) {
    const mpv = `mpv://play/${Base64.encodeURI(
        url
    )}/?v_title=${Base64.encodeURI(title)}`;
    window.location.href = mpv;
}
