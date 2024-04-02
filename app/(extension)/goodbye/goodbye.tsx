'use client'

import { useState } from "react";
import Feedback from "./feedback";
import Final from "./final";

export default function Goodbye() {
    const [isSent, setIsSent] = useState(false);
    const emelent = isSent ? <Final /> : <Feedback setIsSent={setIsSent}/>

    return(
        <>
            {emelent}
        </>
    )
}