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
import Layout from "../components/Layout";

export default function Index() {
    const [width, setWindowWidth] = React.useState(0);
    const [height, setWindowHeight] = React.useState(0);
    const updateDimensions = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    React.useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    return (
        <Layout>
            <div style={{height: "85vh"}}>
                <NavBar />

                {width > 1600 && (
                    <>
                        {height > 600 && (
                            <Grid container>
                                <Grid item xs={1.5} />
                                <Grid item xs={5} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{padding: "10%", marginTop: "-5%"}}>
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
                                                    <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-4%"}}>
                                                        <LinkedInIcon style={{fontSize: "42px", color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{marginTop: "-5%"}}>
                                        <img src={profile} alt="ProfilePicture" />
                                    </div>
                                </Grid>
                                <Grid item xs={1.5} />
                            </Grid>
                        )}

                        {height <= 600 && (
                            <Grid container>
                                <Grid item xs={12} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{padding: "10%"}}>
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
                                                    <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-4%"}}>
                                                        <LinkedInIcon style={{fontSize: "42px", color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        )}
                    </>
                )}

                {width <= 1600 && width > 1200 && (
                    <>
                        {height > 600 && (
                            <Grid container>
                                <Grid item xs={1} />
                                <Grid item xs={5.5} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
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
                                                    <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-4%"}}>
                                                        <LinkedInIcon style={{fontSize: "42px", color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={0.5}/>
                                <Grid item xs={4} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{marginTop: "-4%"}}>
                                        <img src={profile} alt="ProfilePicture" />
                                    </div>
                                </Grid>
                                <Grid item xs={1} />
                            </Grid>
                        )}

                        {height <= 600 && (
                            <Grid container>
                                <Grid item xs={12} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{padding: "10%", marginTop: "1%"}}>
                                        <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro"}}><b>Hi, I'm Branden Phan</b></Typography>
                                        <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: "2%"}}><b>Software Developer</b></Typography>
                                        <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro", marginTop: "2%"}}>A 3rd year computer science student at the University of Guelph</Typography>
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
                                                    <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-4%"}}>
                                                        <LinkedInIcon style={{fontSize: "42px", color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        )}
                    </>
                )}

                {width <= 1200 && width > 1000 && (
                    <>
                        {height > 600 && (
                            <Grid container>
                                <Grid item xs={0.5} />
                                <Grid item xs={6} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
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
                                                    <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-4%"}}>
                                                        <LinkedInIcon style={{fontSize: "42px", color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={1}/>
                                <Grid item xs={4} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{marginTop: "-4%"}}>
                                        <img src={profile} alt="ProfilePicture" />
                                    </div>
                                </Grid>
                                <Grid item xs={0.5}/>
                            </Grid>
                        )}

                        {height <= 600 && (
                            <Grid container>
                                <Grid item xs={12} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{padding: "10%"}}>
                                        <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro"}}><b>Hi, I'm Branden Phan</b></Typography>
                                        <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: "2%"}}><b>Software Developer</b></Typography>
                                        <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro", marginTop: "2%"}}>A 3rd year computer science student at the University of Guelph</Typography>
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
                                                    <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-4%"}}>
                                                        <LinkedInIcon style={{fontSize: "42px", color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        )}
                    </>
                )}

                {width <= 1000 && width > 400 && (
                    <>
                        {height > 500 && (
                            <Grid container>
                                <Grid item xs={12} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{padding: "10%", marginTop: "-4%"}}>
                                        <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro"}}><b>Hi, I'm</b></Typography>
                                        <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro"}}><b>Branden Phan</b></Typography>
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
                                                    <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-4%"}}>
                                                        <LinkedInIcon style={{fontSize: "40px", color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        )}

                        {height <= 500 && (
                            <Grid container>
                                <Grid item xs={12} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{padding: "10%", marginTop: "-1%"}}>
                                        <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro"}}><b>Hi, I'm Branden Phan</b></Typography>
                                        <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: "2%"}}><b>Software Developer</b></Typography>
                                        <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro", marginTop: "2%"}}>A 3rd year computer science student at the University of Guelph</Typography>
                                        <Grid container justifyContent="center" spacing={2} sx={{marginTop: "4%"}}>
                                            <Grid item>
                                                <Tooltip title="Github">
                                                    <StyledAnchor target="_blank" href="https://github.com/brandenphan" rel="noreferrer">
                                                        <GitHubIcon style={{fontSize: "33px", color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                            </Grid>
                                            <Grid item>
                                                <Tooltip title="LinkedIn">
                                                    <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-4%"}}>
                                                        <LinkedInIcon style={{fontSize: "40px", color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        )}
                    </>
                )}

                {width <= 400 && (
                    <>
                        {height > 500 && (
                            <Grid container>
                                <Grid item xs={12} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{padding: "10%", marginTop: "-4%"}}>
                                        <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro"}}><b>Hi, I'm</b></Typography>
                                        <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro", marginTop: "2%"}}><b>Branden Phan</b></Typography>
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
                                                    <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-4%"}}>
                                                        <LinkedInIcon style={{fontSize: "40px", color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        )}

                        {height <= 500 && (
                            <Grid container>
                                <Grid item xs={12} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{padding: "10%", marginTop: "-1%"}}>
                                        <Typography align="center" variant="h5" sx={{fontFamily: "Source Sans Pro"}}><b>Hi, I'm</b></Typography>
                                        <Typography align="center" variant="h5" sx={{fontFamily: "Source Sans Pro", marginTop: "1%"}}><b>Branden Phan</b></Typography>
                                        <Typography align="center" variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: "2%"}}><b>Software Developer</b></Typography>
                                        <Typography align="center" variant="subtitle1" sx={{fontFamily: "Source Sans Pro", marginTop: "2%"}}>A 3rd year computer science student at the University of Guelph</Typography>
                                        <Grid container justifyContent="center" spacing={2} sx={{marginTop: "4%"}}>
                                            <Grid item>
                                                <Tooltip title="Github">
                                                    <StyledAnchor target="_blank" href="https://github.com/brandenphan" rel="noreferrer">
                                                        <GitHubIcon style={{fontSize: "33px", color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                            </Grid>
                                            <Grid item>
                                                <Tooltip title="LinkedIn">
                                                    <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-4%"}}>
                                                        <LinkedInIcon style={{fontSize: "40px", color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        )}
                    </>
                )}

            </div>

            {height > 600 && (
                <div>
                    <div style={{height: "6vh"}} />
                    <div style={{height: "9vh"}}>
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
            )}

            {height <= 600 && height > 450 && (
                <div>
                    <div style={{height: "2vh"}} />
                    <div style={{height: "13vh"}}>
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
            )}

            {height <= 450 && (
                <div>
                    <div style={{height: "15vh"}}>
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
            )}
        </Layout>
    );
}

const StyledAnchor = styled.a`
    display: block;
    &:hover {
        transform: perspective(700px) translateZ(25px);
    }
`;