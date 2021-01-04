import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";


function sections (){
    return (
    <div>
            <MDBCard className="my-5 px-5 pb-5">
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img
                                    className="img-fluid"
                                    src={process.env.PUBLIC_URL + "/pic01.jpg"}
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="7">
                            <h3 className="font-weight-bold mb-3 p-5"> {/*mess around with numberes to change position*/ }
                                <strong>About Me</strong>
                            </h3>
                                <p>
                                I am a Senior at the University of Connecticut studying Computer Science and Engineering 
                                concentrating in Software Design and Development and minoring in Analytics interested in 
                                a career in Software Engineering and Data Science. I have experience in a variety of tools 
                                such as Python, Java, C, JavaScript, SQL, Angular and React and have over 4 years of IT 
                                experience with past jobs, research, and internships. In my freetime I enjoy hiking, traveling,
                                cooking, watching movies, and finding elite memes. 
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                    <MDBRow>
                        <div className="center_title">
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong id="exp">Work Experience</strong>
                            </h3>
                        </div>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <div className="center_title">
                                <img id="logo_icon"
                                    className="img-fluid"
                                    src={process.env.PUBLIC_URL + "/its.png"}
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            <p >Student IT Systems/Network Specialist</p>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div className="center_title">
                                <img id="logo_icon"
                                    className="img-fluid"
                                    src={process.env.PUBLIC_URL + "/lab.png"}
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </div>
                            <p>Undergraduate Research Assistant</p>
                        </MDBCol>
                        <MDBCol>
                            <div className="center_title">
                                <img id="logo_icon"
                                    className="img-fluid"
                                    src={process.env.PUBLIC_URL + "/cigna.png"}
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </div>
                            <p>Software Engineer Intern</p>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                    <MDBRow>
                        
                        <MDBCol lg="7" id="proj">
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong >Projects</strong>
                            </h3>
                            <p>
                            <ol type="1">
                                <strong>
                                    <li>UConn Senior Design Project: Adventrain</li></strong>
                                    <ul>
                                        <li> For my Senior Design Project at UConn, my team has been tasked with developing
                                        gamified training mobile application by CGI Inc. The goal is to develop the application
                                        with gamified training and testing modules with stories in order to have employee users
                                        learn the material more quickly and be engaged. For this project we are using a PERN tech 
                                            stack with Postgres, Express, React, and Nodejs.
                                        </li>
                                        <li>
                                             The project will be completed by May 2021.
                                        </li>
                                    </ul>
                                    <li> <strong>CSE 5095 Project: Michigan Protest Sentiment Analysis</strong></li>
                                    <ul>
                                        <li>For CSE 5095: Social Media Mining and Analysis my team was tasked with 
                                        creating machine learning models to analyze tweets and predict overall opinion 
                                        regarding the Michigan Protests in April and May 2020 given a datset of tweets. For 
                                        this we had used the XGBoost, Logistic Regression, and Support Vector Machine machine learning.
                                        </li>
                                        <li>
                                        After the creation of these models we performed statistcal analysis on the post
                                        performance metrics to see how accurately they analyzed the tweets and prioritized different
                                        features. 
                                        </li>
                                    </ul>
                            </ol>   
                            </p>
                        </MDBCol>
                        <MDBCol lg="5">

                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                    <MDBRow id="ex">
                        <div className="center_title">
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong id="exp">Extracurriculars</strong>
                            </h3>
                        </div>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <div className="center_title">
                                <img id="logo_icon"
                                    className="img-fluid"
                                    src={process.env.PUBLIC_URL + "/bsa.png"}
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                                <p >Bangladeshi Student Association</p>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div className="center_title">
                                <img id="logo_icon"
                                    className="img-fluid"
                                    src={process.env.PUBLIC_URL + "/pac.png"}
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </div>
                            <p>Pan Asian Council</p>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
    </div>
    )
}

export default sections;