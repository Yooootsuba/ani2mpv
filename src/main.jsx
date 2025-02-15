import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./overrides/fetch";
import "./overrides/click";

/*
 * 插件開始執行的進入點
 *
 */
console.log("ani2mpv: 載入 main.jsx");

const app = document.createElement("div");
const targetSelector = ".ncc-choose-btn";

const observer = new MutationObserver((mutations) => {
    const target = document.querySelector(targetSelector);

    if (target) {
        target.after(app);
        ReactDOM.createRoot(app).render(<App />);
        observer.disconnect(); // 停止觀察
    }
});

// 開始觀察 DOM 變化
observer.observe(document.body, { childList: true, subtree: true });
