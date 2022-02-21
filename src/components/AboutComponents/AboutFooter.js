import React from "react";
import { useWindow } from "../../context/WindowContext";
import { Grid, Typography } from "@mui/material";

export default function AboutFooter({ siteData }) {
    const { height } = useWindow();
    const { designedBy, copyright } = siteData.site.siteMetadata;

    return (
        <>
            {height > 600 && (
                <div>
                    <div style={{height: "6vh"}} />
                    <div style={{height: "9vh"}}>
                        <Grid container>
                            <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                                <div>
                                    <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}} align="center">{designedBy}</Typography>
                                    <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#6794FF"}} align="center">{copyright}</Typography>
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
                                    <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}} align="center">{designedBy}</Typography>
                                    <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#6794FF"}} align="center">{copyright}</Typography>
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
                                    <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}} align="center">{designedBy}</Typography>
                                    <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#6794FF"}} align="center">{copyright}</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>       
            )}
        </>
    )
}