import { useEffect } from "react";
import { useAtom } from "jotai";
import { vipAtom } from "../../atoms/animeAtom";
import { apiGetToken } from "../../api/api";

export function useVipStatus() {
    const [vip, setVip] = useAtom(vipAtom);

    useEffect(() => {
        if (vip == null) {
            apiGetToken(
                (response) => {
                    setVip(response.data.vip);
                },
                (error) => {}
            );
        }
    }, [vip]);

    return { vip, setVip };
}
