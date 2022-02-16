import React from "react";
import { Box, Toolbar, AppBar, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from '@mui/icons-material/LightMode';
import {useLocation} from "@reach/router";

export default function NavBar() {
    const [width, setWindowWidth] = React.useState(0);
    const updateDimensions = () => {
        setWindowWidth(window.innerWidth);
    };

    React.useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);


    return (
        <>
            {width > 1400 && (
                <Box sx={{flexGrow: 1, position: "absolute", top: "0", left: "0", width: "100%", marginTop: "1%"}}>
                    <AppBar position="static" color="transparent" sx={{boxShadow: "none"}}>
                        <Toolbar>
                            <div style={{marginLeft: "12%"}}>
                                <IconButton sx={{"&:hover": {color: "black"}}}>
                                    <LightModeIcon />
                                </IconButton>
                            </div>

                            <div style={{width: "75%", display: "flex", justifyContent: "flex-end"}}>
                                <ButtonComponent navigate="/" buttonName="About" />
                                <ButtonComponent navigate="/Education" buttonName="Education" />
                                <ButtonComponent navigate="/Projects" buttonName="Projects" />
                                <ButtonComponent navigate="/Work" buttonName="Work" />
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
            )}

            {width <= 1400 && width > 1000 && (
                <Box sx={{flexGrow: 1, position: "absolute", top: "0", left: "0", width: "100%", marginTop: "1%"}}>
                    <AppBar position="static" color="transparent" sx={{boxShadow: "none"}}>
                        <Toolbar>
                            <div style={{marginLeft: "10%"}}>
                                <IconButton sx={{"&:hover": {color: "black"}}}>
                                    <LightModeIcon />
                                </IconButton>
                            </div>

                            <div style={{width: "80%", display: "flex", justifyContent: "flex-end"}}>
                                <ButtonComponent navigate="/" buttonName="About" />
                                <ButtonComponent navigate="/Education" buttonName="Education" />
                                <ButtonComponent navigate="/Projects" buttonName="Projects" />
                                <ButtonComponent navigate="/Work" buttonName="Work" />
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
            )}

            {width <= 1000 && width > 700 && (
                <Box sx={{flexGrow: 1, position: "absolute", top: "0", left: "0", width: "100%", marginTop: "1%"}}>
                    <AppBar position="static" color="transparent" sx={{boxShadow: "none"}}>
                        <Toolbar>
                            <div style={{marginLeft: "6%"}}>
                                <IconButton sx={{"&:hover": {color: "black"}}}>
                                    <LightModeIcon />
                                </IconButton>
                            </div>

                            <div style={{width: "86%", display: "flex", justifyContent: "flex-end"}}>
                                <ButtonComponent navigate="/" buttonName="About" />
                                <ButtonComponent navigate="/Education" buttonName="Education" />
                                <ButtonComponent navigate="/Projects" buttonName="Projects" />
                                <ButtonComponent navigate="/Work" buttonName="Work" />
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
            )}

            {width <= 700 && (<MenuComponent />)}
        </>

    )
}

const ButtonComponent = ({navigate, buttonName}) => {
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
                <Button href="/education" rel="noreferrer" sx={[{marginRight: "2%", paddingRight: "1%", paddingLeft: "1%", fontFamily: "Source Sans Pro", fontSize: "16px", "&:hover": {borderBottom: "2px solid", borderRadius: "0"}, color: "#3672FF"}]}>
                    <b>{buttonName}</b>
                </Button>
            )}
        </>
    )
}

const MenuComponent = () => {
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
            <Box
                sx={{
                    flexGrow: 1,
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                }}
            >
                <AppBar
                    position="static"
                    sx={{ background: "transparent", boxShadow: "none" }}
                >
                    <Toolbar sx={{marginTop: "2%"}}>
                        <IconButton sx={{"&:hover": {color: "black"}, marginLeft: "2%"}}>
                            <LightModeIcon style={{fontSize: "35px"}} />
                        </IconButton>
                        <IconButton
                            sx={{
                                position: "absolute",
                                right: "0",
                                marginRight: "3%",
                            }}
                            onClick={handleClick}
                            aria-label="MenuButton"
                        >
                            <MenuIcon
                                sx={{ fontSize: "45px", color: "#E60268" }}
                            />
                        </IconButton>
                        <Menu
                            anchorEl={menuElement}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItemComponent
                                menuName="About"
                                navigate="/"
                            />

                            <MenuItemComponent
                                menuName="Education"
                                navigate="/Education"
                            />

                            <MenuItemComponent
                                menuName="Projects"
                                navigate="/Projects"
                            />

                            <MenuItemComponent
                                menuName="Work"
                                navigate="/Work"
                            />
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

const MenuItemComponent = (props) => {
    let active = false;
    if (props.navigate === "/") {
        if (window.location.pathname === props.navigate) {
            active = true;
        }
    } else {
        if (window.location.href.includes(props.navigate)) {
            active = true;
        }
    }

    return (
        <>
            {active ? (
                <MenuItem
                    sx={{
                        backgroundColor: "#AAC7FD",
                        fontFamily: "Source Sans Pro",
                        fontSize: "20px",
                    }}
                >
                    {props.menuName}
                </MenuItem>
            ) : (
                <MenuItem
                    sx={{
                        fontFamily: "Source Sans Pro",
                        fontSize: "20px",
                    }}
                >
                    {props.menuName}
                </MenuItem>
            )}
        </>
    );
};