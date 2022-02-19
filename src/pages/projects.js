import React from "react"
import NavBar from "../components/NavBar"
import Layout from "../components/Layout"
import { Grid } from "@mui/material"

export default function Projects() {
    return (
        <Layout>
            <div>
                <NavBar />

                <Grid container>
                    <Grid item xs={12} sx={{height: "100vh"}}>
                        <p>work, personal, education</p>
                    </Grid>
                </Grid>

            </div>
        </Layout>
    )
}
