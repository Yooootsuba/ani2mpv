import React from "react";

import MpvButton from "./MpvButton";
import MessageBox from "./MessageBox";

import { useAtom } from "jotai";
import { videoSnAtom } from "../../atoms/animeAtom";

export default function Page({ onClick, text }) {
    const [videoSn, setVideoSn] = useAtom(videoSnAtom);

    return (
        <>
            <MpvButton onClick={onClick} />
            <MessageBox text={text} />

            {videoSn}
        </>
    );
}
