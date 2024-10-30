import { title } from "./AnimeConstant";


export function animeToMpv(url) {
    const data = btoa(url);
    const safe = data.replace(/\//g, "_").replace(/\+/g, "-").replace(/\=/g, "");
    const mpvh = "mpv://play/" + safe;

    alert(mpvh);

    window.location.href = mpvh;
}
