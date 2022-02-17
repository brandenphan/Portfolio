import React from "react";

export default function Layout({children}) {
    return (
        <div style={{position: "absolute", top: "0", left: "0", width: "100vw", overflow: "hidden"}}>
            {children}
        </div>
    )
}