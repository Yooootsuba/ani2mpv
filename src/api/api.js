import apiBase from "./apiBase";

import { getDefaultStore } from "jotai";
import { videoSnAtom } from "../atoms/animeAtom";

const store = getDefaultStore();
const device = animefun.getdeviceid();

/*
 * GET /ajax/videoCastcishu.php?s=${ad}&sn=${sn}
 *
 */
export function apiStartAd(onSuccess, onError) {
    apiBase(onSuccess, onError, "GET", "/ajax/videoCastcishu.php", {
        s: getAd()[0],
        sn: store.get(videoSnAtom),
    });
}

/*
 * GET /ajax/videoCastcishu.php?s=${ad}&sn=${sn}&ad=end
 *
 */
export function apiEndAd(onSuccess, onError) {
    apiBase(onSuccess, onError, "GET", "/ajax/videoCastcishu.php", {
        s: getAd()[0],
        sn: store.get(videoSnAtom),
        ad: "end",
    });
}

/*
 * GET /ajax/m3u8.php?sn=${sn}&device=${device}
 *
 */
export function apiGetM3U8(onSuccess, onError) {
    apiBase(onSuccess, onError, "GET", "/ajax/m3u8.php", {
        sn: store.get(videoSnAtom),
        device: device,
    });
}

/*
 * GET /ajax/token.php?sn=${sn}&device=${device}
 *
 */
export function apiGetToken(onSuccess, onError) {
    apiBase(onSuccess, onError, "GET", "/ajax/token.php", {
        sn: store.get(videoSnAtom),
        device: device,
    });
}
