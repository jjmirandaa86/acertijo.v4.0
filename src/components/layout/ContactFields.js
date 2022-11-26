import React, { useState, useRef, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import LanguageContext from "../../contexts/LanguageContext";

const ContactFields = () => {

  const { texts } = useContext(LanguageContext);

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
          <Form.Label as="h5">{texts.page_contact_title} * </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={texts.page_contact_title_placeholder}
            id="formTitle"
            value={formData.title}
            name={"title"}
            onChange={handleChange}
            onBlur={handleBlur} />
          <Form.Control.Feedback
            type="invalid">
            {texts.page_contact_title_invalid}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formName">
          <Form.Label as="h5">{texts.page_contact_name} * </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={texts.page_contact_name_placeholder}
            id="formName"
            value={formData.name}
            name={"name"}
            onChange={handleChange}
            onBlur={handleBlur} />
          <Form.Control.Feedback
            type="invalid">
            {texts.page_contact_name_invalid}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formEmail">
          <Form.Label as="h5">{texts.page_contact_email} * </Form.Label>
          <Form.Control
            required
            type="email"
            placeholder={texts.page_contact_email_placeholder}
            id="formEmail"
            value={formData.email}
            name={"email"}
            onChange={handleChange}
            onBlur={handleBlur} />
          <Form.Control.Feedback
            type="invalid">
            {texts.page_contact_email_invalid}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formPhone">
          <Form.Label as="h5">{texts.page_contact_phone} </Form.Label>
          <Form.Control
            type="phone"
            placeholder={texts.page_contact_phone_placeholder}
            id="formPhone"
            value={formData.phone}
            name={"phone"}
            onChange={handleChange}
            onBlur={handleBlur} />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formMessage">
          <Form.Label as="h5">{texts.page_contact_message} * </Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder={texts.page_contact_message_placeholder}
            id="formMessage"
            value={formData.message}
            name={"message"}
            onChange={handleChange}
            onBlur={handleBlur} />
          <Form.Control.Feedback
            type="invalid">
            {texts.page_contact_message_invalid}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}>
          {texts.page_contact_send_button}
        </Button>
      </Form>
    </>
  );
};

export default ContactFields;