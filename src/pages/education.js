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
                    <Grid item xs={12}><br /><br /><br /><br /><br /><br /><br /><br /></Grid>

                    <EducationHeader />

 
                    <Grid item xs={12}><br /><br /></Grid>

                    <EducationBox />

    



                    <Grid item xs={12}><br /><br /><br /><br /><br /></Grid>

                    <SkillHeader />

                    {width > 1300 && (
                        <>
                            <Grid item xs={12} sx={{marginTop: "1%"}}>
                                <Grid container>
                                    <Grid item xs={3} />
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={html} alt="HTMLLogo" name="HTML" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={css} alt="CSSLogo" name="CSS" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={javascript} alt="JavaScriptLogo" name="JavaScript" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={reactImage} alt="ReactLogo" name="React" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={gatsbyImage} alt="GatsbyLogo" name="Gatsby" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={graphql} alt="GraphQLLogo" name="GraphQL" />
                                    </Grid>
                                    <Grid item xs={3} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={3} />
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={node} alt="NodeLogo" name="Node" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={express} alt="ExpressLogo" name="Express" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mysql} alt="MySQLLogo" name="MySQL" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={firebase} alt="FirebaseLogo" name="Firebase" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mongo} alt="MongoLogo" name="MongoDB" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={git} alt="GitLogo" name="Git" />
                                    </Grid>
                                    <Grid item xs={3} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={3} />
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={cLanguage} alt="CLogo" name="C" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={java} alt="JavaLogo" name="Java" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={python} alt="PythonLogo" name="Python" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={linux} alt="LinuxLogo" name="Linux" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={docker} alt="DockerLogo" name="Docker" />
                                    </Grid>
                                    <Grid item xs={1} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mocha} alt="MochaLogo" name="Mocha" />
                                    </Grid>
                                    <Grid item xs={3} />
                                </Grid>
                            </Grid>
                        </>
                    )}

                    {width <= 1300 && width > 1000 && (
                        <>
                            <Grid item xs={12} sx={{marginTop: "1%"}}>
                                <Grid container>
                                    <Grid item xs={2} />
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={html} alt="HTMLLogo" name="HTML" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={css} alt="CSSLogo" name="CSS" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={javascript} alt="JavaScriptLogo" name="JavaScript" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={reactImage} alt="ReactLogo" name="React" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={gatsbyImage} alt="GatsbyLogo" name="Gatsby" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={graphql} alt="GraphQLLogo" name="GraphQL" />
                                    </Grid>
                                    <Grid item xs={2} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={2} />
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={node} alt="NodeLogo" name="Node" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={express} alt="ExpressLogo" name="Express" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mysql} alt="MySQLLogo" name="MySQL" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={firebase} alt="FirebaseLogo" name="Firebase" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mongo} alt="MongoLogo" name="MongoDB" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={git} alt="GitLogo" name="Git" />
                                    </Grid>
                                    <Grid item xs={2} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={2} />
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={cLanguage} alt="CLogo" name="C" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={java} alt="JavaLogo" name="Java" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={python} alt="PythonLogo" name="Python" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={linux} alt="LinuxLogo" name="Linux" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={docker} alt="DockerLogo" name="Docker" />
                                    </Grid>
                                    <Grid item xs={1.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mocha} alt="MochaLogo" name="Mocha" />
                                    </Grid>
                                    <Grid item xs={2} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                
                            </Grid>
                        </>
                    )}


                    {width <= 1000 && width > 800 && (
                        <>
                            <Grid item xs={12} sx={{marginTop: "1%"}}>
                                <Grid container>
                                    <Grid item xs={1} />
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={html} alt="HTMLLogo" name="HTML" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={css} alt="CSSLogo" name="CSS" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={javascript} alt="JavaScriptLogo" name="JavaScript" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={reactImage} alt="ReactLogo" name="React" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={gatsbyImage} alt="GatsbyLogo" name="Gatsby" />
                                    </Grid>
                                    <Grid item xs={1} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={1} />
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={graphql} alt="GraphQLLogo" name="GraphQL" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={node} alt="NodeLogo" name="Node" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={express} alt="ExpressLogo" name="Express" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mysql} alt="MySQLLogo" name="MySQL" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={firebase} alt="FirebaseLogo" name="Firebase" />
                                    </Grid>
                                    <Grid item xs={1} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={1} />
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mongo} alt="MongoLogo" name="MongoDB" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={git} alt="GitLogo" name="Git" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={cLanguage} alt="CLogo" name="C" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={java} alt="JavaLogo" name="Java" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={python} alt="PythonLogo" name="Python" />
                                    </Grid>
                                    <Grid item xs={1} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={3} />
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={linux} alt="LinuxLogo" name="Linux" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={docker} alt="DockerLogo" name="Docker" />
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mocha} alt="MochaLogo" name="Mocha" />
                                    </Grid>
                                    <Grid item xs={3} />
                                </Grid>
                            </Grid>
                        </>
                    )}

                    {width <= 800 && width > 600 && (
                        <>
                            <Grid item xs={12} sx={{marginTop: "1%"}}>
                                <Grid container>
                                    <Grid item xs={1} />
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={html} alt="HTMLLogo" name="HTML" />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={css} alt="CSSLogo" name="CSS" />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={javascript} alt="JavaScriptLogo" name="JavaScript" />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={reactImage} alt="ReactLogo" name="React" />
                                    </Grid>
                                    <Grid item xs={1} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={1} />
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={gatsbyImage} alt="GatsbyLogo" name="Gatsby" />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={graphql} alt="GraphQLLogo" name="GraphQL" />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={node} alt="NodeLogo" name="Node" />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={express} alt="ExpressLogo" name="Express" />
                                    </Grid>
                                    <Grid item xs={1} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={1} />
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mysql} alt="MySQLLogo" name="MySQL" />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={firebase} alt="FirebaseLogo" name="Firebase" />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mongo} alt="MongoLogo" name="MongoDB" />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={git} alt="GitLogo" name="Git" />
                                    </Grid>
                                    <Grid item xs={1} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={1} />
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={cLanguage} alt="CLogo" name="C" />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={java} alt="JavaLogo" name="Java" />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={python} alt="PythonLogo" name="Python" />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={linux} alt="LinuxLogo" name="Linux" />
                                    </Grid>
                                    <Grid item xs={1} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={3.5} />
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={docker} alt="DockerLogo" name="Docker" />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mocha} alt="MochaLogo" name="Mocha" />
                                    </Grid>
                                    <Grid item xs={3.5} />

                                </Grid>
                            </Grid>
                        </>
                    )}

                    {width <= 600 && (
                        <>
                            <Grid item xs={12} sx={{marginTop: "1%"}}>
                                <Grid container>
                                    <Grid item xs={1.05} />
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={html} alt="HTMLLogo" name="HTML" />
                                    </Grid>
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={css} alt="CSSLogo" name="CSS" />
                                    </Grid>
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={javascript} alt="JavaScriptLogo" name="JavaScript" />
                                    </Grid>
                                    <Grid item xs={1.05} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={1.05} />
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={reactImage} alt="ReactLogo" name="React" />
                                    </Grid>
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={gatsbyImage} alt="GatsbyLogo" name="Gatsby" />
                                    </Grid>
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={graphql} alt="GraphQLLogo" name="GraphQL" />
                                    </Grid>
                                    <Grid item xs={1.05} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={1.05} />
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={node} alt="NodeLogo" name="Node" />
                                    </Grid>
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={express} alt="ExpressLogo" name="Express" />
                                    </Grid>
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mysql} alt="MySQLLogo" name="MySQL" />
                                    </Grid>
                                    <Grid item xs={1.05} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={1.05} />
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={firebase} alt="FirebaseLogo" name="Firebase" />
                                    </Grid>
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mongo} alt="MongoLogo" name="MongoDB" />
                                    </Grid>
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={git} alt="GitLogo" name="Git" />
                                    </Grid>
                                    <Grid item xs={1.05} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={1.05} />
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={cLanguage} alt="CLogo" name="C" />
                                    </Grid>
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={java} alt="JavaLogo" name="Java" />
                                    </Grid>
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={python} alt="PythonLogo" name="Python" />
                                    </Grid>
                                    <Grid item xs={1.05} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={1.05} />
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={linux} alt="LinuxLogo" name="Linux" />
                                    </Grid>
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={docker} alt="DockerLogo" name="Docker" />
                                    </Grid>
                                    <Grid item xs={3.3} sx={{display: "flex", justifyContent: "center"}}>
                                        <SkillComponent src={mocha} alt="MochaLogo" name="Mocha" />
                                    </Grid>
                                    <Grid item xs={1.05} />

                                </Grid>
                            </Grid>
                        </>
                    )}






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

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    transition: transform .2s;
    &:hover {
        transform: scale(1.4);
    }
`

const SkillComponent = ({src, alt, name}) => (
    <StyledDiv>
        <Grid container style={{width: "50%"}}>
            <Grid item xs={12}>
                <img src={src} alt={alt} height="100%" width="100%" />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1" align="center" sx={{fontFamily: "Source Sans Pro"}}>{name}</Typography>
            </Grid>
        </Grid>
    </StyledDiv>
)
