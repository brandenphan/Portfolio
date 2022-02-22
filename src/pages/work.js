import React from 'react'
import NavBar from '../components/NavBar'
import Layout from "../components/Layout"
import { Grid, Typography, Button, Collapse } from "@mui/material"
import { graphql } from 'gatsby';
import "@fontsource/source-sans-pro";

export default function Work({ data }) {
    const { designedBy, copyright } = data.Footer.siteMetadata;

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

    const [openLotus, setOpenLotus] = React.useState(false);
    const [openExtremePC, setOpenExtremePC] = React.useState(false);
    const handleOpenLotus = () => {
        if (openLotus === true) {
            setOpenLotus(false);
        }
        else {
            setOpenLotus(true);
        }
    }
    const handleOpenExtremePC = () => {
        if (openExtremePC === true) {
            setOpenExtremePC(false);
        }
        else {
            setOpenExtremePC(true);
        }
    }

    return (
        <Layout>
            <div style={{minHeight: "100vh"}}>
                <NavBar />
                
                <Grid container>
                    {width > 700 ? (<Grid item xs={12}><br /><br /><br /><br /><br /><br /><br /><br /></Grid>) : (<Grid item xs={12}><br /><br /><br /><br /><br /><br /></Grid>)}

                    {width > 1300 ? (<Grid item xs={2} />) : (<Grid item xs={1.5} />)}
                    <Grid item xs={lineLength(width)}>
                        <br />
                        <hr style={{border: "1px solid #3672FF", marginTop: "1%"}} />
                    </Grid>
                    <Grid item xs={innerLength(width)} sx={{display: "flex", justifyContent: "center"}}>
                        <Typography variant="h4" sx={{fontFamily: "Source Sans Pro", color: "#3672FF"}}><b>Work</b></Typography>
                        <br />
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs={lineLength(width)}>
                        <br />
                        <hr style={{border: "1px solid #3672FF", marginTop: "1%"}} />
                    </Grid>
                    {width > 1300 ? (<Grid item xs={2} />) : (<Grid item xs={1.5} />)}

                    <Grid item xs={12}><br /><br /></Grid>
                    <WorkBox data={data.Lotus} width={width} open={openLotus} handleOpen={handleOpenLotus} />
                    <WorkBox data={data.ExtremePC} width={width} open={openExtremePC} handleOpen={handleOpenExtremePC} />


                    <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                        <div>
                            {width <= 1000 && (<><br /><br /></>)}
                            <br />
                            <br />
                            <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}} align="center">{designedBy}</Typography>
                            <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#6794FF"}} align="center">{copyright}</Typography>
                            <br />
                            <br />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}

const WorkBox = ({ data, width, open, handleOpen }) => {
    const { title, jobTitle, point1, point2, point3, point4, date, location } = data.frontmatter;

    return (
        <>
            <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                <Grid container sx={{width: boxWidth(width), padding: "1%", border: "2px solid #d7e3fc", borderRadius: "5px", boxShadow: "0px 2px 5px 0px #C6D2EC", backgroundColor: "#d7e3fc"}}>
                    {width > 1000 && (
                        <>
                            <Grid item xs={8} sx={{display: "flex", justifyContent: "center"}}>
                                <div>
                                    <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>{title}</b></Typography>
                                    <Typography variant="h6" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}}><b>{jobTitle}</b></Typography>
                                    <ul>
                                        <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point1}</Typography></li>
                                        <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point2}</Typography></li>
                                        <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point3}</Typography></li>
                                        <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point4}</Typography></li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item xs={4} sx={{display: "flex", justifyContent: "flex-end"}}>
                                <div>
                                    <Typography align="right" variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{date}</Typography>
                                    <Typography align="right" variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{location}</Typography>
                                </div>
                            </Grid>
                        </>
                    )}
                    {width <= 1000 && (
                        <Grid item xs={12} sx={{display: "flex", justifyContent: "center", paddingRight: "1.5%"}}>
                            <div>
                                <br />
                                <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>{title}</b></Typography>
                                <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}}><b>{jobTitle}</b></Typography>
                                <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{location}</Typography>
                                <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{date}</Typography>
                                <Collapse in={open}>
                                    <ul className="test" style={{display: "block"}}>
                                        <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point1}</Typography></li>
                                        <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point2}</Typography></li>
                                        <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point3}</Typography></li>
                                        <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point4}</Typography></li>
                                    </ul>
                                </Collapse>
                                {open ? (
                                    <Button onClick={() => {handleOpen()}} sx={{color: "#3672FF", fontFamily: "Source Sans Pro"}}><b>Collapse</b></Button>
                                ) : (
                                    <>
                                        <br />
                                        <Button onClick={() => {handleOpen()}} sx={{color: "#3672FF", fontFamily: "Source Sans Pro"}}><b>Read More</b></Button>
                                    </>
                                )}
                            </div>
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Grid item xs={12}><br /><br /><br /></Grid>
        </>
    )
}

const boxWidth = (width) => {
    if (width > 1300) {
        return "67%";
    }
    else if (width <= 1300) {
        return "75%";
    }
}

const lineLength = (width) => {
    if (width > 800) {
        return 3.5;
    }
    else if (width <= 800 && width > 600) {
        return 3.25;
    }
    else if (width <= 600 && width > 500) {
        return 3;
    }
    else if (width <= 500) {
        return 2.5;
    }
}

const innerLength = (width) => {
    if (width > 1300) {
        return 1;
    }
    else if (width <= 1300 && width > 800) {
        return 2;
    }
    else if (width <= 800 && width > 600) {
        return 2.5;
    }
    else if (width <= 600 && width > 500) {
        return 3
    }
    else if (width <= 500) {
        return 4;
    }
}

export const query = graphql`
    query WorkQuery {
        Lotus: markdownRemark(fileAbsolutePath: {regex: "/Lotus.md/"}) {
            frontmatter {
                title
                jobTitle
                point1
                point2
                point3
                point4
                date
                location
            }
        }
        ExtremePC: markdownRemark(fileAbsolutePath: {regex: "/ExtremePC.md/"}) {
            frontmatter {
                title
                jobTitle
                point1
                point2
                point3
                point4
                date
                location
            }
        }
        Footer: site {
            siteMetadata {
                designedBy
                copyright
            }
        }
    }
`