import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/lib/fa";
import "../shared/styles/links.css"


export default class Contact extends React.Component {



  render() {
    return (
      <div className='socialLinks'>
      <h1 className='contact'>Contact me!</h1>
        <div>
          <ul>
            <li>
              <a href="https://github.com/NathanJTelford?tab=repositories" >
                <FaGithub />
              </a>


            </li>
            <li>
              <a href="https://twitter.com/?lang=en">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/nathanjtelford/'>
                <FaLinkedin />
              </a>
            </li>
              <div className='email-phone'>
            <li>
              <h3>Email:</h3>
              <p>nathan.j.i.telford@gmail.com</p>
              <a href="mailto:nathan.j.i.telford@gmail.com">
              </a>
            </li>
            <li>
              <h3>Phone:</h3>
              <p>(385)-236-9850</p>
              <a href='tel:+13852369850' >
              </a>
            </li>
              </div>
          </ul>
        </div>
      </div>
    )
  }
}
