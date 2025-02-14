import { getDefaultStore } from "jotai";
import { vipAtom } from "../atoms/animeAtom";

const store = getDefaultStore();

(function overrideFetch() {
    const originalFetch = window.fetch;

    window.fetch = async function (input, init) {
        let url;

        if (typeof input === "string") {
            url = new URL(input, location.origin);
        } else if (input instanceof Request) {
            url = new URL(input.url, location.origin);
        } else {
            return originalFetch(input, init);
        }

        if (url.pathname === "/ajax/token.php") {
            console.log("ani2mpv: 攔截到 /ajax/token.php");

            try {
                const response = await originalFetch(input, init);
                const clonedResponse = response.clone();
                const responseData = await clonedResponse.json();

                if (responseData && typeof responseData.vip !== "undefined") {
                    store.set(vipAtom, responseData.vip);
                    console.log("ani2mpv: VIP 狀態為", responseData.vip);
                }

                return response;
            } catch (error) {
                console.error("ani2mpv: ", error);
                throw error;
            }
        }

        return originalFetch(input, init);
    };
})();
