import React from 'react'
import '../assets/Contactus.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

function Contactus() {
  return (
    <div className='main-container'>
        <div className='appreciation-container'>
            <h3 className='appreciation'>
                Thank You!
            </h3>
            <h3 className='author-container'>
                By Sarnavo Sarkar
            </h3>
        </div>
        <div className="social-container">
            <h3>Social Follow</h3>
            <div className='social-icons'>
                <a href="https://www.linkedin.com/in/sarnavo-sarkar-a572ba1a7/"
                    className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedin} size="4x" />
                </a>
                <a href="https://www.facebook.com/sarnavo.sarkar.5"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="4x" />
                </a>
                <a href="https://github.com/sarnavo-AI"
                    className="github social">
                    <FontAwesomeIcon icon={faGithub} size="4x" />
                </a>
            </div>
        </div>
    </div>
    )
}

export default Contactus