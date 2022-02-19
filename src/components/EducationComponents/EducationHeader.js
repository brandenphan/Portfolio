import React from "react";
import { useWindow } from "../../context/WindowContext";
import { Grid, Typography } from "@mui/material";
import "@fontsource/source-sans-pro";

export default function EducationHeader() {
    const {width} = useWindow();

    return (
        <>
            {width > 1600 && <EducationComponent outerLength={3} lineLength={2.25} innerLength={1.5} />}
            {width <= 1600 && width > 1300 && <EducationComponent outerLength={3} lineLength={2} innerLength={2} />}
            {width <= 1300 && width > 1000 && <EducationComponent outerLength={2} lineLength={2.5} innerLength={3} />}
            {width <= 1000 && width > 600 && <EducationComponent outerLength={1.5} lineLength={2.75} innerLength={3.5} />}
            {width <= 600 && width > 500 && <EducationComponent outerLength={1.5} lineLength={2} innerLength={5} />}
            {width <= 500 && width > 400 && <EducationComponent outerLength={1.5} lineLength={1.5} innerLength={6} />}
            {width <= 400 && <EducationComponent outerLength={1.5} lineLength={1} innerLength={7} />}
        </>
    )
}

const EducationComponent = ({outerLength, lineLength, innerLength}) => (
    <>
        <Grid item xs={outerLength} />
        <Grid item xs={lineLength}>
            <br />
            <hr style={{border: "1px solid #3672FF", marginTop: "1%"}} />
        </Grid>
        <Grid item xs={innerLength} sx={{display: "flex", justifyContent: "center"}}>
            <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro", color: "#3672FF"}}><b>Education</b></Typography>
        </Grid>
        <Grid item xs={lineLength}>
            <br />
            <hr style={{border: "1px solid #3672FF", marginTop: "1%"}} />    
        </Grid>
        <Grid item xs={outerLength} />    
    </>
)