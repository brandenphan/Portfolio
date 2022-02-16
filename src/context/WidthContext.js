import React from "react";

const WidthContext = React.createContext();
export const useWidth = () => React.useContext(WidthContext);

const WidthContextProvider = ({ children }) => {
    const [width, setWindowWidth] = React.useState(0);
    const updateDimensions = () => {
        setWindowWidth(window.innerWidth);
    };

    React.useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions, { passive: true });
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    const value = { width };
    return (
        <WidthContext.Provider value={value}>{children}</WidthContext.Provider>
    );
};

export default WidthContextProvider;
