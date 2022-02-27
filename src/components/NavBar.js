import React from "react";
import { Box, Toolbar, AppBar, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import "@fontsource/source-sans-pro";

export default function NavBar() {
    const [width, setWindowWidth] = React.useState(0);
    const updateDimensions = () => {
        setWindowWidth(window.innerWidth);
    }
    React.useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);
    
    const [menuElement, setMenuElement] = React.useState(null);
    const open = Boolean(menuElement);

    const handleClick = (event) => {
        setMenuElement(event.currentTarget);
    };
    const handleClose = () => {
        setMenuElement(null);
    };

    return (
        <>
            {width > 700 && (
                <Box sx={{flexGrow: 1, position: "absolute", top: "0", left: "0", width: "100%", marginTop: "1%"}}>
                    <AppBar position="static" color="transparent" sx={{boxShadow: "none"}}>
                        <Toolbar>
                            <div style={{marginLeft: navBarMarginBreakpoint(width)}}>
                                <Button onClick={() => {navigate("/")}} sx={{marginRight: "2%", paddingRight: "1%", paddingLeft: "1%", fontFamily: "Source Sans Pro", fontSize: "20px", color: "#FBC740"}}>
                                    <b><i>BP</i></b>
                                </Button>
                            </div>

                            <div style={{width: navBarWidthBreakpoint(width), display: "flex", justifyContent: "flex-end"}}>
                                {["About", "Education", "Projects", "Work"].map((instance, ID) => {
                                    let navigation;
                                    if (instance === "About") {
                                        navigation = "/";
                                    }
                                    else {
                                        navigation = "/" + instance.toLowerCase();
                                    }
                                    return (<ButtonComponent key={ID} onClick={() => {navigate(navigation)}} navigate={navigation} buttonName={instance} />)
                                })}
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
            )}

            {width <= 700 && width > 0 && (
                <Box sx={{flexGrow: 1, position: "absolute", top: "0", left: "0", width: "100%"}}>
                    <AppBar position="static" sx={{ background: "transparent", boxShadow: "none" }}>
                        <Toolbar sx={{marginTop: "2%"}}>
                            <Button onClick={() => {navigate("/")}} sx={{marginRight: "2%", paddingRight: "1%", paddingLeft: "1%", fontFamily: "Source Sans Pro", fontSize: "24px", color: "#FBC740"}}>
                                <b><i>BP</i></b>
                            </Button>
                            <IconButton sx={{ position: "absolute", right: "0", marginRight: "3%"}}
                                onClick={handleClick}
                                aria-label="MenuButton"
                            >
                                <MenuIcon sx={{ fontSize: "45px", color: "#E60268" }}/>
                            </IconButton>
                            <Menu
                                anchorEl={menuElement}
                                open={open}
                                onClose={handleClose}
                            >
                                {["About", "Education", "Projects", "Work"].map((instance, ID) => {
                                    let navigation;
                                    if (instance === "About") {
                                        navigation = "/";
                                    }
                                    else {
                                        navigation = "/" + instance.toLowerCase();
                                    }
                                    return (<MenuItemComponent key={ID} menuName={instance} navigate={navigation} onClick={() => navigate(navigation)} />)
                                })}
                            </Menu>
                        </Toolbar>
                    </AppBar>
                </Box>
            )}
        </>
    )
}

const navBarMarginBreakpoint = (width) => {
    if (width > 1400) {
        return "12%";
    }
    else if (width <= 1400 && width > 1000) {
        return "10%";
    }
    else if (width <= 1000) {
        return "6%";
    }
}

const navBarWidthBreakpoint = (width) => {
    if (width > 1400) {
        return "70%";
    }
    else if (width <= 1400 && width > 1000) {
        return "80%";
    }
    else if (width <= 1000) {
        return "86%";
    }
}

const ButtonComponent = ({navigate, buttonName, onClick}) => {
    const location = useLocation();
    const currentLocation = location.pathname.toLowerCase();

    let active = false;
    if (navigate === '/') {
        if (currentLocation === navigate.toLowerCase()) {
            active = true;
        }
    }
    else {
        if (currentLocation.includes(navigate.toLowerCase())) {
            active = true;
        }
    }

    return (
        <>
            {active ? (
                <Button sx={{marginRight: "2%", paddingRight: "1%", paddingLeft: "1%", fontFamily: "Source Sans Pro", fontSize: "16px", color: "#E60268"}}>
                    <b>{buttonName}</b>
                </Button>
            ) : (
                <Button onClick={onClick} sx={{marginRight: "2%", paddingRight: "1%", paddingLeft: "1%", fontFamily: "Source Sans Pro", fontSize: "16px", "&:hover": {borderBottom: "2px solid", borderRadius: "0"}, color: "#3672FF"}}>
                    <b>{buttonName}</b>
                </Button>
            )}
        </>
    )
}

const MenuItemComponent = ({navigate, menuName, onClick}) => {
    const location = useLocation();
    const currentLocation = location.pathname.toLowerCase();

    let active = false;
    if (navigate === "/") {
        if (currentLocation === navigate.toLowerCase()) {
            active = true;
        }
    } else {
        if (currentLocation.includes(navigate.toLowerCase())) {
            active = true;
        }
    }

    return (
        <>
            {active ? (
                <MenuItem sx={{backgroundColor: "#AAC7FD", fontFamily: "Source Sans Pro", fontSize: "20px"}}>{menuName}</MenuItem>
            ) : (
                <MenuItem sx={{fontFamily: "Source Sans Pro", fontSize: "20px"}} onClick={onClick}>{menuName}</MenuItem>
            )}
        </>
    );
};