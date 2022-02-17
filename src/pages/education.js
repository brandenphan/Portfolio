import React from 'react'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import { Grid, Typography } from '@mui/material'
import guelph from "../images/guelph2.png";
import styled from "styled-components";
// import transcript from "../images/transcript.jpg"
import javascript from "../images/javascript.svg"
import html from "../images/html.svg"
import css from "../images/css.svg"
import reactImage from "../images/react.svg"
import gatsbyImage from "../images/gatsby.svg" 
import graphql from "../images/graphql.svg"
// import node from "../images/node.svg"
// import express from "../images/express.svg"

export default function Education() {

    return (
        <Layout>
            <div>
                <NavBar />

                <Grid container>
                    <Grid item xs={12}><br /><br /><br /><br /><br /><br /><br /><br /></Grid>
                    <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                        <Typography align="center" variant="h3" sx={{fontFamily: "Source Sans Pro", color: "#3672FF"}}><b>Education</b></Typography>
                    </Grid>
                    <Grid item xs={12}><br /><br /></Grid>
                    <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid container sx={{width: "50%", padding: "1%", border: "2px solid #EDF2FB", boxShadow: "1px 1px 4px 4px #d7e3fc"}}>
                            <Grid item xs={3}>
                                <img src={guelph} alt="UniversityOfGuelphLogo" />
                            </Grid>
                            <Grid item xs={4}>
                                <div>
                                    <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>University of Guelph</Typography>
                                    <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>Bachelor of Computing</Typography>
                                    <ul>
                                        <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>Major in Computer Science</Typography></li>
                                        <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>Minor in Business</Typography></li>
                                        <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>4.0 GPA</Typography></li>
                                        <li><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>Dean's List: 2019, 2020, 2021</Typography></li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item xs={5} sx={{display: "flex", justifyContent: "flex-end"}}>
                                <div>
                                    <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019 - Present</Typography>
                                    <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>Guelph, ON, Canada</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}><br /><br /><br /><br /><br /></Grid>
                    <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                        <Typography variant="h6" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}}><b>Skills</b></Typography>
                        <br />
                        <br />
                        <br />
                    </Grid>


                    <Grid item xs={3} />

                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                        <StyledDiv>
                            <img src={html} alt="HTMLLogo" />
                            <Typography variant="subtitle1" align="center" sx={{fontFamily: "Source Sans Pro"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                        </StyledDiv>
                    </Grid>

                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                        <StyledDiv>
                            <img src={css} alt="CSSLogo" />
                            <Typography variant="subtitle1" align="center" sx={{fontFamily: "Source Sans Pro"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                        </StyledDiv>
                    </Grid>

                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                        <StyledDiv>
                            <img src={javascript} alt="JavaScriptLogo" />
                            <Typography variant="subtitle1" align="center" sx={{fontFamily: "Source Sans Pro"}}>JavaScript</Typography>
                        </StyledDiv>
                    </Grid>

                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                        <StyledDiv>
                            <img src={reactImage} alt="ReactLogo" />
                            <Typography variant="subtitle1" align="center" sx={{fontFamily: "Source Sans Pro"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                        </StyledDiv>
                    </Grid>

                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                        <StyledDiv>
                            <img src={gatsbyImage} alt="GatsbyLogo" />
                            <Typography variant="subtitle1" align="center" sx={{fontFamily: "Source Sans Pro"}}>&nbsp;&nbsp;&nbsp;&nbsp;Gatsby&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                        </StyledDiv>
                    </Grid>

                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                        <StyledDiv>
                            <img src={graphql} alt="GraphQLLogo" />
                            <Typography variant="subtitle1" align="center" sx={{fontFamily: "Source Sans Pro"}}>&nbsp;&nbsp;GraphQL&nbsp;&nbsp;</Typography>
                        </StyledDiv>
                    </Grid>


                    <Grid item xs={3} />


                    <Grid item xs={12} sx={{height: "100vh"}} />

                </Grid>
            </div>
        </Layout>
    )
}

// const StyledAnchor = styled.a`
//     text-decoration: none;
//     &: hover {
//         color: #3672FF;
//         text-decoration: underline;
//     }
// `;

const StyledDiv = styled.div`
    transition: transform .2s;
    &:hover {
        transform: scale(1.5);
    }
`