import React from "react";

import MpvButton from "../parts/MpvButton";
import MessageBox from "../parts/MessageBox";


export default function AnimePage({ onClick, text }) {
    return (
        <div>
            <MpvButton onClick={onClick} />
            <MessageBox text={text} />
        </div>
    );
}
