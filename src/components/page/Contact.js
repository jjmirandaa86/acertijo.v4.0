import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({});
  const form = useRef();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    sendEmail(event);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_la7thpd',
      'template_i22xamg',
      form.current,
      '7dJxe1er4mSoe9ThY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
  };

  return (
    <>
      <Form ref={form}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}>

        <Form.Group
          className="mb-3"
          controlId="formTitle">
          <Form.Label>Title: * </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter title message"
            id="formTitle"
            value={formData.title}
            name={"title"}
            onChange={handleChange}
            onBlur={handleBlur} />
          <Form.Control.Feedback
            type="invalid">
            Enter title message.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formName">
          <Form.Label>Name: * </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your name"
            id="formName"
            value={formData.name}
            name={"name"}
            onChange={handleChange}
            onBlur={handleBlur} />
          <Form.Control.Feedback
            type="invalid">
            Enter your name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formEmail">
          <Form.Label>Email: * </Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email"
            id="formEmail"
            value={formData.email}
            name={"email"}
            onChange={handleChange}
            onBlur={handleBlur} />
          <Form.Control.Feedback
            type="invalid">
            Enter your email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formPhone">
          <Form.Label>Phone: </Form.Label>
          <Form.Control
            type="phone"
            placeholder="Enter your phone number"
            id="formPhone"
            value={formData.phone}
            name={"phone"}
            onChange={handleChange}
            onBlur={handleBlur} />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formMessage">
          <Form.Label>Message: * </Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            id="formMessage"
            value={formData.message}
            name={"message"}
            onChange={handleChange}
            onBlur={handleBlur} />
          <Form.Control.Feedback
            type="invalid">
            Enter your message.
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Contact;