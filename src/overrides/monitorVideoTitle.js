import { getDefaultStore } from "jotai";
import { videoTitleAtom } from "../atoms/animeAtom";

const store = getDefaultStore();

(function monitorVideoTitle() {
    function updateAnimeTitle() {
        const titleElement = document.querySelector(".anime_name h1");
        if (titleElement) {
            const titleText = titleElement.textContent.trim();
            console.log("ani2mpv: 影片標題更新為", titleText);
            store.set(videoTitleAtom, titleText);
        }
    }

    updateAnimeTitle();

    const observer = new MutationObserver(updateAnimeTitle);
    const targetNode = document.querySelector(".anime_name");

    if (targetNode) {
        observer.observe(targetNode, { childList: true, subtree: true });
    }

    const globalObserver = new MutationObserver(() => {
        const newTarget = document.querySelector(".anime_name");
        if (newTarget) {
            observer.observe(newTarget, { childList: true, subtree: true });
            globalObserver.disconnect();
            updateAnimeTitle();
        }
    });

    globalObserver.observe(document.body, { childList: true, subtree: true });
})();
