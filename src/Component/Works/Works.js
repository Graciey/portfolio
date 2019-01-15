import React  from 'react';
import flower from './flower.png'
import face from './face.PNG';
import robot from './robot.PNG';
import startup from './startup.PNG';
import work from './capture.PNG';
import pixel from './pixel.PNG';
import './Works.css';


const Works = ()=> {
    return(
        <div className="px-4">
            <div className="text-center py-3 title">
                <p>Works</p>
                <img src={flower} className="" alt="image"/>
            </div>
            <div className="work-1 px-4">
                <div className="py-5">
                
                    <p className="work px-4">I <b>design</b> and <b>build</b> web applications. I am currently
                    <br/>
                    seeking for internship</p>
                        <div className="work-content py-5 w-100 px-4">
                            <div className="left">
                                <h4 className="app"><b><a href="https://face-recognition-a.herokuapp.com">Face Recognition App</a></b></h4>
                                <span className="role-design">Design</span>
                                <span className="role-frontend">Front-End Development</span>
                                <span className="role-backend">Back-End</span>
                                <div className="role-description">
                                    <p>This app detect faces in images, i worked on the design and development. For faces to be detected, AI was implemented by comsuming Api from Clarify, which enables successful detection of images. For a user to have access into into app, users have to register. After successful registration, access is granted into the app to check for faces in images. It was particularly important to have the website completely compatible on all devices. The Backend was built using express & NodeJs, and it is being hosted on heroku server.</p>
                                </div>
                        
                            </div>
                            <div className="right" >
                                <img src={face} className="face" alt="image"/>
                            </div>
                            {/* <div><hr/></div> */}
                        </div>
                        <div><hr/></div>
                       
                       
                        {/* <div className="float-none"></div> */}


                        

                        <div className="work-content-2 py-5 px-4">
                            <div className="left-robo" >
                                <img src={robot} className="robo"/>
                            </div>
                            <div className="right-robo">
                                <h4 className="app"><b><a href="https://admiring-saha-595ada.netlify.com">Robot Friends</a></b></h4>
                                <span className="role-frontend-robo">Front-End Development</span>
                                <span className="role-design-robo">Design</span>
                                {/* <span className="role-backend">Back-End</span> */}
                                <div className="role-description">
                                    <p>This app allows the user to search for robot name, i worked on the design and development. It was particularly important to have the website completely compatible on all devices.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div><hr/></div>
                        
                        <div className="work-content py-5 w-100 px-4">
                            <div className="left">
                            <h4 className="app"><b><a href="https://objective-meitner-70a0e6.netlify.com">Startup</a></b></h4>
                                <span className="role-design-start">Design</span>
                                <span className="role-frontend-start">Front-End Development</span>
                                {/* <span className="role-backend">Back-End</span> */}
                                <div className="role-description">
                                    <p>This app was developed for registration, It collects details of people who are willing to join a startup. It was particularly important to have the website completely compatible on all devices.</p>
                                </div>
                            
                            </div>
                            <div className="right" >
                                <img src={startup} className="face"/>
                            </div>
                        </div>
                        <div><hr/></div>
                       
                        <div className="work-content-2 py-5 px-4">
                            <div className="left-robo" >
                                <img src={work} className="robo"/>
                            </div>
                            <div className="right-robo">
                                <h4 className="app"><b><a href="https://admiring-saha-595ada.netlify.com">Portfolio Website</a></b></h4>
                                <span className="role-design">Design</span>
                                <span className="role-frontend">Front-End Development</span>
                                <span className="role-backend">Back-End</span>
                                <div className="role-description">
                                    <p>This is a Portfolio website. The Backend was built using MailChimp, and it is being hosted on Netlify server.</p>
                                </div>
                            </div>
                        </div>

                        <div><hr/></div>

                        <div className="work-content py-5 w-100 px-4">
                            <div className="left">
                                <h4 className="app"><b><a href="https://vigilant-hamilton-ce5493.netlify.com">PixelArt</a></b></h4>
                                <span className="role-design">Design</span>
                                <span className="role-frontend">Front-End Development</span>
                                {/* <span className="role-backend">Back-End</span> */}
                                <div className="role-description">
                                    <p>This is a color picker app. It allow users to play with differnt colors of their choice. For the app to be  interactive Javascript was implemented, which enables the user to interact with the application</p>
                                </div>
                            
                            </div>
                            <div className="right" >
                                <img src={pixel} className="face"/>
                            </div>
                        </div>

                </div>
            </div>
        </div>
                

     )
   }
export default Works;