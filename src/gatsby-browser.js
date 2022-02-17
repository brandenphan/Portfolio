import React from "react";
import WidthContextProvider from "./context/widthContext";

export const RootElement = ({element}) => {
    <WidthContextProvider>{element}</WidthContextProvider>
}