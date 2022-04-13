import React from 'react'
import { Form } from 'react-bootstrap';
import '../styles/contact-form.css'

const ContactForm = () => {
  return (
      <div className="form-container">
          <h3 className='contact-form-title'>Get a Free Business Plan Now! </h3>
        <Form className='contact-form'> 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="" className='contact-form-input' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="" className='contact-form-input'  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Country/Region</Form.Label>
                <Form.Control type="text" placeholder="" className='contact-form-input' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="" className='contact-form-input' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="" className='contact-form-input' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Tell us about your business.</Form.Label>
                <Form.Control as="textarea" rows={3} className='contact-form-input' />
            </Form.Group>
            <button className="btn-submit-form">Submit</button>
        </Form>
      </div>
  )
}

export default ContactForm