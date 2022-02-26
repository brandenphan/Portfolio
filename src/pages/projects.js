import React from "react"
import NavBar from "../components/NavBar"
import Layout from "../components/Layout"
import { Button, Grid, IconButton, MenuItem, Typography, Menu } from "@mui/material"
import "@fontsource/source-sans-pro";
import { graphql } from "gatsby";
import portfolioImagePNG from "../images/portfolioImage.png";
import lotusImagePNG from "../images/lotusImage.png";
import discordImagePNG from "../images/discordImage.png";
import scheduleMakerPNG from "../images/scheduleMakerImage.png";
import gpxImagePNG from "../images/gpxImage.png";
import eStoreImagePNG from "../images/eStoreImage.png";
import portfolioImageWEBP from "../images/portfolioImage.webp";
import lotusImageWEBP from "../images/lotusImage.webp";
import discordImageWEBP from "../images/discordImage.webp";
import scheduleMakerWEBP from "../images/scheduleMakerImage.webp";
import gpxImageWEBP from "../images/gpxImage.webp";
import eStoreImageWEBP from "../images/eStoreImage.webp";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GitHub from "@mui/icons-material/GitHub";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Projects({ data }) {
    const { designedBy, copyright } = data.site.siteMetadata;
    const [width, setWindowWidth] = React.useState(0);
    const updateDimensions = () => {
        setWindowWidth(window.innerWidth);
    };

    React.useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions, { passive: true });
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
        <Layout>
            <div>
                <NavBar />

                <Grid container>
                    <Grid item xs={12}><br /><br /><br /><br /><br /><br /><br /><br /></Grid>
                    
                    <Grid item xs={projectHeaderWidths(width)[0]} />
                        <Grid item xs={projectHeaderWidths(width)[1]}>
                            <br />
                            <hr style={{border: "1px solid #3672FF", marginTop: "1%"}} />
                        </Grid>
                        <Grid item xs={projectHeaderWidths(width)[2]} sx={{display: "flex", justifyContent: "center"}}>
                            <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro", color: "#3672FF"}}><b>Projects</b></Typography>
                        </Grid>
                        <Grid item xs={projectHeaderWidths(width)[1]}>
                            <br />
                            <hr style={{border: "1px solid #3672FF", marginTop: "1%"}} />    
                        </Grid>
                    <Grid item xs={projectHeaderWidths(width)[0]} />    

                    <Grid item xs={12}><br /><br /><br /></Grid>


                    <Grid item xs={projectsWidths(width)[0]} />
                    <Grid item xs={projectsWidths(width)[1]} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container style={{display: "flex", alignItems: "center"}}>
                            <Grid item xs={12} sx={{position: "relative", top: "0", borderRadius: "5px", transition: "0.2s", "&:hover": {top: "-5px"}}}>
                                <picture>
                                    <source srcSet={portfolioImageWEBP} type="image/webp" />
                                    <source srcSet={portfolioImagePNG} type="image/png" />
                                    <img src={portfolioImagePNG} alt="" height="auto" width="100%" style={{borderRadius: "5px", boxShadow: "0 0px 1px 0px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"}} />
                                </picture>
                            </Grid>
                            {width > 450 ? (
                                <>
                                    <Grid item xs={dualButtonWidth(width)[0]} sx={{marginTop: "1%"}}>
                                        <a href="https://lotus-restaurant.netlify.app/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "black"}}>
                                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro", "&:hover": {color: "#E60268"}, transition: "0.2s"}}><b>Personal Portfolio Web-application</b></Typography>
                                        </a>
                                    </Grid>
                                    <Grid item xs={dualButtonWidth(width)[1]} sx={{display: "flex", justifyContent: "flex-end", alignItems: "start", marginTop: "3%"}}>
                                        <Button href="https://github.com/brandenphan/Portfolio" target="_blank" variant="outlined" startIcon={<GitHub />}>
                                            <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>Code</Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={dualButtonWidth(width)[1]} sx={{display: "flex", justifyContent: "flex-end", alignItems: "start", marginTop: "3%"}}>
                                        <Button href="https://brandenphan.netlify.app/" target="_blank" variant="contained" startIcon={<ExitToAppIcon sx={{color: "white"}} />} sx={{backgroundColor: "#3672FF", "&:hover": {backgroundColor: "#1B5FFF"}}}>
                                            <Typography variant="subtitle1" sx={{color: "white", fontFamily: "Source Sans Pro"}}>Live</Typography>
                                        </Button>
                                    </Grid>
                                </>
                            ) : (
                                <>
                                    <Grid item xs={10} sx={{marginTop: "1%"}}>
                                        <a href="https://lotus-restaurant.netlify.app/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "black"}}>
                                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro", "&:hover": {color: "#E60268"}, transition: "0.2s"}}><b>Personal Portfolio Web-application</b></Typography>
                                        </a>
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "flex-end", marginTop: "1%"}}>
                                        <IconButton onClick={(handleClick)} aria-label="CodeLiveDropdown">
                                            <ArrowDropDownIcon style={{color: "#3672FF", fontSize: "30px"}} />
                                        </IconButton>

                                    </Grid>

                                    <Menu anchorEl={menuElement} open={open} onClose={handleClose}>
                                        <a href="https://github.com/brandenphan/Portfolio" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "black"}}>
                                            <MenuItem>
                                                <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>Code&nbsp;&nbsp;&nbsp;</Typography>
                                                <GitHub style={{color: "#3672FF", fontSize: "30px"}} />
                                            </MenuItem>
                                        </a>
                                        <a href="https://brandenphan.netlify.app/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "black"}}>
                                            <MenuItem>
                                                <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>Live&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                                                <ExitToAppIcon style={{color: "#3672FF", fontSize: "30px"}} />
                                            </MenuItem>
                                        </a>
                                    </Menu>
                                </>
                            )}
                        </Grid>
                    </Grid>
                    {width <= 1300 && (<Grid item xs={projectsWidths(width)[0]} />)}

                    {width > 1300 ? (<Grid item xs={projectsWidths(width)[2]} />) : (<Grid item xs={12}><br /><br /><br /><br /></Grid>)}

                    {width <= 1300 && (<Grid item xs={projectsWidths(width)[0]} />)}
                    <Grid item xs={projectsWidths(width)[1]} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container style={{display: "flex", alignItems: "center"}}>
                            <Grid item xs={12} sx={{position: "relative", top: "0", borderRadius: "5px", transition: "0.2s", "&:hover": {top: "-5px"}}}>
                                <picture>
                                    <source srcSet={lotusImageWEBP} type="image/webp" />
                                    <source srcSet={lotusImagePNG} type="image/png" />
                                    <img src={lotusImagePNG} alt="" height="auto" width="100%" style={{borderRadius: "5px", boxShadow: "0 0px 1px 0px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"}} />
                                </picture>
                            </Grid>
                            <Grid item xs={8} sx={{marginTop: "1%"}}>
                                <a href="https://lotus-restaurant.netlify.app/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "black"}}>
                                    <Typography variant="h6" sx={{fontFamily: "Source Sans Pro", "&:hover": {color: "#E60268"}, transition: "0.2s"}}><b>Lotus Web-application</b></Typography>
                                </a>
                            </Grid>
                            <Grid item xs={4} sx={{display: "flex", justifyContent: "flex-end", alignItems: "start", marginTop: "3%"}}>
                                <Button href="https://lotus-restaurant.netlify.app/" target="_blank" variant="contained" startIcon={<ExitToAppIcon sx={{color: "white"}} />} sx={{backgroundColor: "#3672FF", "&:hover": {backgroundColor: "#1B5FFF"}}}>
                                    <Typography variant="subtitle1" sx={{color: "white", fontFamily: "Source Sans Pro"}}>Live</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={projectsWidths(width)[0]} />




                    {width > 1300 ? (<Grid item xs={12}><br /><br /><br /><br /><br /></Grid>) : (<Grid item xs={12}><br /><br /><br /><br /></Grid>)}





                    <Grid item xs={projectsWidths(width)[0]} />
                    <Grid item xs={projectsWidths(width)[1]} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container style={{display: "flex", alignItems: "center"}}>
                            <Grid item xs={12} sx={{position: "relative", top: "0", borderRadius: "5px", transition: "0.2s", "&:hover": {top: "-5px"}}}>
                                <picture>
                                    <source srcSet={scheduleMakerWEBP} type="image/webp" />
                                    <source srcSet={scheduleMakerPNG} type="image/png" />
                                    <img src={scheduleMakerPNG} alt="" height="auto" width="100%" style={{borderRadius: "5px", boxShadow: "0 0px 1px 0px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"}} />
                                </picture>
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
                    {width <= 1300 && (<Grid item xs={projectsWidths(width)[0]} />)}

                    {width > 1300 ? (<Grid item xs={projectsWidths(width)[2]} />) : (<Grid item xs={12}><br /><br /><br /><br /></Grid>)}

                    {width <= 1300 && (<Grid item xs={projectsWidths(width)[0]} />)}
                    <Grid item xs={projectsWidths(width)[1]} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container style={{display: "flex", alignItems: "center"}}>
                            <Grid item xs={12} sx={{position: "relative", top: "0", borderRadius: "5px", transition: "0.2s", "&:hover": {top: "-5px"}}}>
                                <picture>
                                    <source srcSet={discordImageWEBP} type="image/webp" />
                                    <source srcSet={discordImagePNG} type="image/png" />
                                    <img src={discordImagePNG} alt="" height="auto" width="100%" style={{borderRadius: "5px", boxShadow: "0 0px 1px 0px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"}} />
                                </picture>
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
                    <Grid item xs={projectsWidths(width)[0]} />



                    {width > 1300 ? (<Grid item xs={12}><br /><br /><br /><br /><br /></Grid>) : (<Grid item xs={12}><br /><br /><br /><br /></Grid>)}





                    <Grid item xs={projectsWidths(width)[0]} />
                    <Grid item xs={projectsWidths(width)[1]} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container style={{display: "flex", alignItems: "center"}}>
                            <Grid item xs={12} sx={{position: "relative", top: "0", borderRadius: "5px", transition: "0.2s", "&:hover": {top: "-5px"}}}>
                                <picture>
                                    <source srcSet={gpxImageWEBP} type="image/webp" />
                                    <source srcSet={gpxImagePNG} type="image/png" />
                                    <img src={gpxImagePNG} alt="" height="auto" width="100%" style={{borderRadius: "5px", boxShadow: "0 0px 1px 0px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"}} />
                                </picture>
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
                    {width <= 1300 && (<Grid item xs={projectsWidths(width)[0]} />)}

                    {width > 1300 ? (<Grid item xs={projectsWidths(width)[2]} />) : (<Grid item xs={12}><br /><br /><br /><br /></Grid>)}

                    {width <= 1300 && (<Grid item xs={projectsWidths(width)[0]} />)}
                    <Grid item xs={projectsWidths(width)[1]} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container style={{display: "flex", alignItems: "center"}}>
                            <Grid item xs={12} sx={{position: "relative", top: "0", borderRadius: "5px", transition: "0.2s", "&:hover": {top: "-5px"}}}>
                                <picture>
                                    <source srcSet={eStoreImageWEBP} type="image/webp" />
                                    <source srcSet={eStoreImagePNG} type="image/png" />
                                    <img src={eStoreImagePNG} alt="" height="auto" width="100%" style={{borderRadius: "5px", boxShadow: "0 0px 1px 0px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)"}} />
                                </picture>
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
                    <Grid item xs={projectsWidths(width)[0]} />








                    <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                        <div>
                            <br />
                            <br />
                            <br />
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

