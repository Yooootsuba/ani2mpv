export function animeToMpv(url) {
    const data = bota(url);
    const safe = data.replace(/\//g, "_").replace(/\+/g, "-").replace(/\=/g, "");
    const mpvh = "mpv://play/" + safe;

    window.location.href = mpvf;
}
