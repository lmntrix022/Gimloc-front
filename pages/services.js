import React from 'react';
import styled from 'styled-components';
import WhatsappButton from '@/components/WhatsappButton';
import MailButton from '@/components/MailButton';


// Styles
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #fff
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #ff7b01;
`;

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

const ServiceItem = styled.div`
  flex: 1 1 30%;
  background: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ServiceTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 20px;
`;

const CTAButton = styled.button`
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

const Testimonials = styled.section`
  margin-top: 40px;
`;

const Testimonial = styled.blockquote`
  background: #f1f1f1;
  padding: 20px;
  border-left: 5px solid #ff7a00;
  margin-bottom: 20px;
  font-style: italic;
`;

const ContactSection = styled.section`
  margin-top: 40px;
  text-align: center;
  a {
    color: #000;
    text-decoration: none; /* Remove underline */

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactLink = styled.a`
  display: block;
  font-size: 1.2em;
  color: #007bff;
  margin: 10px 0;

  &:hover {
    text-decoration: underline;
  }
`;

const FAQSection = styled.section`
  margin-top: 40px;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const FAQQuestion = styled.h4`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const FAQAnswer = styled.p`
  font-size: 1em;
  color: #666;
`;

// Component
const Services = () => {
  return (
    <Container>
      <Header>
        <Title>Guide In Maroc</Title>
        <Subtitle>Vivez l&#39;Expérience d&#39;un Service de Location de Voitures qui Dépasse Vos Attentes</Subtitle>
      </Header>

      <ServiceList>
        <ServiceItem>
          <ServiceTitle>Location de Véhicules</ServiceTitle>
          <ServiceDescription>Profitez d&#39;une large gamme de véhicules récents et bien entretenus, parfaits pour toutes vos besoins de déplacement.</ServiceDescription>
          <Price>À partir de 50€/jour pour une voiture ou une moto</Price>
          <CTAButton>En savoir plus</CTAButton>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Livraison de Véhicules</ServiceTitle>
          <ServiceDescription>Bénéficiez de notre service de livraison pour recevoir votre véhicule directement à l&#39;adresse de votre choix.</ServiceDescription>
          <Price>Frais de livraison variables selon la distance</Price>
          <CTAButton>En savoir plus</CTAButton>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Prise en Charge </ServiceTitle>
          <ServiceDescription>Voyagez sans souci avec notre service de prise en charge à l&#39;aéroport, disponible dans les principaux aéroports.</ServiceDescription>
          <Price>Inclus dans la location pour les réservations de plus de 3 jours</Price>
          <CTAButton>En savoir plus</CTAButton>
        </ServiceItem>
      </ServiceList>

      <Testimonials>
        <Testimonial>
        &quot;Grâce à Guide In Maroc, j&#39;ai pu obtenir une voiture de qualité en un temps record. Service impeccable et équipe très professionnelle !&quot; - Client Satisfait
        </Testimonial>
      </Testimonials>

      <ContactSection>
        <h2>Contactez-nous</h2>
        <ContactLink href="tel:+212627025716">Téléphone : +212627025716</ContactLink>
        <ContactLink href="mailto:info@guideinmaroc.com">Email : info@guideinmaroc.com </ContactLink>
        <ContactLink href="/contact">Formulaire de contact</ContactLink>
      </ContactSection>

      <WhatsappButton /> 
      <MailButton mailto="info@guideinmaroc.com"/> 
    </Container>
  );
};

export default Services;
