import React from "react"
import NavBar from "../components/NavBar"
import Layout from "../components/Layout"
import { Button, Grid, Typography } from "@mui/material"
import "@fontsource/source-sans-pro";
// import schedulemaker from "../images/schedulemaker.png";
// import lotus from "../images/lotussmall4.png";
// import lotus2 from "../images/lotussmall5.png";
// import test from "../images/test.png";
import test2 from "../images/test12.png";
import test3 from "../images/test13.png";
import test5 from "../images/test18.png"; // test10 is the other variant
import test20 from "../images/test22.png";
import test40 from "../images/test40.png";
import test50 from "../images/test51.png";
// import portfolio from "../images/portfolio.png";
// import javascript from "../images/javascript.svg";
// import reactImage from "../images/react.svg";
// import node from "../images/node.svg";
// import GitHubIcon from '@mui/icons-material/GitHub';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GitHub from "@mui/icons-material/GitHub";

export default function Projects() {
    return (
        <Layout>
            <div>
                <NavBar />

                <Grid container>
                    <Grid item xs={12}><br /><br /><br /><br /><br /><br /><br /><br /></Grid>
                    
                    <Grid item xs={1.5} />
                        <Grid item xs={3.75}>
                            <br />
                            <hr style={{border: "1px solid #3672FF", marginTop: "1%"}} />
                        </Grid>
                        <Grid item xs={1.5} sx={{display: "flex", justifyContent: "center"}}>
                            <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro", color: "#3672FF"}}><b>Projects</b></Typography>
                        </Grid>
                        <Grid item xs={3.75}>
                            <br />
                            <hr style={{border: "1px solid #3672FF", marginTop: "1%"}} />    
                        </Grid>
                    <Grid item xs={1.5} />    

                    <Grid item xs={12}><br /><br /><br /></Grid>


                    <Grid item xs={1.5} />
                    <Grid item xs={4} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container style={{display: "flex", alignItems: "center"}}>
                            <Grid item xs={12} sx={{position: "relative", top: "0", borderRadius: "5px", transition: "0.2s", "&:hover": {top: "-5px"}}}>
                                <img src={test2} alt="" height="auto" width="100%" style={{borderRadius: "5px", boxShadow: "0 0px 1px 0px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"}} />
                            </Grid>
                            <Grid item xs={8} sx={{marginTop: "1%"}}>
                                <a href="https://lotus-restaurant.netlify.app/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "black"}}>
                                    <Typography variant="h6" sx={{fontFamily: "Source Sans Pro", "&:hover": {color: "#E60268"}, transition: "0.2s"}}><b>Personal Portfolio Web-application</b></Typography>
                                </a>
                            </Grid>
                            <Grid item xs={2} sx={{display: "flex", justifyContent: "flex-end", alignItems: "start", marginTop: "3%"}}>
                                <Button href="https://github.com/brandenphan/Portfolio" target="_blank" variant="outlined" startIcon={<GitHub />}>
                                    <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>Code</Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={2} sx={{display: "flex", justifyContent: "flex-end", alignItems: "start", marginTop: "3%"}}>
                                <Button href="https://brandenphan.netlify.app/" target="_blank" variant="contained" startIcon={<ExitToAppIcon sx={{color: "white"}} />} sx={{backgroundColor: "#3672FF", "&:hover": {backgroundColor: "#1B5FFF"}}}>
                                    <Typography variant="subtitle1" sx={{color: "white", fontFamily: "Source Sans Pro"}}>Live</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={1} />

                    <Grid item xs={4} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container style={{display: "flex", alignItems: "center"}}>
                            <Grid item xs={12} sx={{borderRadius: "5px", position: "relative", top: "0", transition: "0.2s", "&:hover": {top: "-5px"}}}>
                                <a href="/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "black"}}>
                                    <img src={test3} alt="" height="auto" width="100%" style={{borderRadius: "5px", boxShadow: "0 0px 1px 0px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"}} />
                                </a>
                            </Grid>
                            <Grid item xs={8} sx={{marginTop: "1%", position: "relative"}}>
                                <a href="https://lotus-restaurant.netlify.app/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "black"}}>
                                    <Typography variant="h6" sx={{fontFamily: "Source Sans Pro", "&:hover": {color: "#E60268"}, transition: "0.2s"}}><b>Lotus Thai & Vietnamese Cuisine Web-application</b></Typography>
                                </a>
                            </Grid>
                            <Grid item xs={4} sx={{display: "flex", justifyContent: "flex-end", alignItems: "start", marginTop: "3%"}}>
                                <Button href="https://lotus-restaurant.netlify.app/" target="_blank" variant="contained" startIcon={<ExitToAppIcon sx={{color: "white"}} />} sx={{backgroundColor: "#3672FF", "&:hover": {backgroundColor: "#1B5FFF"}}}>
                                    <Typography variant="subtitle1" sx={{color: "white", fontFamily: "Source Sans Pro"}}>Live</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1.5} />





                    <Grid item xs={12}><br /><br /><br /><br /><br /></Grid>






                    <Grid item xs={1.5} />
                    <Grid item xs={4} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container style={{display: "flex", alignItems: "center"}}>
                            <Grid item xs={12} sx={{position: "relative", top: "0", borderRadius: "5px", transition: "0.2s", "&:hover": {top: "-5px"}}}>
                                <img src={test20} alt="" height="auto" width="100%" style={{borderRadius: "5px", boxShadow: "0 0px 1px 0px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"}} />
                            </Grid>
                            <Grid item xs={8} sx={{marginTop: "1%"}}>
                                <a href="https://lotus-restaurant.netlify.app/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "black"}}>
                                    <Typography variant="h6" sx={{fontFamily: "Source Sans Pro", "&:hover": {color: "#E60268"}, transition: "0.2s"}}><b>Schedule Maker Web-application</b></Typography>
                                </a>
                            </Grid>
                            <Grid item xs={4} sx={{display: "flex", justifyContent: "flex-end", alignItems: "start", marginTop: "3%"}}>
                                <Button href="https://github.com/brandenphan/Schedule-Maker" target="_blank" variant="outlined" startIcon={<GitHub />}>
                                    <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>Code</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={1} />


                    <Grid item xs={4} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container style={{display: "flex", alignItems: "center"}}>
                            <Grid item xs={12} sx={{position: "relative", top: "0", borderRadius: "5px", transition: "0.2s", "&:hover": {top: "-5px"}}}>
                                <img src={test5} alt="" height="auto" width="100%" style={{borderRadius: "5px", boxShadow: "0 0px 1px 0px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"}} />
                            </Grid>
                            <Grid item xs={8} sx={{marginTop: "1%"}}>
                                <a href="https://lotus-restaurant.netlify.app/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "black"}}>
                                    <Typography variant="h6" sx={{fontFamily: "Source Sans Pro", "&:hover": {color: "#E60268"}, transition: "0.2s"}}><b>Discord Bot</b></Typography>
                                </a>
                            </Grid>
                            <Grid item xs={4} sx={{display: "flex", justifyContent: "flex-end", alignItems: "start", marginTop: "3%"}}>
                                <Button href="https://github.com/brandenphan/Pami-Bot" target="_blank" variant="outlined" startIcon={<GitHub />}>
                                    <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>Code</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1.5} />





                    <Grid item xs={12}><br /><br /><br /><br /><br /></Grid>



                    <Grid item xs={1.5} />
                    <Grid item xs={4} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container style={{display: "flex", alignItems: "center"}}>
                            <Grid item xs={12} sx={{position: "relative", top: "0", borderRadius: "5px", transition: "0.2s", "&:hover": {top: "-5px"}}}>
                                <img src={test40} alt="" height="auto" width="100%" style={{borderRadius: "5px", boxShadow: "0 0px 1px 0px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"}} />
                            </Grid>
                            <Grid item xs={8} sx={{marginTop: "1%"}}>
                                <a href="https://lotus-restaurant.netlify.app/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "black"}}>
                                    <Typography variant="h6" sx={{fontFamily: "Source Sans Pro", "&:hover": {color: "#E60268"}, transition: "0.2s"}}><b>GPX Data Viewer Web-application</b></Typography>
                                </a>
                            </Grid>
                            <Grid item xs={4} sx={{display: "flex", justifyContent: "flex-end", alignItems: "start", marginTop: "3%"}}>
                                <Button href="https://github.com/brandenphan/GPX-Web-Application" target="_blank" variant="outlined" startIcon={<GitHub />}>
                                    <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>Code</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={1} />


                    <Grid item xs={4} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container style={{display: "flex", alignItems: "center"}}>
                            <Grid item xs={12} sx={{position: "relative", top: "0", borderRadius: "5px", transition: "0.2s", "&:hover": {top: "-5px"}}}>
                                <img src={test50} alt="" height="auto" width="100%" style={{borderRadius: "5px", boxShadow: "0 0px 1px 0px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"}} />
                            </Grid>
                            <Grid item xs={8} sx={{marginTop: "1%"}}>
                                <a href="https://lotus-restaurant.netlify.app/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "black"}}>
                                    <Typography variant="h6" sx={{fontFamily: "Source Sans Pro", "&:hover": {color: "#E60268"}, transition: "0.2s"}}><b>E-Store Search GUI</b></Typography>
                                </a>
                            </Grid>
                            <Grid item xs={4} sx={{display: "flex", justifyContent: "flex-end", alignItems: "start", marginTop: "3%"}}>
                                <Button href="https://github.com/brandenphan/Electronic-Store-Search-GUI" target="_blank" variant="outlined" startIcon={<GitHub />}>
                                    <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>Code</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1.5} />








                    <Grid item xs={12}><br /><br /></Grid>

                    {/* <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container sx={{width: "70%", borderRadius: "5px", padding: "1%", border: "2px solid #d7e3fc", boxShadow: "0px 4px 8px 0px #C6D2EC", backgroundColor: "#d7e3fc"}}>
                            <Grid item xs={0.2} />
                            <Grid item xs={6}>
                                <img src={lotus} alt="" height="100%" width="100%" style={{borderRadius: "5px"}} />
                            </Grid>
                        </Grid>
                    </Grid> */}

                    
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