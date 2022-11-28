import React, { useState, useRef, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LanguageContext from "../../contexts/LanguageContext";
import HookContactFields from "../../hooks/HookContactFields";

const ContactFields = () => {

  const { texts } = useContext(LanguageContext);

  const {
    form,
    validated,
    formData,
    handleSubmit,
    handleBlur,
    handleChange } = HookContactFields();

  return (
    <>
      <Form ref={form}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}>

        <Form.Group
          className="mb-3">
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
          className="mb-3">
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
          className="mb-3">
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
          className="mb-3">
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
          className="mb-3">
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