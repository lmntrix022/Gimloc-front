import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import WhatsappButton from '@/components/WhatsappButton';
import MailButton from '@/components/MailButton';


// Styles
const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  background: #e0e0e0; /* Background color to show the neumorphism effect */
  border-radius: 15px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #ff7a00;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  font-size: 1em;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: none;
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff;
  outline: none;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  border: none;
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff;
  outline: none;
  min-height: 100px;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: ${({ disabled }) => (disabled ? '#ff7a00' : '#000')};
    color: ${({ disabled }) => (disabled ? '#000' : '#ff7a00')};
    border: none;
    border-radius: 10px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    margin-top: 10px;
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 3px 3px 6px rgba(190, 190, 190, 0.7), -3px -3px 6px rgba(255, 255, 255, 0.7);

    &:hover {
    color: #000;
    background-color: #ff7b01;
    box-shadow: ${({ disabled }) => (disabled ? 'none' : 'inset 3px 3px 6px rgba(190, 190, 190, 0.7), inset -3px -3px 6px rgba(255, 255, 255, 0.7)')};
    }
`;

const ContactDetails = styled.div`
  margin-top: 40px;
  padding: 20px;
  border-radius: 15px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

const ContactItem = styled.div`
  font-size: 1.2em;
  color: #ff7b01;
  margin: 10px 0;
  padding: 10px;
  background: #000;
  border-radius: 10px;
  box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;

  a {
    color: #fff;
    text-decoration: none; /* Remove underline */

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_gx2ibwa', // Replace with your EmailJS service ID
      'template_qj77fbc', // Replace with your EmailJS template ID
      formData,
      'uA-7Mk5nlOIw7rakO' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Votre message a été envoyé avec succès !');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Une erreur est survenue. Veuillez réessayer.');
    });
  };

  return (
    <Container>
      <Header>
        <Title>Contactez-nous</Title>
        <Subtitle>Nous serions ravis de vous entendre</Subtitle>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nom</Label>
        <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

        <SubmitButton type="submit">Envoyer</SubmitButton>
      </Form>

      <ContactDetails>
        <ContactItem>
          <strong>Téléphone :</strong> <a href="tel:+212627025716">+212627025716</a>
        </ContactItem>
        <ContactItem>
          <strong>Email :</strong> <a href="mailto:info@guideinmaroc.com">info@guideinmaroc.com</a>
        </ContactItem>
        <ContactItem>
           IMM. 12, LOT SINE BD ALLAL AL FASSI, MARRAKECH 40070
        </ContactItem>
      </ContactDetails>
      <WhatsappButton /> 
      <MailButton mailto="info@guideinmaroc.com"/> 
    </Container>
    
  );
};

export default ContactPage;
