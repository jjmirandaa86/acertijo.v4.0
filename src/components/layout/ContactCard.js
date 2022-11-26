import React, { useContext } from 'react';
import { Card, Container } from "react-bootstrap";
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import ContactFields from "./ContactFields";

const ContactCard = () => {

  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <Container>
        <Card
          bg={theme.toLowerCase()}
          key={theme}
          text={theme.toLowerCase() === 'light' ? 'dark' : 'white'}
          className="mb-2">
          <Card.Header as="h3">
            {texts.page_contact_form_title}
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <ContactFields />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ContactCard;