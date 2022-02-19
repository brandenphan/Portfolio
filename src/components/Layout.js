import React from "react";
import WindowContextProvider from "../context/WindowContext";

// to get dark mode might have to make an outer layout to wrap the context
export default function Layout({children}) {
    return (
        <WindowContextProvider> 
            <div style={{position: "absolute", top: "0", left: "0", width: "100%", overflow: "hidden", backgroundColor: "#EDF2FB"}}>
                {children}
            </div>
        </WindowContextProvider>
    )
}