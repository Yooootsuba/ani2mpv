import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./overrides/fetch";
import "./overrides/monitorUrlChange";
import "./overrides/monitorVideoTitle";

console.log("ani2mpv: 載入 main.jsx");

let reactRoot = null;
let appContainer = null;
const targetSelector = ".ncc-choose-btn";

const observer = new MutationObserver(() => {
    const target = document.querySelector(targetSelector);

    // 1. 有 target，且沒掛載過，才掛載
    if (target && !reactRoot) {
        appContainer = document.createElement("div");
        appContainer.id = "ani2mpv-root";
        target.after(appContainer);
        reactRoot = ReactDOM.createRoot(appContainer);
        reactRoot.render(<App />);
    }

    // 2. 沒有 target，且已掛載過，要卸載
    if (!target && reactRoot) {
        reactRoot.unmount();
        reactRoot = null;
        if (appContainer && appContainer.parentNode) {
            appContainer.parentNode.removeChild(appContainer);
            appContainer = null;
        }
    }

    // 3. 若 container 被外部移除，也要同步清理 root
    if (appContainer && !document.body.contains(appContainer) && reactRoot) {
        reactRoot.unmount();
        reactRoot = null;
        appContainer = null;
    }
});

observer.observe(document.body, { childList: true, subtree: true });
