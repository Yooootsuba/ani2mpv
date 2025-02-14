import React from "react";

import MpvButton from "./MpvButton";
import MessageBox from "./MessageBox";

export default function AnimePage({ onClick, text }) {
    return (
        <div>
            <MpvButton onClick={onClick} />
            <MessageBox text={text} />
        </div>
    );
}
