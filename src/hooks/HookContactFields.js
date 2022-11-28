import React, { useState, useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import MessageContext from "../contexts/MessageContext";
import { getHourNow } from '../scripts/appFunctions';

const HookContactFields = () => {
  const initialState = {

  };

  const { handleChangeMessage } = useContext(MessageContext);

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
        if ((result.text).toLocaleLowerCase() === 'ok') {
          handleChangeMessage(
            "App",
            getHourNow(),
            "Message Sended!",
            true);
          clearForm();
        } else {
          handleChangeMessage(
            "App",
            getHourNow(),
            "Fail sending message!",
            true);
          clearForm();
        }
      }, (error) => {
        handleChangeMessage(
          "App",
          getHourNow(),
          error.text,
          true);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
  };

  const clearForm = () => {
    setFormData({});
  };

  return {
    form,
    validated,
    formData,
    handleSubmit,
    handleBlur,
    handleChange
  };
};

export default HookContactFields;