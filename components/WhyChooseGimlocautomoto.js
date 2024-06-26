import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(150px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  background-color: #000;
  min-height: 100%;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 32px;
  padding-bottom: 5%;
`;

const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 70px;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(10px) brightness(1.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.2);
  animation: ${fadeIn} 0.6s ease-in-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  width: 300px; /* Fixed width */
  height: 400px; /* Fixed height */
  box-sizing: border-box; /* Ensures padding is included in the height and width */

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.2), inset -10px -10px 20px rgba(255, 255, 255, 0.5);
  }

  &:hover .default-content {
    display: none;
  }

  &:hover .hover-content {
    display: block;
  }

  &:hover .paddingIcon {
    margin-top: 10px;
  }
`;

const IconTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  font-size: 40px;
  color: #ff7a00;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.5);
  margin-top: 30px;
  border-radius: 50%;
  background: #000;
  backdrop-filter: blur(10px) brightness(1.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const FeatureTitle = styled.h2`
  font-size: 30px;
  color: #fff;
  text-align: center;
  margin-top: 20px;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: light;
  color: #fff;
  display: none;
  text-align: justify;
`;

const WhyChooseGimlocautomoto = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // or a loading spinner
  }

  return (
    <Container><br />
      <Title><br />CHAQUE INSTANT MERITE UN VEHICULE PARFAIT</Title>
      <FeaturesWrapper>
        <Tilt>
          <Feature>
            <div className="default-content">
              <IconTitleWrapper>
                <FeatureTitle>NOS  <br/>  VEHICULES</FeatureTitle>
                <Icon>
                  <Image src="/icon1-light-preview.png" alt="Grand parc de véhicules" width={100} height={100} />
                </Icon>
              </IconTitleWrapper>
            </div>
            <Description className="hover-content">
              Nous offrons une large gamme de véhicules convenant a tous les budgets. De la citadine économique, la berline confortable, le SUV spacieux jusqu&#39;a la voiture de luxe, nous avons le modèle qui repondra a votre désir.
              <IconTitleWrapper>
                <Icon className="paddingIcon">
                  <Image src="/icon1-light-preview.png" alt="Un service clientèle de premier ordre" width={70} height={70} />
                </Icon>
              </IconTitleWrapper>
            </Description>
          </Feature>
        </Tilt>
        <Tilt>
          <Feature>
            <div className="default-content">
              <IconTitleWrapper>
                <FeatureTitle>ENTRETIEN ET <br/>  SECURITE</FeatureTitle>
                <Icon>
                  <Image src="/icon3-star-preview.png" alt="Excellent état des véhicules" width={100} height={100} />
                </Icon>
              </IconTitleWrapper>
            </div>
            <Description className="hover-content">
              Nous assurons un entretien régulier et des contrôles méticuleux sur l&#39;ensemble de notre flotte afin de garantir leur parfait état de fonctionnement. Nous nous engageons à vous fournir des véhicules propres, sécurisés et prêts à prendre la route dès que vous les louez.
              <IconTitleWrapper>
                <Icon className="paddingIcon">
                  <Image src="/icon3-star-preview.png" alt="Un service clientèle de premier ordre" width={70} height={70} />
                </Icon>
              </IconTitleWrapper>
            </Description>
          </Feature>
        </Tilt>
        <Tilt>
          <Feature>
            <div className="default-content">
              <IconTitleWrapper>
                <FeatureTitle> SERVICE &nbsp; <br/> CLIENT</FeatureTitle>
                <Icon>
                  <Image src="/icon2-grade-preview.png" alt="Un service clientèle de premier ordre" width={100} height={100} />
                </Icon>
              </IconTitleWrapper>
            </div>
            
            <Description className="hover-content">
              Durant le temps de location, nos collaborateurs sont a votre disposition 7j/7 et 24h/24. Votre satisfaction est notre priorité.
              <IconTitleWrapper>
                <Icon className="paddingIcon">
                  <Image src="/icon2-grade-preview.png" alt="Un service clientèle de premier ordre" width={70} height={70} />
                </Icon>
              </IconTitleWrapper>
            </Description>

          </Feature>
        </Tilt>
      </FeaturesWrapper><br />
    </Container>
  );
};

export default WhyChooseGimlocautomoto;
