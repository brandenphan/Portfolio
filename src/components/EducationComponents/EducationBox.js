import React from "react";
import { Grid, Typography } from "@mui/material";
import { useWindow } from "../../context/WindowContext";
import guelph from "../../images/guelph2.png";
import "@fontsource/source-sans-pro";


export default function EducationBox({ siteData }) {
    const { width } = useWindow();
    const { school, major, point1, point2, point3, point4, programDates, location } = siteData.markdownRemark.frontmatter;

    return (
        <>
            {width > 1800 && <FirstForm width="50%" imageLength={3} informationLength={4} dateLength={5} siteData={siteData} />}
            {width <= 1800 && width > 1500 && <FirstForm width="50%" imageLength={3.5} informationLength={4.5} dateLength={4} siteData={siteData} />}
            {width <= 1500 && width > 1300 && <FirstForm width="50%" imageLength={4} informationLength={4.5} dateLength={3.5} siteData={siteData} />}
            {width <= 1300 && width > 1000 && <FirstForm width="66%" imageLength={4} informationLength={4.5} dateLength={3.5} siteData={siteData} />}
            {width <= 1000 && width > 900 && <FirstForm width="74%" imageLength={4} informationLength={4.5} dateLength={3.5} siteData={siteData} />}
            {width <= 900 && width > 750 && <SecondForm width="74%" imageLength={5} informationLength={7} siteData={siteData} />}
            {width <= 750 && width > 660 && <SecondForm width="74%" imageLength={6} informationLength={6} siteData={siteData} />}

            {width <= 660 && (
                <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                    <Grid container sx={{width: "74%", padding: "1%", border: "2px solid #d7e3fc", borderRadius: "5px", boxShadow: "0px 2px 5px 0px #C6D2EC", backgroundColor: "#d7e3fc"}}>
                        <Grid item xs={12} sx={{display: "flex", justifyContent: "center", marginTop: "6%"}}>
                            <img src={guelph} alt="UniversityOfGuelphLogo" />
                        </Grid>
                        <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                            <div>
                                <br />
                                <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{school}</Typography>
                                <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{major}</Typography>
                                <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{location}</Typography>
                                <Typography align="center" variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{programDates}</Typography>
                                <ul>
                                    <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point1}</Typography></li>
                                    <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point2}</Typography></li>
                                    <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point3}</Typography></li>
                                    <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point4}</Typography></li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </>
    )
}

const FirstForm = ({width, imageLength, informationLength, dateLength, siteData}) => {
    const { school, major, point1, point2, point3, point4, programDates, location } = siteData.markdownRemark.frontmatter;


    return (
        <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
            <Grid container sx={{width: width, padding: "1%", border: "2px solid #d7e3fc", borderRadius: "5px", boxShadow: "0px 2px 5px 0px #C6D2EC", backgroundColor: "#d7e3fc"}}>
                <Grid item xs={imageLength} sx={{display: "flex", alignItems: "center"}}>
                    <img src={guelph} alt="UniversityOfGuelphLogo" />
                </Grid>
                <Grid item xs={informationLength}>
                    <div>
                        <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{school}</Typography>
                        <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{major}</Typography>
                        <ul>
                            <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point1}</Typography></li>
                            <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point2}</Typography></li>
                            <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point3}</Typography></li>
                            <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point4}</Typography></li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={dateLength} sx={{display: "flex", justifyContent: "flex-end"}}>
                    <div>
                        <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{programDates}</Typography>
                        <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{location}</Typography>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

const SecondForm = ({width, imageLength, informationLength, siteData}) => {
    const { school, major, point1, point2, point3, point4, programDates, location } = siteData.markdownRemark.frontmatter;

    return (
        <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
            <Grid container sx={{width: width, padding: "1%", border: "2px solid #d7e3fc", borderRadius: "5px", boxShadow: "0px 2px 5px 0px #C6D2EC", backgroundColor: "#d7e3fc"}}>
                <Grid item xs={imageLength} sx={{display: "flex", alignItems: "center"}}>
                    <img src={guelph} alt="UniversityOfGuelphLogo" />
                </Grid>
                <Grid item xs={informationLength}>
                    <div>
                        <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{school}</Typography>
                        <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{major}</Typography>
                        <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{location}</Typography>
                        <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{programDates}</Typography>
                        <ul>
                            <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point1}</Typography></li>
                            <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point2}</Typography></li>
                            <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point3}</Typography></li>
                            <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{point4}</Typography></li>
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}