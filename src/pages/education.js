import React from 'react'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import { Grid, Typography } from '@mui/material'
import guelph from "../images/guelph2.png";
// import styled from "styled-components";
// import transcript from "../images/transcript.jpg"

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
                    {/* <Grid item xs={12}>
                        <img src={transcript} alt="" />
                    </Grid> */}
                    <Grid item xs={1} />
                    {/* <Grid item xs={6}>
                        <div>
                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}}><b>Relevant Coursework</b></Typography>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Software Systems Development and Integration</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2018-2019/courses/cis2750.shtml" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>System Analysis and Design in Applications</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2018-2019/courses/cis3750.shtml" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>The Analysis and Design of Computer Algorithms</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2018-2019/courses/cis3490.shtml" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Structure and Application of Microcomputers</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2014-2015/courses/cis2030.shtml" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Software Engineering</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2018-2019/courses/cis3760.shtml" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Objected Oriented Programming</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2019-2020/courses/cis2430.shtml" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>User Interface Design</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2015-2016/courses/cis2170.shtml" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Operating Systems I</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2018-2019/courses/cis3110.shtml" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Data Structures</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2018-2019/courses/cis2520.shtml" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Parallel Programming</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/~gardnerw/courses/cis3090/index.htm" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Intermediate Programming</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2020-2021/courses/cis2500.shtml" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Programming</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2019-2020/courses/cis1300.shtml" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Discrete Structures in Computing I</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2017-2018/courses/cis1910.shtml" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Discrete Structures in Computing II</b></Typography>
                            <StyledAnchor href="https://www.uoguelph.ca/registrar/calendars/undergraduate/2019-2020/courses/cis2910.shtml" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Calulus I</b></Typography>
                            <StyledAnchor href="https://mathstat.uoguelph.ca/node/190" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Statistics I</b></Typography>
                            <StyledAnchor href="https://mathstat.uoguelph.ca/node/239" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />

                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro"}}><b>Linear Algebra I</b></Typography>
                            <StyledAnchor href="https://mathstat.uoguelph.ca/node/189" target="_blank" rel="noreferrer">
                                <Typography variant="subtitle1" sx={{fontFamily: "Source Sans Pro", color: "#3672FF", marginLeft: "2%"}}>More Details</Typography>
                            </StyledAnchor>
                            <br />
                            <br />
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <div>
                            <Typography variant="h6" sx={{fontFamily: "Source Sans Pro", color: "#E60268"}}><b>Skills</b></Typography>
                        </div>
                    </Grid> */}
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