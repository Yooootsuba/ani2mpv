import axios from "axios";

export default function apiBase(
    onSuccess,
    onError,
    method,
    urlPath,
    data = null,
    contentType = "application/json"
) {
    /*
     * 巴哈動畫瘋前綴
     *
     */
    const apiRoot = "https://ani.gamer.com.tw";

    /*
     * 把 apiRoot 和路徑拼接成完整的 URL
     *
     */
    const url = `${apiRoot}${urlPath}`;

    /*
     * 定義請求 Headers
     *
     * 使用者未登入的情況下不會有 Authorization 這個欄位
     *
     */
    const headers = {
        "Content-Type": contentType,
    };

    /*
     * Axios 放 Headers 的地方
     *
     * 如果請求方法是 GET 或 DELETE 且有 Query String
     *
     * 則會把 Query String 存入這個資料結構
     *
     */
    const config = { headers };

    /*
     * 方法是 GET 或 DELETE 就執行第 1 個區域
     *
     * 否則就是 PUT、POST、PATCH 方法，執行第 2 個區域
     *
     */
    if (method == "GET" || method == "DELETE") {
        config.params = data;

        axios[method.toLowerCase()](url, config)
            .then((response) => {
                onSuccess(response);
            })
            .catch((error) => {
                onError(error);
            });
    } else {
        axios[method.toLowerCase()](url, data, config)
            .then((response) => {
                onSuccess(response);
            })
            .catch((error) => {
                onError(error);
            });
    }
}
