import React from 'react'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import { Grid, Typography } from '@mui/material'
import styled from "styled-components";
import javascript from "../images/javascript.svg"
import html from "../images/html.svg"
import css from "../images/css.svg"
import reactImage from "../images/react.svg"
import gatsbyImage from "../images/gatsby.svg" 
import graphql from "../images/graphql.svg"
import node from "../images/node.svg"
import express from "../images/express.svg"
import mysql from "../images/mysql.svg"
import firebase from "../images/firebase.svg"
import mongo from "../images/mongo.svg"
import git from "../images/git.svg"
import cLanguage from "../images/cLanguage.svg"
import java from "../images/java.svg"
import python from "../images/python.svg"
import linux from "../images/linux.svg"
import docker from "../images/docker.svg"
import mocha from "../images/mocha.svg"
import EducationHeader from '../components/EducationComponents/EducationHeader';
import EducationBox from '../components/EducationComponents/EducationBox';
import SkillHeader from '../components/EducationComponents/SkillHeader';
import "@fontsource/source-sans-pro";



export default function Education() {

    return (
        <Layout>
            <div>
                <NavBar />

                <Grid container>
                    <Grid item xs={12}><br /><br /><br /><br /><br /><br /><br /><br /></Grid>

                    <EducationHeader />

 
                    <Grid item xs={12}><br /><br /></Grid>

                    <EducationBox />

    



                    <Grid item xs={12}><br /><br /><br /><br /><br /></Grid>

                    <SkillHeader />

                   

                    <Grid item xs={12} sx={{marginTop: "1%"}}>
                        <Grid container>
                            <Grid item xs={3} />
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={html} alt="HTMLLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={css} alt="CSSLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={javascript} alt="JavaScriptLogo" name="JavaScript" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={reactImage} alt="ReactLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={gatsbyImage} alt="GatsbyLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;Gatsby&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={graphql} alt="GraphQLLogo" name="&nbsp;&nbsp;GraphQL&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={3} />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sx={{marginTop: "2%"}}>
                        <Grid container>
                            <Grid item xs={3} />
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={node} alt="NodeLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Node&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={express} alt="ExpressLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={mysql} alt="MySQLLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MySQL&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={firebase} alt="FirebaseLogo" name="&nbsp;&nbsp;&nbsp;Firebase&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={mongo} alt="MongoLogo" name="&nbsp;&nbsp;MongoDB&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={git} alt="GitLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Git&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={3} />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sx={{marginTop: "2%"}}>
                        <Grid container>
                            <Grid item xs={3} />
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={cLanguage} alt="CLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={java} alt="JavaLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={python} alt="PythonLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Python&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={linux} alt="LinuxLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Linux&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={docker} alt="DockerLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Docker&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                <SkillComponent src={mocha} alt="MochaLogo" name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mocha&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
                            </Grid>
                            <Grid item xs={3} />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                        <div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}} align="center">Designed by Branden Phan</Typography>
                            <Typography variant="subtitle2" sx={{fontFamily: "Source Sans Pro", color: "#6794FF"}} align="center">Copyright © 2022 - All Rights Reserved.</Typography>
                            <br />
                            <br />
                        </div>
                    </Grid>

                </Grid>
            </div>
        </Layout>
    )
}



const SkillComponent = ({src, alt, name}) => (
    <StyledDiv>
        <img src={src} alt={alt} />
        <Typography variant="subtitle1" align="center" sx={{fontFamily: "Source Sans Pro"}}>{name}</Typography>
    </StyledDiv>
)




const StyledDiv = styled.div`
    display: block;
    // transition: transform .2s;
    &:hover {
        transform: scale(1.4);
    }
`