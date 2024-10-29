import axios from "axios";


/*
 * 這不是我寫的功能
 *
 * 是直接取用動畫瘋頁面上的 JavaScript
 *
 */
const ad = getAd()[0];
const sn = animefun.videoSn;
const device = animefun.getdeviceid();


export function apiStartAd(callback) {
    axios.get(`https://ani.gamer.com.tw/ajax/videoCastcishu.php?s=${ad}&sn=${sn}`)
        .then((response) => {
            callback();
        });
}


export function apiEndAd(callback) {
    axios.get(`https://ani.gamer.com.tw/ajax/videoCastcishu.php?s=${ad}&sn=${sn}&ad=end`)
        .then((response) => {
            callback();
        });
}


export function apiGetM3U8(callback) {
    axios.get(`https://ani.gamer.com.tw/ajax/m3u8.php?sn=${sn}&device=${device}`)
        .then((response) => {
            callback(response.data.src);
        });
}


export function apiIsVip(callback) {
    axios.get(`https://ani.gamer.com.tw/ajax/token.php?sn=${sn}&device=${device}`)
        .then((response) => {
            callback(response.data.vip)
        });
}