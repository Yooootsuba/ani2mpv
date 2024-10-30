# ani2mpv

ani2mpv 是一個篡改猴插件，用於巴哈姆特動畫瘋，可以讓影片跳轉至本地的 MPV 播放器

![](https://github.com/Yooootsuba/ani2mpv/blob/main/src/assets/%E4%BB%98%E8%B2%BB%E6%9C%83%E5%93%A1.png)


## 功能

- 跳轉至本地 MPV 播放

- 檢查你是不是動畫瘋付費會員，如果不是，插件會自動模擬播放廣告的 API


## 安裝

1. 請確認你的電腦有安裝 MPV

2. 請確認你的瀏覽器有安裝 [Tampermonkey](https://www.tampermonkey.net/)

3. 點擊安裝 [ani2mpv](https://greasyfork.org/zh-TW/scripts/514856-ani2mpv)

4. 其他外部設定，請見下方說明


## 首次安裝 Tampermonkey

如果你是使用 Chrome 瀏覽器，在首次安裝 Tampermonkey 可能會遇到以下問題：

Please enable developer mode to allow userscript injection. Click here for more info how to do this.

https://www.tampermonkey.net/faq.php#Q209

Chrome 瀏覽器需要你到 chrome://extensions 開啟開發者模式，這樣 Tampermonkey 才能順利運行


## MPV 設定檔資料夾

mpv.net 的設定檔資料夾在 ```%APPDATA%\mpv.net```

MPV Lazy 的設定檔資料夾在 ```<your_mpv_lazy_directory>\portable_config```

Linux 使用者的 MPV 設定檔資料夾在 ```~/.config/mpv```


## MPV 設定檔

找到設定檔資料夾後，請在資料夾底下的 mpv.conf 檔案最後一行加入：

```
http-header-fields="origin: https://ani.gamer.com.tw"
```

如果你的資料夾底下真的沒有 mpv.conf，也可以從本專案下載一份：

https://github.com/Yooootsuba/ani2mpv/blob/main/mpv/mpv.conf


## MPV Handler

我使用的是 [akiirui/mpv-handler](https://github.com/akiirui/mpv-handler)，還請使用者前往該頁面進行安裝

該作者有針對 Custom URL Scheme 這點，要求前端要傳送 Base64 編碼後的網址

如此一來可以避免不同瀏覽器傳送 URL 編碼可能出現 BUG

而且有支援跨平台（Linux 和 Windows）


## License

MIT License

建立至 [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey) 框架的 React 專案
