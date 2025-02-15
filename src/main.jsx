import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./overrides/fetch";
import "./overrides/monitorUrlChange";
import "./overrides/monitorVideoTitle";

console.log("ani2mpv: 載入 main.jsx");

let appContainer = null;
const targetSelector = ".ncc-choose-btn";

const observer = new MutationObserver(() => {
    const target = document.querySelector(targetSelector);

    if (target) {
        // appContainer 已經存在就不會重複插入
        if (appContainer && document.body.contains(appContainer)) {
            return;
        }

        // 建立自己的掛載點，讓頁面重新渲染不會消失
        appContainer = document.createElement("div");
        appContainer.id = "ani2mpv-root";
        target.after(appContainer);
        ReactDOM.createRoot(appContainer).render(<App />);
    }
});

observer.observe(document.body, { childList: true, subtree: true });
