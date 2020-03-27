import React from 'react';

import Image from '../image/img.jpg';

function About(){
    return(
        <div className="About">
            <div className="container">
                <div className="row">
                <div className="AboutHeading col-12">
                       About Me
                   </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="AboutImage">
                        <img src={Image} alt="Ayush Saurav" height="295px" width="295px" />
                    </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="AboutDesc">
                       <span style={{fontSize: '1.8rem', color: '#c40655', fontWeight: '500'}} >Hello there! </span>
                      I am Ayush Saurav and I am from India. 
                                <br />
                       I am graduate [Bachelor in Engineering] from BIT Mesra, Tier One college in India. 
                       I have 4+ Years of experience in this field.
                        My educational background allowed me to thrive in this
                         career and my experience on this have made me a master of this section.
                         <br />
                        I am expert in using HTML, CSS, Javascript, 
                        Angular, React, Node, C#, SQL, MongoDB for Web development.
                         I also know the use of ReactNative framework for iPhone, 
                         Android and Tablet app development. I have developed various 
                         websites  and apps and have done their search engine optimization.

                          <br /> <br />
                            
                          Email:  <a href="mailto:blosayush@gmail.com?Subject=Hello%20Ayush" target="_top">blosayush@gmail.com</a>
                          <br />
                          WhatsApp:   <a href="https://api.whatsapp.com/send?phone=919008304305&text=Hi, I am interested in your profile and want to work together on my next project.&source=&data=" target="_top">+91 9008304305</a>
                          <br />
                          Skype: liveayush
                          <br />
                          </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;