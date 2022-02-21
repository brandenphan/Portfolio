import React from 'react'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import { Grid, Typography } from '@mui/material'
import EducationHeader from '../components/EducationComponents/EducationHeader';
import EducationBox from '../components/EducationComponents/EducationBox';
import SkillHeader from '../components/EducationComponents/SkillHeader';
import "@fontsource/source-sans-pro";
import Skills from '../components/EducationComponents/Skills';
import { graphql } from 'gatsby';

export default function Education({ data }) {
    const { designedBy, copyright } = data.site.siteMetadata;
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

    return (
        <Layout>
            <div>
                <NavBar />

                <Grid container>
                 
                    {width > 700 && <Grid item xs={12}><br /><br /><br /><br /><br /><br /><br /><br /></Grid>}
                    {width <= 700 && <Grid item xs={12}><br /><br /><br /><br /><br /><br /></Grid>}
                    
                    <EducationHeader />

                    <Grid item xs={12}><br /><br /></Grid>

                    <EducationBox siteData={data} />

                    <Grid item xs={12}><br /><br /><br /><br /><br /></Grid>

                    <SkillHeader />

                    <Skills />

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
    query EducationQuery {
        markdownRemark(fileAbsolutePath: {regex: "/Education.md/"}) {
            frontmatter {
                title
                school
                major
                point1
                point2
                point3
                point4
                programDates
                location
            }
        }
        site {
            siteMetadata {
                designedBy
                copyright
            }
        }
    }
`