import styled from "styled-components";
import { Grid, Typography, Tooltip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "@fontsource/source-sans-pro";
import React from "react";
import profile from "../../images/profile2.png";
import { useWindow } from "../../context/WindowContext";

const firstGridLength = (width) => {
    if (width > 1600) {
        return 1.5
    }
    else if (width <= 1600 && width > 1200) {
        return 1;
    }
    else if (width <= 1200 && width > 1000) {
        return 0.5;
    }
}

const mainGridLength = (width, height) => {
    if (width > 1600) {
        if (height > 600) {
            return 5;
        }
        else {
            return 12;
        }
    }
    else if (width <= 1600 && width > 1200) {
        if (height > 600) {
            return 5.5;
        }
        else {
            return 12;
        }
    }
    else if (width <= 1200 && width > 1000) {
        if (height > 600) {
            return 6;
        }
        else {
            return 12;
        }
    }
}

const margin = (width, height) => {
    if (width > 1600) {
        if (height > 600) {
            return "-5%";
        }
        else {
            return "0%"
        }
    }
    else if (width <= 1600 && width > 1200) {
        if (height > 600) {
            return "-4%";
        }
        else {
            return "1%";
        }
    }
    else if (width <= 1200 && width > 1000) {
        if (height > 600) {
            return "-4%";
        }
        else {
            return "0%";
        }
    }
}

const imageOuterLength = (width) => {
    if (width > 1600) {
        return 0;
    }
    else if (width <= 1600 && width > 1000) {
        return 1;
    }
}

const imageLength = (width) => {
    if (width > 1000) {
        return 4;
    }
}

const imageAfterLength = (width) => {
    if (width > 1600) {
        return 1.5;
    }
    else if (width <= 1600 && width > 1000) {
        return 0.5;
    }
}

const nameSize = (width, height) => {
    if (width > 1600) {
        return "h3";
    }
    else if (width <= 1600 && width > 1000) {
        if (height > 600) {
            return "h3";
        }
        else {
            return "h4";
        }
    }
}

const jobTitleSize = (width, height) => {
    if (width > 1600) {
        return "h5";
    }
    else if (width <= 1600 && width > 1000) {
        if (height > 600) {
            return "h5";
        }
        else {
            return "h6";
        }
    }
}

const descriptionSize = (width, height) => {
    if (width > 1600) {
        return "h5";
    }
    else if (width <= 1600 && width > 1000) {
        if (height > 600) {
            return "h5";
        }
        else {
            return "h6";
        }
    }
}

export default function About({ siteData }) {
    const { width, height } = useWindow();
    const { intro, name, jobTitle, description } = siteData.site.siteMetadata;

    return (
        <>

            {width > 1000 && (
                <Grid container>
                    {height > 600 && (<Grid item xs={firstGridLength(width)} />)}
                    <Grid item xs={mainGridLength(width, height)} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div style={{padding: "10%", marginTop: margin(width, height) }}>
                            <Typography align="center" variant={nameSize(width, height)} sx={{fontFamily: "Source Sans Pro"}}><b>{intro} {name}</b></Typography>
                            <Typography align="center" variant={jobTitleSize(width, height)} sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: "2%"}}><b>{jobTitle}</b></Typography>
                            <Typography align="center" variant={descriptionSize(width, height)} sx={{fontFamily: "Source Sans Pro", marginTop: "2%"}}>{description}</Typography>
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
                    {height > 600 && (
                        <>
                            <Grid item xs={imageOuterLength(width)} />
                            <Grid item xs={imageLength(width)} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <div style={{marginTop: "-5%"}}>
                                    <img src={profile} alt="ProfilePicture" />
                                </div>
                            </Grid>
                            <Grid item xs={imageAfterLength(width)} />
                        </>
                    )}
                </Grid>
            )}


            {width <= 1000 && width > 400 && (
                <Grid container>
                    <Grid item xs={12} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div style={{padding: "10%", marginTop: height > 500 ? ("-4%") : ("-1%")}}>
                            {height > 500 ? (
                                <>
                                    <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro"}}><b>{intro}</b></Typography>
                                    <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro"}}><b>{name}</b></Typography>
                                    <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: "4%"}}><b>{jobTitle}</b></Typography>
                                    <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro", marginTop: "4%"}}>{description}</Typography>
                                </>
                            ) : (
                                <>
                                    <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro"}}><b>{intro} {name}</b></Typography>
                                    <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: "2%"}}><b>{jobTitle}</b></Typography>
                                    <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro", marginTop: "2%"}}>{description}</Typography>
                                </>
                            )}
                            <Grid container justifyContent="center" spacing={2} sx={{marginTop: height > 500 ? ("6%") : ("4%")}}>
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
                                            <EmailIcon style={{fontSize: "43px", color: "#3672FF"}} />
                                        </StyledAnchor>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            )}

            {width <= 400 && (
                <Grid container>
                    <Grid item xs={12} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div style={{padding: "10%", marginTop: height > 500 ? ("-4%") : ("-1%")}}>
                            <Typography align="center" variant={height > 500 ? ("h4") : ("h5")} sx={{fontFamily: "Source Sans Pro"}}><b>{intro}</b></Typography>
                            <Typography align="center" variant={height > 500 ? ("h4") : ("h5")} sx={{fontFamily: "Source Sans Pro", marginTop: height > 500 ? ("2%") : ("1%")}}><b>{name}</b></Typography>
                            <Typography align="center" variant={height > 500 ? ("h6") : ("subtitle1")} sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: height > 500 ? ("4%") : ("2%")}}><b>{jobTitle}</b></Typography>
                            <Typography align="center" variant={height > 500 ? ("h6") : ("subtitle1")} sx={{fontFamily: "Source Sans Pro", marginTop: height > 500 ? ("4%") : ("2%")}}>{description}</Typography>
                            <Grid container justifyContent="center" spacing={2} sx={{marginTop: height > 500 ? ("6%") : ("4%")}}>
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
                                            <EmailIcon style={{fontSize: "43px", color: "#3672FF"}} />
                                        </StyledAnchor>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
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