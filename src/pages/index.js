/* eslint-disable react/style-prop-object */
// eslint-disable-next-line 

import React from 'react'
import Nav from './../components/Nav';
import Card from './../components/Card'
import Cta from './../components/Cta'
import Footer from './../components/Footer'
//import img from '../assets/images/about-fullscreen-1-1920x700.jpg'
import img1 from "../assets/images/line-dec.png"
import img2 from "../assets/images/video.mp4"


const Index = () => {
  return (
    <div>
        <Nav/>
        <div className="main-banner" id="top">
                <video autoPlay muted loop id="bg-video">
                    <source src={img2} type="video/mp4" />
                </video>

                <div className="video-overlay header-text">
                    <div className="caption">
                        <h6>Fresh Graduates and Job Seekers</h6>
                        <h2>Find the perfect <em>Job</em></h2>
                        <div className="main-button">
                            <a href="contact.html">Contact Us</a>
                        </div>
                    </div>
                </div>
        </div>

        {/* section */}
        <section className="section" id="trainers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading">
                            <h2>What <em>We</em> Do</h2>
                            <img src={img1} alt=""/>
                            <p>Get legitimate and latest job opportnities without futher stress.</p>
                        </div>
                    </div>
                </div>
               
                <Card/>

            </div>
        </section>
        <Cta/>
        <Footer/>

    {/* end of section */}

   
    </div>
  )
}

export default Index