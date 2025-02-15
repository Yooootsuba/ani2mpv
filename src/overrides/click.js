import { getDefaultStore } from "jotai";
import { videoSnAtom } from "../atoms/animeAtom";

const store = getDefaultStore();

(function overrideClick() {
    console.log("ani2mpv: Click 事件攔截器載入");

    document.addEventListener(
        "click",
        (event) => {
            console.log("ani2mpv: 偵測到點擊事件");
            console.log("ani2mpv: 點擊的元素為", event.target);

            const aniVideoSn = event.target.dataset.aniVideoSn;

            if (aniVideoSn) {
                console.log("ani2mpv: 偵測到 aniVideoSn 改變為", aniVideoSn);
                store.set(videoSnAtom, aniVideoSn);
            }
        },
        true
    );
})();