export const query = graphql`
    query ProjectsQuery {
        site {
            siteMetadata {
                designedBy
                copyright
            }
        }
    }
`

const projectsWidths = (width) => {
    if (width > 1700) {
        return [1.5, 4, 1];
    }
    else if (width <= 1700 && width > 1500) {
        return [1, 4.5, 1];
    }
    else if (width <= 1500 && width > 1300) {
        return [0.75, 5, 0.5];
    }
    else if (width <= 1300 && width > 900) {
        return [2, 8, 0];
    }
    else if (width <= 900 && width > 650) {
        return [1, 10, 0];
    }
    else {
        return [1, 10, 0];
    }
}

const projectHeaderWidths = (width) => {
    if (width > 1700) {
        return [1.5, 3.75, 1.5]
    }
    else if (width <= 1700 && width > 1500) {
        return [1, 4, 2]
    }
    else if (width <= 1500 && width > 1300) {
        return [0.75, 4, 2.5];
    } 
    else if (width <= 1300 && width > 1000) {
        return [2, 3, 2]
    }
    else if (width <= 1000 && width > 900) {
        return [2, 2.75, 2.5];
    }
    else if (width <= 900 && width > 650) {
        return [1, 3.5, 3]
    }
    else if (width <= 650 && width > 450) {
        return [1, 3, 4];
    }
    else if (width <= 450 && width > 350) {
        return [1, 2.5, 5];
    }
    else {
        return [1, 2, 6];
    }
}

const dualButtonWidth = (width) => {
    if (width > 680) {
        return [8, 2, 2];
    }
    else if (width <= 680 && width > 550) {
        return [7, 2.5, 2.5];
    }
    else {
        return [6, 3, 3];
    }
}