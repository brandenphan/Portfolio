import React from "react";

const WindowContext = React.createContext();
export const useWindow = () => React.useContext(WindowContext);

const WindowContextProvider = ({ children }) => {
    const [width, setWindowWidth] = React.useState(0);
    const [height, setWindowHeight] = React.useState(0);
    const updateDimensions = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    React.useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions, { passive: true });
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    const value = { width, height };
    return (
        <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
    );
};

export default WindowContextProvider;
