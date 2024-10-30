# ani2mpv

ani2mpv 是一個篡改猴插件，用於巴哈姆特動畫瘋，可以讓影片跳轉至本地的 MPV 播放器

## 功能

- 跳轉至本地 MPV 播放

- 檢查你是不是動畫瘋付費會員，如果不是，插件會自動模擬播放廣告的 API

## 安裝

1. 請確認你的電腦有安裝 MPV

2. 請確認你的瀏覽器有安裝 [Tampermonkey](https://www.tampermonkey.net/)

3. 點擊安裝 [ani2mpv](https://greasyfork.org/zh-TW/scripts/514856-ani2mpv)

## 首次安裝 Tampermonkey

如果你是使用 Chrome 瀏覽器，在首次安裝 Tampermonkey 可能會遇到以下問題：

Please enable developer mode to allow userscript injection. Click here for more info how to do this.

https://www.tampermonkey.net/faq.php#Q209

Chrome 瀏覽器需要你到 chrome://extensions 開啟開發者模式，這樣 Tampermonkey 才能順利運行

## MPV 設定檔

mpv.net 的設定檔在 %APPDATA%\Roaming\mpv.net

請在這個資料夾底下的 mpv.conf 最後一行加入：

```
http-header-fields="origin: https://ani.gamer.com.tw"
```



## License

MIT License

建立至 [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey) 框架的 React 專案