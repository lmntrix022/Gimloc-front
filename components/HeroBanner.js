import React, { useState } from 'react';
import styled from 'styled-components';
import ReservationForm from '../components/forms/ReservationForm';
import ProductModal from './modal/ProductModal'; // Assurez-vous que le chemin est correct

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
  font-size: 1.4em;
  margin-bottom: 1px;
  line-height: 1.6;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1.5em;
  }
`;

const Reservation = ({ products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFindVehicle = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitModal = (selectedProduct) => {
    console.log('Produit sélectionné:', selectedProduct);
    setIsModalOpen(false);
  };

  return (
    <ReservationContainer>
      <Overlay />
      <HeroBanner>
        <BannerTitle>Bienvenue chez <br /> Guide in Maroc</BannerTitle>
        <BannerDescription>
          Découvrez notre vaste sélection de véhicules, motos, quads et plus encore. Que vous soyez passionné de vitesse, amateur de sensations fortes ou simplement à la recherche d&#39;un véhicule fiable pour vos déplacements quotidiens, nous avons ce qu&#39;il vous faut. Explorez notre site pour trouver des informations détaillées, des conseils d&#39;experts et des offres exceptionnelles sur une large gamme de véhicules.
        </BannerDescription>
      </HeroBanner>
      <br />
      <ReservationForm onFindVehicle={handleFindVehicle} />
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        products={products}
      />
    </ReservationContainer>
  );
};

export default Reservation;

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}
