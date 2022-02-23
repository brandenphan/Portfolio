import React from "react";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import About from "../components/AboutComponents/About";
import { graphql } from "gatsby";
import { Grid, Typography } from "@mui/material";

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


export default function Index({ data }) {
    const { designedBy, copyright } = data.site.siteMetadata;
    // const [width, setWindowWidth] = React.useState(0);
    const [height, setWindowHeight] = React.useState(0);
    const updateDimensions = () => {
        // setWindowWidth(window.innerWidth);
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
                <About siteData={data} />
            </div>

            <div>
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