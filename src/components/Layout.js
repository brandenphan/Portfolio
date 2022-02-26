import React from "react";

export default function Layout({children}) {
    return (
        <div style={{position: "absolute", top: "0", left: "0", width: "100%", overflow: "hidden", backgroundColor: "rgb(237, 242, 251, 0.45)"}}>
            {children}
        </div>
    )
}