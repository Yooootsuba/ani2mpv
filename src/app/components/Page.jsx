import React from "react";

import MpvButton from "./MpvButton";
import MessageBox from "./MessageBox";

export default function Page({ onClick, text }) {
    return (
        <>
            <MpvButton onClick={onClick} />
            <MessageBox text={text} />
        </>
    );
}
