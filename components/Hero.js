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
            <p className='BentoDescription'>Chez Guide In Maroc, notre mission est simple : faire en sorte que chaque événement rencontre à l&#39;instant parfait. Depuis notre création, nous nous engageons à offrir un service de location de voiture qui s&#39;adapte à vos besoins et dépasse vos attentes.</p>
          </BentoBox>
          <BentoBox bgImage="./background/bg2.jpg" style={{ gridArea: 'box2' }}>
            <FaMapSigns className="icon" />
            <div className="title">Exploration</div>
            <p className='BentoDescription'>Découvrez des horizons nouveaux où chaque événement rencontre à l&#39;instant. Avec nos véhicules modernes, partez à l&#39;aventure en toute sérénité et explorez sans limites. Laissez-nous vous accompagner dans vos découvertes. </p>
          </BentoBox>

          <BentoBox bgImage="./background/bg3.jpg" style={{ gridArea: 'box3' }}>
            <FaWrench className="icon" />
            <div className="title">Véhicules Modernes</div>
            <p className='BentoDescription'>Nos véhicules sont soigneusement entretenus, modernes et équipés des dernières technologies pour garantir votre confort et votre sécurité tout au long de votre voyage. Chaque événement rencontre à l&#39;instant avec nos voitures à la pointe de l&#39;innovation.</p>
          </BentoBox>
          
          <BentoBox bgImage="./background/bg4.jpg" style={{ gridArea: 'box4' }}>
            <FaPeopleCarry className="icon" />
            <div className="title">Service de Qualité</div>
            <p className='BentoDescription'>Nous nous engageons à offrir un service de qualité où chaque détail compte. De la réservation à la remise du véhicule, nous veillons à ce que chaque événement rencontre à l&#39;instant d&#39;une manière exceptionnelle et mémorable.</p>
          </BentoBox>
          <BentoBox bgImage="./background/bg5.jpg" style={{ gridArea: 'box5' }}>
            <FaRegCalendarAlt className="icon" />
            <div className="title">Flexibilité</div>
            <p className='BentoDescription'>Profitez d&#39;une flexibilité totale avec nos options de location. Que ce soit pour une journée ou une semaine, nous nous adaptons à vos besoins. Avec nous, chaque événement rencontre à l&#39;instant, sans contraintes ni soucis.</p>
          </BentoBox>
          <BentoBox bgImage="./background/bg6.jpg" style={{ gridArea: 'box6' }}>
            <FaRegThumbsUp className="icon" />
            <div className="title">Satisfaction</div>
            <p className='BentoDescription'>Votre satisfaction est notre priorité. Nous faisons tout pour que votre expérience de location soit parfaite. Parce que chaque événement mérite de rencontrer l&#39;instant de la meilleure façon possible, nous nous assurons que vous soyez entièrement satisfait.</p>
          </BentoBox>
          <BentoBox bgImage="./background/bg7.jpg" style={{ gridArea: 'box7' }}>
            <FaCar className="icon" />
            <div className="title">Conseils Locaux</div>
            <p className='BentoDescription'>Bénéficiez de nos conseils locaux pour découvrir les meilleurs endroits et les trésors cachés de votre destination. Avec notre expertise, chaque événement rencontre à l&#39;instant et devient une expérience enrichissante et inoubliable.</p>
          </BentoBox>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default Hero;
