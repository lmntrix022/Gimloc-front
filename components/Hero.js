/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaCar, FaMapSigns, FaWrench, FaPeopleCarry, FaRegCalendarAlt, FaRegThumbsUp } from 'react-icons/fa';

// Styles globaux
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #e0e5ec;
    font-family: Arial, sans-serif;
    overflow-x: hidden;
  }
`;

// Composants stylisés
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
  font-size: 32px;
  padding: 30px 20px 0;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  padding: 20px;
  grid-template-areas:
    "box1 box1 box1"
    "box2 box3 box4"
    "box5 box6 box7"
    "box8 box8 box8";

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "box1 box1"
      "box1 box1"
      "box2 box3"
      "box4 box5"
      "box6 box7"
      "box8 box8";
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "box1"
      "box2"
      "box3"
      "box4"
      "box5"
      "box6"
      "box7"
      "box8";
  }
`;

const BentoBox = styled.div`
  position: relative;
  background: url(${props => props.bgImage}) no-repeat center center;
  background-size: cover;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #e0e5ec;
  text-align: justify;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Voile sombre */
    border-radius: 10px;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  .icon {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;



const Hero = () => {
  return (
    <>
      <GlobalStyle />
      <Container><br />
        <Title>AGENCE DE LOCATION DE VOITURE A MARRAKECH</Title>
        <br />
        <ContentWrapper>
          <BentoBox bgImage="./background/bg1.jpg" style={{ gridArea: 'box1' }}>
            <FaCar className="icon" />
            <div className="title">Location de Voitures</div>
            <p className='BentoDescription'>Bienvenue chez <strong>Gimlocautomoto</strong>, votre agence de location de voiture de confiance à Marrakech !</p>
          </BentoBox>
          <BentoBox bgImage="./background/bg2.jpg" style={{ gridArea: 'box2' }}>
            <FaMapSigns className="icon" />
            <div className="title">Exploration</div>
            <p className='BentoDescription'>Notre agence se trouve au cœur de la magnifique ville de Marrakech, prête à vous offrir une expérience de location de voiture exceptionnelle pour rendre votre séjour encore plus mémorable.</p>
          </BentoBox>

          <BentoBox bgImage="./background/bg3.jpg" style={{ gridArea: 'box3' }}>
            <FaWrench className="icon" />
            <div className="title">Véhicules Modernes</div>
            <p className='BentoDescription'>Nos véhicules sont soigneusement entretenus, modernes et équipés des dernières technologies pour garantir votre confort et votre sécurité tout au long de votre voyage.</p>
          </BentoBox>
          
          <BentoBox bgImage="./background/bg4.jpg" style={{ gridArea: 'box4' }}>
            <FaPeopleCarry className="icon" />
            <div className="title">Service de Qualité</div>
            <p className='BentoDescription'>Notre équipe chaleureuse et professionnelle est dédiée à vous fournir un service de qualité supérieure.</p>
          </BentoBox>
          <BentoBox bgImage="./background/bg5.jpg" style={{ gridArea: 'box5' }}>
            <FaRegCalendarAlt className="icon" />
            <div className="title">Flexibilité</div>
            <p className='BentoDescription'>Nous offrons des options de location à court et long terme, ainsi que des modalités de ramassage et de retour adaptées à vos besoins.</p>
          </BentoBox>
          <BentoBox bgImage="./background/bg6.jpg" style={{ gridArea: 'box6' }}>
            <FaRegThumbsUp className="icon" />
            <div className="title">Satisfaction</div>
            <p className='BentoDescription'>Chez <strong>Gimlocautomoto</strong>, nous valorisons votre satisfaction. C’est pourquoi nous nous efforçons continuellement de dépasser vos attentes en matière de service et de qualité.</p>
          </BentoBox>
          <BentoBox bgImage="./background/bg7.jpg" style={{ gridArea: 'box7' }}>
            <FaCar className="icon" />
            <div className="title">Conseils Locaux</div>
            <p className='BentoDescription'>Nous sommes fiers de partager notre connaissance approfondie de Marrakech et de ses environs, en vous fournissant des conseils et des recommandations pour que vous puissiez profiter pleinement de votre séjour.</p>
          </BentoBox>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default Hero;
