import React from "react"
import NavBar from "../components/NavBar"
import Layout from "../components/Layout"
import { Button, Grid, Typography } from "@mui/material"
import "@fontsource/source-sans-pro";
// import schedulemaker from "../images/schedulemaker.png";
import lotus from "../images/lotus2.png";
import javascript from "../images/javascript.svg";
import reactImage from "../images/react.svg";
import node from "../images/node.svg";
import GitHubIcon from '@mui/icons-material/GitHub';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Projects() {
    return (
        <Layout>
            <div>
                <NavBar />

                <Grid container>
                    <Grid item xs={12}><br /><br /><br /><br /><br /><br /><br /><br /></Grid>
                    
                    <Grid item xs={3} />
                        <Grid item xs={2.25}>
                            <br />
                            <hr style={{border: "1px solid #3672FF", marginTop: "1%"}} />
                        </Grid>
                        <Grid item xs={1.5} sx={{display: "flex", justifyContent: "center"}}>
                            <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro", color: "#3672FF"}}><b>Projects</b></Typography>
                        </Grid>
                        <Grid item xs={2.25}>
                            <br />
                            <hr style={{border: "1px solid #3672FF", marginTop: "1%"}} />    
                        </Grid>
                    <Grid item xs={3} />    

                    <Grid item xs={12}><br /><br /><br /></Grid>


                    <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container sx={{width: "70%", borderRadius: "5px",  border: "2px solid #d7e3fc", boxShadow: "0px 4px 8px 0px #C6D2EC", backgroundColor: "#d7e3fc"}}>
                            <Grid item xs={6}>
                                <img src={lotus} alt="LotusImage" height="100%" width="100%" style={{borderRadius: "5px 0px 0px 5px"}} />
                            </Grid>
                            <Grid item xs={0.2} />
                            <Grid item xs={5.6}>
                                <div>
                                    <br />
                                    <br />
                                    <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro"}}>
                                        <b>Lotus Thai & Vietnamese Cuisine</b>
                                    </Typography>
                                    <Typography align="center" variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>Developed a web-application to display information pertaining to the Lotus Thai & Vietnamese cuisine restaurant. Written in JavaScript utilizing the React framework. Emphasis on a modern and responsive user interface while optimizing SEO to increase custom traffic to the web-application.</Typography>
                                    <br />
                                    <br />
                                    <br />

                                    <Grid container>

                                        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <img src={javascript} alt="JavaScriptLogo" height="70%" width="70%" />
                                        </Grid>
                                        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <img src={node} alt="NodeLogo" height="70%" width="70%" />
                                        </Grid>
                                        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <img src={reactImage} alt="ReactLogo" height="70%" width="70%" />
                                        </Grid>             

                                        <Grid item xs={6} sx={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
                                            <Button sx={{backgroundColor: "#3672FF", "&:hover": {backgroundColor: "#1B5FFF"}, height: "50%"}}>
                                                <Typography variant="subtitle1">&nbsp;</Typography>
                                                <ExitToAppIcon sx={{color: "white"}} />
                                                <Typography variant="subtitle1" sx={{color: "white", fontFamily: "Source Sans Pro"}}>&nbsp;&nbsp;Live&nbsp;&nbsp;</Typography>
                                            </Button>
                                        </Grid>

                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}><br /><br /></Grid>

                    <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container sx={{width: "70%", borderRadius: "5px", padding: "1%", border: "2px solid #d7e3fc", boxShadow: "0px 4px 8px 0px #C6D2EC", backgroundColor: "#d7e3fc"}}>
                            <Grid item xs={0.2} />
                            <Grid item xs={6}>
                                <img src={lotus} alt="" height="100%" width="100%" style={{borderRadius: "5px"}} />
                            </Grid>
                        </Grid>
                    </Grid>

                    
                    <Grid item xs={12} sx={{height: "100vh"}} />
                </Grid>

            </div>
        </Layout>
    )
}



                                        // {/* <Grid item xs={3} sx={{display: "flex", justifyContent: "center"}}>
                                        //     <Button sx={{color: "#3672FF", border: "2px solid #3672FF"}}>
                                        //         <Typography variant="subtitle1">&nbsp;</Typography>
                                        //         <GitHubIcon />
                                        //         <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>&nbsp;&nbsp;Code&nbsp;&nbsp;</Typography>
                                        //     </Button>
                                        // </Grid> */}