import React from "react";
// import image from "../images/Studio_Project.png";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import Particles from "react-tsparticles";
import "@fontsource/source-sans-pro";
// import floatingCogs from "../images/floating-cogs.svg";
import styled from "styled-components";
import { Grid, Typography, Tooltip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import test from "../images/test.jpg";
// import test2 from "../images/test7.png";
// import test3 from "../images/test10.png";
// import test4 from "../images/test14.jpg";
import profile from "../images/profile2.png";
import NavBar from "../components/NavBar";

export default function Index() {
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
        <div
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                overflow: "hidden",
            }}
        >
            <div style={{height: "92vh"}}>
                <NavBar />

                {width > 1600 && (
                    <Grid container>
                        <Grid item xs={1.5} sx={{backgroundColor: "#EDF2FB"}} />
                        <Grid item xs={5} sx={{backgroundColor: "#EDF2FB", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{padding: "10%", marginTop: "-4%"}}>
                                <Typography align="center" variant="h3" sx={{fontFamily: "Source Sans Pro"}}><b>Hi, I'm Branden Phan</b></Typography>
                                <Typography align="center" variant="h5" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: "2%"}}><b>Software Developer</b></Typography>
                                <Typography align="center" variant="h5" sx={{fontFamily: "Source Sans Pro", marginTop: "2%"}}>A 3rd year computer science student at the University of Guelph</Typography>
                                <Grid container justifyContent="center" spacing={2} sx={{marginTop: "4%"}}>
                                    <Grid item>
                                        <Tooltip title="Github">
                                            <StyledAnchor target="_blank" href="https://github.com/brandenphan" rel="noreferrer">
                                                <GitHubIcon style={{fontSize: "35px", color: "#3672FF"}} />
                                            </StyledAnchor>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title="LinkedIn">
                                            <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-2%"}}>
                                                <LinkedInIcon style={{fontSize: "42px", color: "#3672FF"}} />
                                            </StyledAnchor>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={4} sx={{backgroundColor: "#EDF2FB", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{marginTop: "-4%"}}>
                                <img src={profile} alt="ProfilePicture" />
                            </div>
                        </Grid>
                        <Grid item xs={1.5} sx={{backgroundColor: "#EDF2FB"}} />
                    </Grid>
                )}

                {width <= 1600 && width > 1200 && (
                    <Grid container>
                        <Grid item xs={1} sx={{backgroundColor: "#EDF2FB"}} />
                        <Grid item xs={5.5} sx={{backgroundColor: "#EDF2FB", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{padding: "10%", marginTop: "-4%"}}>
                                <Typography align="center" variant="h3" sx={{fontFamily: "Source Sans Pro"}}><b>Hi, I'm Branden Phan</b></Typography>
                                <Typography align="center" variant="h5" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: "2%"}}><b>Software Developer</b></Typography>
                                <Typography align="center" variant="h5" sx={{fontFamily: "Source Sans Pro", marginTop: "2%"}}>A 3rd year computer science student at the University of Guelph</Typography>
                                <Grid container justifyContent="center" spacing={2} sx={{marginTop: "4%"}}>
                                    <Grid item>
                                        <Tooltip title="Github">
                                            <StyledAnchor target="_blank" href="https://github.com/brandenphan" rel="noreferrer">
                                                <GitHubIcon style={{fontSize: "35px", color: "#3672FF"}} />
                                            </StyledAnchor>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title="LinkedIn">
                                            <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-2%"}}>
                                                <LinkedInIcon style={{fontSize: "42px", color: "#3672FF"}} />
                                            </StyledAnchor>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={0.5} sx={{backgroundColor: "#EDF2FB"}} />
                        <Grid item xs={4} sx={{backgroundColor: "#EDF2FB", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{marginTop: "-4%"}}>
                                <img src={profile} alt="ProfilePicture" />
                            </div>
                        </Grid>
                        <Grid item xs={1} sx={{backgroundColor: "#EDF2FB"}} />
                    </Grid>
                )}

                {width <= 1200 && width > 1000 && (
                    <Grid container>
                        <Grid item xs={0.5} sx={{backgroundColor: "#EDF2FB"}} />
                        <Grid item xs={6} sx={{backgroundColor: "#EDF2FB", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{padding: "10%", marginTop: "-4%"}}>
                                <Typography align="center" variant="h3" sx={{fontFamily: "Source Sans Pro"}}><b>Hi, I'm Branden Phan</b></Typography>
                                <Typography align="center" variant="h5" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: "2%"}}><b>Software Developer</b></Typography>
                                <Typography align="center" variant="h5" sx={{fontFamily: "Source Sans Pro", marginTop: "2%"}}>A 3rd year computer science student at the University of Guelph</Typography>
                                <Grid container justifyContent="center" spacing={2} sx={{marginTop: "4%"}}>
                                    <Grid item>
                                        <Tooltip title="Github">
                                            <StyledAnchor target="_blank" href="https://github.com/brandenphan" rel="noreferrer">
                                                <GitHubIcon style={{fontSize: "35px", color: "#3672FF"}} />
                                            </StyledAnchor>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title="LinkedIn">
                                            <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-2%"}}>
                                                <LinkedInIcon style={{fontSize: "42px", color: "#3672FF"}} />
                                            </StyledAnchor>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={1} sx={{backgroundColor: "#EDF2FB"}} />
                        <Grid item xs={4} sx={{backgroundColor: "#EDF2FB", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{marginTop: "-4%"}}>
                                <img src={profile} alt="ProfilePicture" />
                            </div>
                        </Grid>
                        <Grid item xs={0.5} sx={{backgroundColor: "#EDF2FB"}} />
                    </Grid>
                )}

                {width <= 1000 && (
                    <Grid container>
                        <Grid item xs={12} sx={{backgroundColor: "#EDF2FB", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{padding: "10%", marginTop: "-4%"}}>
                                <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro"}}><b>Hi, I'm Branden Phan</b></Typography>
                                <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: "4%"}}><b>Software Developer</b></Typography>
                                <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro", marginTop: "4%"}}>A 3rd year computer science student at the University of Guelph</Typography>
                                <Grid container justifyContent="center" spacing={2} sx={{marginTop: "6%"}}>
                                    <Grid item>
                                        <Tooltip title="Github">
                                            <StyledAnchor target="_blank" href="https://github.com/brandenphan" rel="noreferrer">
                                                <GitHubIcon style={{fontSize: "33px", color: "#3672FF"}} />
                                            </StyledAnchor>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title="LinkedIn">
                                            <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-2%"}}>
                                                <LinkedInIcon style={{fontSize: "40px", color: "#3672FF"}} />
                                            </StyledAnchor>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                )}

            </div>

            <div style={{height: "8vh"}}>
                <Grid container>
                    <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                        <div>
                            <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}} align="center">Designed by Branden Phan</Typography>
                            <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#6794FF"}} align="center">Copyright © 2022 - All Rights Reserved.</Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}




const StyledAnchor = styled.a`
    display: block;
    &:hover {
        transform: perspective(700px) translateZ(25px);
    }
`;


