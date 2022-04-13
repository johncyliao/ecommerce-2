import React from 'react'
import ContactForm from '../components/ContactForm'
import '../styles/custom-style.css'
import profilePic from '../images/profile-trim-1.jpg'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMailOption} from 'react-icons/gr'

const Contact = () => {
  return (
    <div>
      <ContactForm />
      <div className="row contact-cards">
        <div className="col-lg-4 contact-card">
          {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
          <img src={profilePic}  alt=""  className="bd-placeholder-img rounded-circle" width="140" height="140" />

          <h2>John Liao</h2>
          <p>China Sales Representative</p>
          <p><BsFillTelephoneFill />  +86-186-2633-2390</p>
          <p><GrMailOption /> johncyliao@163.com</p>
        </div>
        <div className="col-lg-4 contact-card">
          <img src={profilePic}  alt=""  className="bd-placeholder-img rounded-circle" width="140" height="140" />

          <h2>Jonnathan Li</h2>
          <p>Asia Sales Manager </p>
          <p><BsFillTelephoneFill />  +886-906-123-945</p>
          <p><GrMailOption /> johncyliao@gmail.com</p>
        </div>
        <div className="col-lg-4 contact-card">
          <img src={profilePic}  alt=""  className="bd-placeholder-img rounded-circle" width="140" height="140" />

          <h2>Jonnathan Li</h2>
          <p>Asia Sales Manager </p>
          <p><BsFillTelephoneFill />  +886-906-123-945</p>
          <p><GrMailOption /> johncyliao@gmail.com</p>
        </div>
        
      </div>


    </div>
  )
}

export default Contact