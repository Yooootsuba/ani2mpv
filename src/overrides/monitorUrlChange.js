import { getDefaultStore } from "jotai";
import { videoSnAtom } from "../atoms/animeAtom";

const store = getDefaultStore();

(function monitorUrlChange() {
    let lastSn = null;

    function getSnFromQuery() {
        const params = new URLSearchParams(window.location.search);
        return params.get("sn") || null;
    }

    function updateVideoSn() {
        const newSn = getSnFromQuery();

        if (newSn !== lastSn) {
            lastSn = newSn;
            store.set(videoSnAtom, newSn);
        }
    }

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
        originalPushState.apply(this, args);
        updateVideoSn();
    };

    history.replaceState = function (...args) {
        originalReplaceState.apply(this, args);
        updateVideoSn();
    };

    window.addEventListener("popstate", updateVideoSn);

    updateVideoSn();
})();
