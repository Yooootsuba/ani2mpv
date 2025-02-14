import apiBase from "./apiBase";

const ad = getAd()[0];
const sn = animefun.videoSn;
const device = animefun.getdeviceid();

/*
 * GET /ajax/videoCastcishu.php?s=${ad}&sn=${sn}
 *
 */
export function apiStartAd(onSuccess, onError) {
    apiBase(onSuccess, onError, "GET", "/ajax/videoCastcishu.php", {
        s: ad,
        sn: sn,
    });
}

/*
 * GET /ajax/videoCastcishu.php?s=${ad}&sn=${sn}&ad=end
 *
 */
export function apiEndAd(onSuccess, onError) {
    apiBase(onSuccess, onError, "GET", "/ajax/videoCastcishu.php", {
        s: ad,
        sn: sn,
        ad: "end",
    });
}

/*
 * GET /ajax/m3u8.php?sn=${sn}&device=${device}
 *
 */
export function apiGetM3U8(onSuccess, onError) {
    apiBase(onSuccess, onError, "GET", "/ajax/m3u8.php", {
        sn: sn,
        device: device,
    });
}

/*
 * GET /ajax/token.php?sn=${sn}&device=${device}
 *
 */
export function apiGetToken(onSuccess, onError) {
    apiBase(onSuccess, onError, "GET", "/ajax/token.php", {
        sn: sn,
        device: device,
    });
}
