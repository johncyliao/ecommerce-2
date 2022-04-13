import React from 'react'
import {Form} from 'react-bootstrap'
import '../styles/footer.css'
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="py-5">
        <div className="row upper-area">
          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col-4 offset-1">
            <Form className='contact-form'> 
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label for="newsletter1" className="visually-hidden">Email address</Form.Label>
                    <Form.Control type="email" placeholder="" id='email-input' />
                </Form.Group>
              </div>
              <button className="btn btn-light btn-subscribe" type="button">Subscribe</button>
            </Form>

          </div>
        </div>

        <div className="d-flex justify-content-between py-4 my-4 lower-area">
          <p>&copy; 2022 John Corp, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="https://github.com/johncyliao"><BsGithub className='social-icon' id='github' /></a></li>
            <li className="ms-3"><a className="link-dark" href="https://www.linkedin.com/in/johncyliao/"><BsLinkedin className='social-icon' id='linkedin' /></a></li>
            <li className="ms-3"><a className="link-dark" href="https://www.twitter.com/johncyliao/"><BsTwitter className='social-icon' id='twitter' /></a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer