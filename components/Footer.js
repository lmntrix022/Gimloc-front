import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Composants stylisés pour le footer
const FooterContainer = styled.footer`
  background-color: #111;
  color: #fff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 20px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  justify-content: start;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;

    &:hover {
      color: #ff7a00;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #aaa;
  border-top: 1px solid #444;
  padding-top: 10px;
  width: 100%;
  max-width: 1200px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <SectionTitle>A PROPOS</SectionTitle>
          <p>
            Notre équipe est à votre disposition 7j/7 pour répondre à vos questions afin de vous garantir un service sur mesure.
          </p>
        </FooterSection>
        <FooterSection>
          <SectionTitle>RÉSEAUX SOCIAUX</SectionTitle>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </SocialIcons>
        </FooterSection>
        <FooterSection>
          <SectionTitle>CONTACT</SectionTitle>
          <p>Bureau de location de voitures : IMM. 12, LOT SINE BD ALLAL AL FASSI, MARRAKECH 40070</p>
          <p>WhatsApp : 212627025716</p>
          <p>Email : info@guideinmaroc.com</p>
          <p>Conditions générales</p>
        </FooterSection>
        <FooterSection>
          <SectionTitle>HEURES DE SERVICE</SectionTitle>
          <p>Lundi à Dimanche: 07h00 - 22h00</p>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        Copyright © 2024. Gimloc
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

