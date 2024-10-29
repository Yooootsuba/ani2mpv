export function animeToMpv(url) {
    const encodedUrl = btoa(url).replace(/\//g, "_").replace(/\+/g, "-").replace(/\=/g, "");
    window.location.href = "mpv://play/" + encodedUrl;
}
