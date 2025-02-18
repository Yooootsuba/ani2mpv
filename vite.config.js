import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import monkey, { cdn } from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        monkey({
            entry: "src/main.jsx",
            userscript: {
                runAt: "document-start",
                icon: "https://vitejs.dev/logo.svg",
                namespace: "npm/vite-plugin-monkey",
                match: ["https://ani.gamer.com.tw/animeVideo.php?sn=*"],
                grant: ["none"],
            },
            build: {
                externalGlobals: {
                    react: cdn.jsdelivr("React", "umd/react.production.min.js"),
                    "react-dom": cdn.jsdelivr(
                        "ReactDOM",
                        "umd/react-dom.production.min.js"
                    ),
                },
            },
        }),
    ],
});
