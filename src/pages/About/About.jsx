import React from 'react'
import './About.css'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    
    <div className='container'>
      <h1>ABOUT</h1>
      <p>+62 851-5502-1043 | dirhamtriyadi@gmail.com</p>
      <p>Hi, I'm Dirham Triyadi, I'm a Frontend Developer. I have experience in the JavaScript programming language for 2 years. I have a strong fundamentals in JavaScript and Typescript. Plus, I'm also familiar with several frameworks such as React JS, React Native and Express JS.</p>
      <div className='buled-container'>
        <div className='rounded-circle bg-black buled'>
          <Link to={'https://www.linkedin.com/in/dirham-triyadi-58a608201'}>
            <FontAwesomeIcon fontSize={'30px'} color='white' icon={faLinkedin} />
          </Link>
        </div>
        <div className='rounded-circle bg-black buled'>
          <Link to={'https://github.com/dirhamtriyadi'}>
            <FontAwesomeIcon fontSize={'30px'} color='white' icon={faGithub} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About