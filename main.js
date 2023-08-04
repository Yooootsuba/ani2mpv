// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ani.gamer.com.tw/animeVideo.php?sn=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        GM.xmlHttpRequest
// ==/UserScript==

(function() {
    'use strict';

    const ad = getAd()[0];
    const sn = animefun.videoSn;
    const deviceid = animefun.getdeviceid();

    // 跳過 Facebook 的廣告
    GM.xmlHttpRequest ({
        method : "GET",
        url    : "https://ani.gamer.com.tw/ajax/videoCastcishu.php?" + "s=" + ad + "&" + "sn=" + sn,
        onload : function (response) {
            console.log("廣告播放中，請稍後 25 秒");
        }
    });

    // 等待 25 秒後執行以下功能
    setTimeout(function() {

        // 跳過動畫瘋的廣告
        GM.xmlHttpRequest ({
            method : "GET",
            url    : "https://ani.gamer.com.tw/ajax/videoCastcishu.php?" + "s=" + ad + "&" + "sn=" + sn + "&" + "ad=end",
            onload : function (response) {
                console.log("廣告播放完畢");
            }
        });

        // 取得動畫的 M3U8 網址，並且使用 MPV 播放
        GM.xmlHttpRequest ({
            method : "GET",
            url    : "https://ani.gamer.com.tw/ajax/m3u8.php?" + "sn=" + sn + "&" + "device=" + deviceid,
            onload : function (response) {
                const data = JSON.parse(response.responseText);
                console.log(data.src);
                const encodedurl = btoa(data.src).replace(/\//g, "_").replace(/\+/g, "-").replace(/\=/g, "");
                window.location.href = "mpv://play/" + encodedurl;
            }
        });

    }, 1000 * 25);
})();
