import React from "react";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { graphql } from "gatsby";
import { Grid, Typography, Tooltip } from "@mui/material";
import "@fontsource/source-sans-pro";
import styled from "styled-components";
import profile from "../images/profile.png";

export default function Index({ data }) {
    const { intro, name, jobTitle, description } = data.site.siteMetadata;
    const { designedBy, copyright } = data.site.siteMetadata;
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


    return (
        <Layout>
            <div style={{height: "85vh"}}>
                <NavBar />

                <Grid container>
                    {width > 0 && (
                        <>
                            {height > 600 && (<Grid item xs={firstGridLength(width)} />)}
                            <Grid item xs={mainGridLength(width, height)} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <div style={{padding: "10%", marginTop: margin(width, height) }}>
                                    {width > 1000 && (
                                        <>
                                            <Typography align="center" variant={nameSize(width, height)} sx={{fontFamily: "Source Sans Pro"}}><b>{intro} {name}</b></Typography>
                                            <Typography align="center" variant={jobTitleSize(width, height)} sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: "2%"}}><b>{jobTitle}</b></Typography>
                                            <Typography align="center" variant={descriptionSize(width, height)} sx={{fontFamily: "Source Sans Pro", marginTop: "2%"}}>{description}</Typography>
                                        </>
                                    )}
                                    {width <= 1000 && width > 400 && (
                                        <>
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
                                        </>
                                    )}
                                    {width < 400 && (
                                        <>
                                            <Typography align="center" variant={height > 500 ? ("h4") : ("h5")} sx={{fontFamily: "Source Sans Pro"}}><b>{intro}</b></Typography>
                                            <Typography align="center" variant={height > 500 ? ("h4") : ("h5")} sx={{fontFamily: "Source Sans Pro", marginTop: height > 500 ? ("2%") : ("1%")}}><b>{name}</b></Typography>
                                            <Typography align="center" variant={height > 500 ? ("h6") : ("subtitle1")} sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginTop: height > 500 ? ("4%") : ("2%")}}><b>{jobTitle}</b></Typography>
                                            <Typography align="center" variant={height > 500 ? ("h6") : ("subtitle1")} sx={{fontFamily: "Source Sans Pro", marginTop: height > 500 ? ("4%") : ("2%")}}>{description}</Typography>
                                        </>
                                    )}
                                    <Grid container justifyContent="center" spacing={2} sx={{marginTop: mainMargin(width, height)}}>
                                        <Grid item>
                                                <Tooltip title="Github">
                                                    <StyledAnchor target="_blank" href="https://github.com/brandenphan" rel="noreferrer">
                                                        <GitHubIcon style={{fontSize: width > 1000 ? ("35px") : ("33px"), color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                        </Grid>
                                        <Grid item>
                                                <Tooltip title="LinkedIn">
                                                    <StyledAnchor target="_blank" href="https://www.linkedin.com/in/brandenphan/" rel="noreferrer" style={{marginTop: "-4%"}}>
                                                        <LinkedInIcon style={{fontSize: width > 1000 ? ("42px") : ("40px"), color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                        </Grid>
                                        <Grid item>
                                                <Tooltip title="branden.phan@gmail.com">
                                                    <StyledAnchor target="_blank" href="mailto: branden.phan@gmail.com" rel="noreferrer" style={{marginTop: "-8%"}}>
                                                        <EmailIcon style={{fontSize: width > 1000 ? ("45px") : ("43px"), color: "#3672FF"}} />
                                                    </StyledAnchor>
                                                </Tooltip>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            {width > 1000 && (
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
                        </>
                    )}
                </Grid>
            </div>

            <div>
                {width > 0 && (
                    <>
                        {height > 600 && (
                            <div style={{height: "6vh"}} />
                        )}
                        {height <= 600 && height > 450 && (
                            <div style={{height: "2vh"}} />
                        )}
                        <div style={{height: footerDivHeight(height)}}>
                            <Grid container>
                                <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                                    <div>
                                        <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}} align="center">{designedBy}</Typography>
                                        <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#6794FF"}} align="center">{copyright}</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </>
                )}
            </div>
        </Layout>

    );
}

export const query = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                title
                description
                siteUrl
                intro
                name
                jobTitle
                designedBy
                copyright
            }
        }
    }
`

const footerDivHeight = (height) => {
    if (height > 600) {
        return "9vh";
    }
    else if (height <= 600 && height > 450) {
        return "13vh";
    }
    else if (height <= 450) {
        return "15vh";
    }
}


const StyledAnchor = styled.a`
    display: block;
    &:hover {
        transform: perspective(700px) translateZ(25px);
    }
`;

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
    else if (width <= 1000 && width > 400) {
        return 12;
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
    else if (width <= 1000) {
        if (height > 500) {
            return "-4%";
        }
        else {
            return "-1%";
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
    else if (width <= 1000 && width > 400) {
        return "h4";
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
    else if (width <= 1000 && width > 400) {
        return "h6";
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
    else if (width <= 1000 && width > 400) {
        return "h6";
    }
}

const mainMargin = (width, height) => {
    if (width > 1000) {
        return "4%";
    }
    else if (width <= 1000) {
        if (height > 500) {
            return "6%";
        }
        else {
            return "4%";
        }
    }
}