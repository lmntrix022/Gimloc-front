import React from 'react';
import styled from 'styled-components';
import ReservationForm from '../components/forms/ReservationForm';

const ReservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  padding-top: 25%;
  background-image: url("/hero.jpeg");
  background-size: cover;
  height: 100%;
  position: relative;
  text-align: justify;

  @media (min-width: 768px) {
    padding-top: 8%;
    flex-direction: row;
    text-align: left;
    height: 100%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Modifié pour une meilleure visibilité */
  z-index: 1;
`;

const HeroBanner = styled.div`
  flex: 1;
  color: white; /* Assurez-vous que le texte est bien visible sur l'arrière-plan sombre */
  padding-right: 50px;
  z-index: 2;
  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const BannerTitle = styled.h1`
  font-size: 4.4em;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 5em;
  }
`;

const BannerDescription = styled.p`
  font-size: 1em;
  margin-bottom: 1px;
  line-height: 1.6;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;


const Reservation = () => {
  return (
    <ReservationContainer>
      <Overlay />
      <HeroBanner>
        <BannerTitle>Bienvenue chez <br /> Guide in Maroc</BannerTitle>
        <BannerDescription>
          Notre agence se trouve au cœur de la magnifique ville de Marrakech, prête à vous offrir une expérience de location de voiture exceptionnelle pour rendre votre séjour encore plus mémorable. Que vous soyez ici pour explorer les souks animés, vous aventurer dans les paysages désertiques environnants ou découvrir les palais historiques, nous avons la voiture parfaite pour vous.
        </BannerDescription>
      </HeroBanner>
      <br />
      <ReservationForm />
    </ReservationContainer>
  );
};

export default Reservation;
