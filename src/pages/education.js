import React from 'react'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import { Grid, Typography } from '@mui/material'
import "@fontsource/source-sans-pro";
import { graphql } from 'gatsby';
import guelph from "../images/guelph.png";
import styled from "styled-components";
import javascript from "../images/javascript.svg"
import html from "../images/html.svg"
import css from "../images/css.svg"
import reactImage from "../images/react.svg"
import gatsbyImage from "../images/gatsby.svg" 
import graphqlImage from "../images/graphql.svg"
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

export default function Education({ data }) {
    const { designedBy, copyright } = data.site.siteMetadata;
    const { school, major, point1, point2, point3, point4, programDates, location } = data.markdownRemark.frontmatter;
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

                {width > 0 && (
                    <Grid container>
                        {width > 700 ? (<Grid item xs={12}><br /><br /><br /><br /><br /><br /><br /><br /></Grid>) : (<Grid item xs={12}><br /><br /><br /><br /><br /><br /></Grid>)}

                        
                        <Grid item xs={outerLength("Education", width)} />
                        <Grid item xs={lineLength("Education", width)}>
                            <br />
                            <hr style={{border: "1px solid #3672FF", marginTop: "1%"}} />
                        </Grid>
                        <Grid item xs={innerLength("Education", width)} sx={{display: "flex", justifyContent: "center"}}>
                            <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro", color: "#3672FF"}}><b>Education</b></Typography>
                        </Grid>
                        <Grid item xs={lineLength("Education", width)}>
                            <br />
                            <hr style={{border: "1px solid #3672FF", marginTop: "1%"}} />
                        </Grid>
                        <Grid item xs={outerLength("Education", width)} />
                        <Grid item xs={12}><br /><br /></Grid>


                        <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                            <Grid container sx={{width: widthLength(width), padding: "1%", border: "2px solid #d7e3fc", borderRadius: "5px", boxShadow: "0px 2px 5px 0px #C6D2EC", backgroundColor: "#d7e3fc"}}>
                                <Grid item xs={imageLength(width)} sx={{display: "flex", alignItems: "center", justifyContent: width <= 660 && ("center"), marginTop: width <= 660 && ("5%")}}>
                                    <img src={guelph} alt="UniversityOfGuelphLogo" />
                                </Grid>
                                {width > 900 && (
                                    <>
                                        <Grid item xs={width > 1800 ? (4) : (4.5)}>
                                            <div>
                                                <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{school}</Typography>
                                                <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{major}</Typography>
                                                <ul>
                                                    {[point1, point2, point3, point4].map((instance, ID) => (
                                                        <li key={ID}><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{instance}</Typography></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </Grid>
                                        <Grid item xs={dateLength(width)} sx={{display: "flex", justifyContent: "flex-end"}}>
                                            <div>
                                                <Typography align="right" variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{programDates}</Typography>
                                                <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{location}</Typography>
                                            </div>
                                        </Grid>
                                    </>
                                )} 
                                {width <= 900 && width > 660 && (
                                    <Grid item xs={width > 750 ? (7) : (6)}>
                                        <div>
                                            {[school, major, location, programDates].map((instance, ID) => (
                                                <Typography key={ID} variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{instance}</Typography>
                                            ))}
                                            <ul>
                                                {[point1, point2, point3, point4].map((instance, ID) => (
                                                    <li key={ID}><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{instance}</Typography></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Grid>
                                )}
                                {width <= 660 && (
                                    <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                                        <div>
                                            <br />
                                            {[school, major, location, programDates].map((instance, ID) => (
                                                <Typography key={ID} align="center" variant="h6" sx={{fontFamily: "Source Sans Pro"}}>{instance}</Typography>
                                            ))}
                                            <ul>
                                                {[point1, point2, point3, point4].map((instance, ID) => (
                                                    <li key={ID}><Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro"}}>{instance}</Typography></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>


                        <Grid item xs={12}><br /><br /><br /><br /><br /></Grid>
                        <Grid item xs={outerLength("Skills", width)} />
                        <Grid item xs={lineLength("Skills", width)}>
                            <br />
                            <hr style={{border: "1px solid #E60268", marginTop: "1%"}} />
                        </Grid>
                        <Grid item xs={innerLength("Skills", width)} sx={{display: "flex", justifyContent: "center"}}>
                            <Typography align="center" variant="h4" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}}><b>Skills</b></Typography>
                        </Grid>
                        <Grid item xs={lineLength("Skills", width)}>
                            <br />
                            <hr style={{border: "1px solid #E60268", marginTop: "1%"}} />
                        </Grid>
                        <Grid item xs={outerLength("Skills", width)} />


                        <>
                            <Grid item xs={12} sx={{marginTop: width > 800 ? ("2%") : ("4%")}}>
                                <Grid container>
                                    <Grid item xs={skillsOuterLength(width)} />
                                    {width > 1000 && (createArray(["HTML", "CSS", "JavaScript", "React", "Gatsby", "GraphQL"])).map((instance, ID) => {
                                        let alt = instance.name + "Logo";
                                        return (
                                            <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                            </Grid>
                                        )
                                    })}
                                    {width <= 1000 && width > 800 && (createArray(["HTML", "CSS", "JavaScript", "React", "Gatsby"])).map((instance, ID) => {
                                        let alt = instance.name + "Logo";
                                        return (
                                            <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                            </Grid>
                                        )
                                    })}
                                    {width <= 800 && width > 600 && (createArray(["HTML", "CSS", "JavaScript", "React"])).map((instance, ID) => {
                                        let alt = instance.name + "Logo";
                                        return (
                                            <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                            </Grid>
                                        )
                                    })}
                                    {width <= 600 && (createArray(["HTML", "CSS", "JavaScript"])).map((instance, ID) => {
                                        let alt = instance.name + "Logo";
                                        return (
                                            <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                            </Grid>
                                        )
                                    })}
                                    <Grid item xs={skillsOuterLength(width)} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={skillsOuterLength(width)} />
                                    {width > 1000 && (createArray(["Node", "Express", "MySQL", "Firebase", "MongoDB", "Git"]).map((instance, ID) => {
                                        let alt = instance.name + "Logo";
                                        return (
                                            <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                            </Grid>
                                        )
                                    }))}
                                    {width <= 1000 && width > 800 && (createArray(["GraphQL", "Node", "Express", "MySQL", "Firebase"])).map((instance, ID) => {
                                        let alt = instance.name + "Logo";
                                        return (
                                            <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                            </Grid>
                                        )
                                    })}
                                    {width <= 800 && width > 600 && (createArray(["Gatsby", "GraphQL", "Node", "Express"])).map((instance, ID) => {
                                        let alt = instance.name + "Logo";
                                        return (
                                            <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                            </Grid>
                                        )
                                    })}
                                    {width <= 600 && (createArray(["React", "Gatsby", "GraphQL"])).map((instance, ID) => {
                                        let alt = instance.name + "Logo";
                                        return (
                                            <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                            </Grid>
                                        )
                                    })}
                                    <Grid item xs={skillsOuterLength(width)} />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    <Grid item xs={skillsOuterLength(width)} />
                                    {width > 1000 && (createArray(["C", "Java", "Python", "Linux", "Docker", "Mocha"]).map((instance, ID) => {
                                        let alt = instance.name + "Logo";
                                        return (
                                            <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                            </Grid>
                                        )
                                    }))}
                                    {width <= 1000 && width > 800 && (createArray(["MongoDB", "Git", "C", "Java", "Python"])).map((instance, ID) => {
                                        let alt = instance.name + "Logo";
                                        return (
                                            <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                            </Grid>
                                        )
                                    })}
                                    {width <= 800 && width > 600 && (createArray(["MySQL", "Firebase", "MongoDB", "Git"])).map((instance, ID) => {
                                        let alt = instance.name + "Logo";
                                        return (
                                            <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                            </Grid>
                                        )
                                    })}
                                    {width <= 600 && (createArray(["Node", "Express", "MySQL"])).map((instance, ID) => {
                                        let alt = instance.name + "Logo";
                                        return (
                                            <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                            </Grid>
                                        )
                                    })}
                                    <Grid item xs={skillsOuterLength(width)} />
                                </Grid>
                            </Grid>

                            {width <= 1000 && (
                            <Grid item xs={12} sx={{marginTop: "2%"}}>
                                <Grid container>
                                    {width <= 1000 && width > 800 && (
                                        <>
                                            <Grid item xs={skillsOuterLength(width, true)} />
                                            {createArray(["Linux", "Docker", "Mocha"]).map((instance, ID) => {
                                                let alt = instance.name + "Logo";
                                                return (
                                                    <Grid key={ID} item xs={skillsInnerLength(width, true)}>
                                                        <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                                    </Grid>
                                                )
                                            })}
                                            <Grid item xs={skillsOuterLength(width, true)} />
                                        </>
                                    )}
                                    {width <= 800 && width > 600 && (
                                        <>
                                            <Grid item xs={skillsOuterLength(width)} />
                                            {createArray(["C", "Java", "Python", "Linux"]).map((instance, ID) => {
                                                let alt = instance.name + "Logo";
                                                return (
                                                    <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                        <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                                    </Grid>
                                                )
                                            })}
                                            <Grid item xs={skillsOuterLength(width)} />
                                        </>
                                    )}
                                    {width <= 600 && (
                                        <>
                                            <Grid item xs={skillsOuterLength(width)} />
                                            {createArray(["Firebase", "MongoDB", "Git"]).map((instance, ID) => {
                                                let alt = instance.name + "Logo";
                                                return (
                                                    <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                        <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                                    </Grid>
                                                )
                                            })}
                                            <Grid item xs={skillsOuterLength(width)} />
                                        </>
                                    )}
                                </Grid>
                            </Grid>
                            )}

                            {width <= 800 && (
                                <Grid item xs={12} sx={{marginTop: "2%"}}>
                                    <Grid container>
                                        {width <= 800 && width > 600 && (
                                            <>
                                                <Grid item xs={skillsOuterLength(width, true)} />
                                                {width <= 800 && width > 600 && (createArray(["Docker", "Mocha"]).map((instance, ID) => {
                                                    let alt = instance.name + "Logo";
                                                    return (
                                                        <Grid key={ID} item xs={skillsInnerLength(width, true)}>
                                                            <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                                        </Grid>
                                                    )
                                                }))}
                                                <Grid item xs={skillsOuterLength(width, true)} />
                                            </>
                                        )}
                                        {width <= 600 && (
                                            <>
                                                <Grid item xs={skillsOuterLength(width)} />
                                                {width <= 600 && (createArray(["C", "Java", "Python"]).map((instance, ID) => {
                                                    let alt = instance.name + "Logo";
                                                    return (
                                                        <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                            <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                                        </Grid>
                                                    )
                                                }))}
                                                <Grid item xs={skillsOuterLength(width)} />
                                            </>
                                        )}
                                    </Grid>
                                </Grid>
                            )}

                            {width <= 600 && (
                                <Grid item xs={12} sx={{marginTop: "2%"}}>
                                    <Grid container>
                                        <>
                                            <Grid item xs={skillsOuterLength(width)} />
                                            {width <= 600 && (createArray(["Linux", "Docker", "Mocha"]).map((instance, ID) => {
                                                let alt = instance.name + "Logo";
                                                return (
                                                    <Grid key={ID} item xs={skillsInnerLength(width)}>
                                                        <SkillComponent src={instance.image} alt={alt} name={instance.name} />
                                                    </Grid>
                                                )
                                            }))}
                                            <Grid item xs={skillsOuterLength(width)} />
                                        </>
                                    </Grid>
                                </Grid>
                            )}
                        </>


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
                )}
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

const widthLength = (width) => {
    if (width > 1300) {
        return "50%";
    }
    else if (width <= 1300 && width > 1000) {
        return "66%";
    }
    else if (width <= 1000) {
        return "74%";
    }
}

const imageLength = (width) => {
    if (width > 1800) {
        return 3;
    }
    else if (width <= 1800 && width > 1500) {
        return 3.5;
    }
    else if (width <= 1500 && width > 900) {
        return 4;
    }
    else if (width <= 900 && width > 750) {
        return 5;
    }
    else if (width <= 750 && width > 660) {
        return 6;
    }
    else if (width <= 660) {
        return 12;
    }
}

const dateLength = (width) => {
    if (width > 1800) {
        return 5;
    }
    else if (width <= 1800 && width > 1500) {
        return 4;
    }
    else if (width <= 1500 && width > 900) {
        return 3.5;
    }
}

const outerLength = (header, width) => {
    if (header === "Education") {
        if (width > 1300) {
            return 3;
        }
        else if (width <= 1300 && width > 1000) {
            return 2;
        }
        else if (width <= 1000) {
            return 1.5;
        }
    }
    else {
        if (width > 1300) {
            return 3;
        }
        else if (width <= 1300 && width > 1000) {
            return 2;
        }
        else if (width <= 1000) {
            return 1.5;
        }
    }
}

const lineLength = (header, width) => {
    if (header === "Education") {
        if (width > 1600) {
            return 2.25;
        }
        else if (width <= 1600 && width > 1300) {
            return 2;
        }
        else if (width <= 1300 && width > 1000) {
            return 2.5;
        }
        else if (width <= 1000 &&  width > 600) {
            return 2.75;
        }
        else if (width <= 600 && width > 500) {
            return 2;
        }
        else if (width <= 500 && width > 400) {
            return 1.5;
        }
        else if (width <= 400) {
            return 1;
        }
    } 
    else {
        if (width > 1300) {
            return 2.5;
        }
        else if (width <= 1300 && width > 1000) {
            return 3;
        }
        else if (width <= 1000 && width > 800) {
            return 3.5;
        }
        else if (width <= 800 && width > 600) {
            return 3.25;
        }
        else if (width <= 600 && width > 500) {
            return 3;
        }
        else if (width <= 500) {
            return 2.5;
        }
    }
}

const innerLength = (header, width) => {
    if (header === "Education") {
        if (width > 1600) {
            return 1.5;
        }
        else if (width <= 1600 && width > 1300) {
            return 2;
        }
        else if (width <= 1300 && width > 1000) {
            return 3;
        }
        else if (width <= 1000 && width > 600) {
            return 3.5;
        }
        else if (width <= 600 && width > 500) {
            return 5;
        }
        else if (width <= 500 && width > 400) {
            return 6;
        }
        else if (width <= 400) {
            return 7;
        }
    }
    else {
        if (width > 1300) {
            return 1;
        }
        else if (width <= 1300 && width > 800) {
            return 2;
        }
        else if (width <= 800 && width > 600) {
            return 2.5;
        }
        else if (width <= 600 && width > 500) {
            return 3;
        }
        else if (width <= 500) {
            return 4;
        }
    }
}

const skillsOuterLength = (width, lastRow) => {
    if (lastRow === true) {
        if (width <= 1000 && width > 800) {
            return 3;
        }
        else if (width <= 800 && width > 600) {
            return 3.5;
        }
    }
    else {
        if (width > 1300) {
            return 3;
        }
        else if (width <= 1300 && width > 1000) {
            return 2;
        }
        else if (width <= 1000 && width > 600) {
            return 1;
        }
        else if (width <= 600) {
            return 1.05;
        }
    }
}

const skillsInnerLength = (width, lastRow) => {
    if (lastRow === true) {
        if (width <= 1000 && width > 800) {
            return 2;
        }
        else if (width <= 800 && width > 600) {
            return 2.5;
        }
    }
    else {
        if (width > 1300) {
            return 1;
        }
        else if (width <= 1300 && width > 1000) {
            return 1.3
        }
        else if (width <= 1000 && width > 800) {
            return 2;
        }
        else if (width <= 800 && width > 600) {
            return 2.5;
        }
        else if (width <= 600) {
            return 3.3;
        }
    }
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

const createArray = (techs) => {
    let array = [];
    if (techs.includes("HTML")) {
        let json = {name: "HTML", image: html};
        array.push(json);
    }
    if (techs.includes("CSS")) {
        let json = {name: "CSS", image: css};
        array.push(json);
    }
    if (techs.includes("JavaScript")) {
        let json = {name: "JavaScript", image: javascript};
        array.push(json);
    }
    if (techs.includes("React")) {
        let json = {name: "React", image: reactImage};
        array.push(json);
    }
    if (techs.includes("Gatsby")) {
        let json = {name: "Gatsby", image: gatsbyImage};
        array.push(json);
    }
    if (techs.includes("GraphQL")) {
        let json = {name: "GraphQL", image: graphqlImage};
        array.push(json);
    }
    if (techs.includes("Node")) {
        let json = {name: "Node", image: node};
        array.push(json);
    }
    if (techs.includes("Express")) {
        let json = {name: "Express", image: express};
        array.push(json);
    }
    if (techs.includes("MySQL")) {
        let json = {name: "MySQL", image: mysql};
        array.push(json);
    }
    if (techs.includes("Firebase")) {
        let json = {name: "Firebase", image: firebase};
        array.push(json);
    }
    if (techs.includes("MongoDB")) {
        let json = {name: "MongoDB", image: mongo};
        array.push(json);
    }
    if (techs.includes("Git")) {
        let json = {name: "Git", image: git};
        array.push(json);
    }
    if (techs.includes("C")) {
        let json = {name: "C", image: cLanguage};
        array.push(json);
    }
    if (techs.includes("Java")) {
        let json = {name: "Java", image: java};
        array.push(json);
    }
    if (techs.includes("Python")) {
        let json = {name: "Python", image: python};
        array.push(json);
    }
    if (techs.includes("Linux")) {
        let json = {name: "Linux", image: linux};
        array.push(json);
    }
    if (techs.includes("Docker")) {
        let json = {name: "Docker", image: docker};
        array.push(json);
    }
    if (techs.includes("Mocha")) {
        let json = {name: "Mocha", image: mocha};
        array.push(json);
    }
    return (array);
}