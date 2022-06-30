import React from 'react'
import "./Contact.scss";

function Contact() {
  return (
    <>
    <div className='aboutus_page' id = "contact">
      <div className="heading_contact">
        <h1 id="developers">Developer</h1>
      </div>
      <div className="container">
        <div className="card">
            <img src="https://media-exp2.licdn.com/dms/image/C5603AQF7x4hV-XQRdw/profile-displayphoto-shrink_400_400/0/1650716075794?e=1661990400&v=beta&t=531gx5P_NMAV53PaacQmzuy_VpgEuc-vwGKRTZPuIG4" alt="Lakshay" className="card__image"/>
            <p className="card__name">Lakshay<br /><font size="3">Full Stack Developer | Web Designer | Student | Broke Audiophile</font><br /><font size="2"><i>I'm a Competitive Programmer and an undergrad with Computer Science in major at Delhi Technological University located in New Delhi, India.</i></font></p>
          <ul className="social-icons">
              <li><a href="https://www.linkedin.com/in/lakshaysk106/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="https://github.com/LakshaySK106" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
            <li><a href="https://www.instagram.com/laksh.ay_/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://lakshaysk.netlify.app/" target="_blank" rel="noreferrer"><i className="fa fa-external-link"></i></a></li>
              <li><a href="https://medium.com/@englakshaysk" target="_blank" rel="noreferrer"><i className="fa fa-medium"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact