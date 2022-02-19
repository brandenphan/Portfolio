import styled from "styled-components";
import { Grid, Typography, Tooltip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "@fontsource/source-sans-pro";
import React from "react";
import profile from "../../images/profile2.png";
import { useWindow } from "../../context/WindowContext";

export default function About() {
    const {width, height} = useWindow();

    return (
        <>
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
                                        <Grid item>
                                            <Tooltip title="branden.phan@gmail.com">
                                                <StyledAnchor target="_blank" href="mailto: branden.phan@gmail.com" rel="noreferrer" style={{marginTop: "-8%"}}>
                                                    <EmailIcon style={{fontSize: "45px", color: "#3672FF"}} />
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
                                        <Grid item>
                                            <Tooltip title="branden.phan@gmail.com">
                                                <StyledAnchor target="_blank" href="mailto: branden.phan@gmail.com" rel="noreferrer" style={{marginTop: "-8%"}}>
                                                    <EmailIcon style={{fontSize: "45px", color: "#3672FF"}} />
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
                                        <Grid item>
                                            <Tooltip title="branden.phan@gmail.com">
                                                <StyledAnchor target="_blank" href="mailto: branden.phan@gmail.com" rel="noreferrer" style={{marginTop: "-8%"}}>
                                                    <EmailIcon style={{fontSize: "45px", color: "#3672FF"}} />
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
                                        <Grid item>
                                            <Tooltip title="branden.phan@gmail.com">
                                                <StyledAnchor target="_blank" href="mailto: branden.phan@gmail.com" rel="noreferrer" style={{marginTop: "-8%"}}>
                                                    <EmailIcon style={{fontSize: "45px", color: "#3672FF"}} />
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
                                        <Grid item>
                                            <Tooltip title="branden.phan@gmail.com">
                                                <StyledAnchor target="_blank" href="mailto: branden.phan@gmail.com" rel="noreferrer" style={{marginTop: "-8%"}}>
                                                    <EmailIcon style={{fontSize: "45px", color: "#3672FF"}} />
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
                                        <Grid item>
                                            <Tooltip title="branden.phan@gmail.com">
                                                <StyledAnchor target="_blank" href="mailto: branden.phan@gmail.com" rel="noreferrer" style={{marginTop: "-8%"}}>
                                                    <EmailIcon style={{fontSize: "45px", color: "#3672FF"}} />
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
                                        <Grid item>
                                            <Tooltip title="branden.phan@gmail.com">
                                                <StyledAnchor target="_blank" href="mailto: branden.phan@gmail.com" rel="noreferrer" style={{marginTop: "-8%"}}>
                                                    <EmailIcon style={{fontSize: "45px", color: "#3672FF"}} />
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
                                        <Grid item>
                                            <Tooltip title="branden.phan@gmail.com">
                                                <StyledAnchor target="_blank" href="mailto: branden.phan@gmail.com" rel="noreferrer" style={{marginTop: "-8%"}}>
                                                    <EmailIcon style={{fontSize: "45px", color: "#3672FF"}} />
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
                                        <Grid item>
                                            <Tooltip title="branden.phan@gmail.com">
                                                <StyledAnchor target="_blank" href="mailto: branden.phan@gmail.com" rel="noreferrer" style={{marginTop: "-8%"}}>
                                                    <EmailIcon style={{fontSize: "45px", color: "#3672FF"}} />
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
                                        <Grid item>
                                            <Tooltip title="branden.phan@gmail.com">
                                                <StyledAnchor target="_blank" href="mailto: branden.phan@gmail.com" rel="noreferrer" style={{marginTop: "-8%"}}>
                                                    <EmailIcon style={{fontSize: "45px", color: "#3672FF"}} />
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
        </>
    )
}

const StyledAnchor = styled.a`
    display: block;
    &:hover {
        transform: perspective(700px) translateZ(25px);
    }
`;