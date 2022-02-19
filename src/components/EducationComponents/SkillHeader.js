import React from "react";
import { Grid, Typography } from "@mui/material";
import { useWindow } from "../../context/WindowContext"; 

export default function SkillHeader() {
    const {width} = useWindow();

    return (
        <>
            {width > 1300 && <SkillHeaderComponent outerLength={3} lineLength={2.5} innerLength={1} />}
            {width <= 1300 && width > 1000 && <SkillHeaderComponent outerLength={2} lineLength={3} innerLength={2} />}
            {width <= 1000 && width > 800 && <SkillHeaderComponent outerLength={1.5} lineLength={3.5} innerLength={2} />}
            {width <= 800 && width > 600 && <SkillHeaderComponent outerLength={1.5} lineLength={3.25} innerLength={2.5} />}
            {width <= 600 && width > 500 && <SkillHeaderComponent outerLength={1.5} lineLength={3} innerLength={3} />}
            {width <= 500 && <SkillHeaderComponent outerLength={1.5} lineLength={2.5} innerLength={4} />}
        </>
    )
}

const SkillHeaderComponent = ({outerLength, lineLength, innerLength}) => (
    <>
        <Grid item xs={outerLength} />
        <Grid item xs={lineLength}>
            <br />
            <hr style={{border: "1px solid #E60268", marginTop: "1%"}} />
        </Grid>
        <Grid item xs={innerLength} sx={{display: "flex", justifyContent: "center"}}>
            <Typography variant="h4" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}}><b>Skills</b></Typography>
            <br />
            <br />
            <br />
        </Grid>
        <Grid item xs={lineLength}>
            <br />
            <hr style={{border: "1px solid #E60268", marginTop: "1%"}} />
        </Grid>
        <Grid item xs={outerLength} />
    </>  
)