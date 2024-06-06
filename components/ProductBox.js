import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import Tilt from 'react-parallax-tilt';
import Image from "next/image";

const ProductWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 9px 9px 16px rgba(190, 190, 190, 0.7), -9px -9px 16px rgba(255, 255, 255, 0.7);
  overflow: hidden;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 5px;
  transition: transform 0.2s;
  height: 350px; /* Fixed height to ensure equal size */
  
  &:hover {
    box-shadow: 9px 9px 16px rgba(190, 190, 190, 0.7), -9px -9px 16px rgba(255, 255, 255, 0.7);
    transform: scale(1.05);
  }
`;

const ImageLink = styled(Link)`
  width: 100%;
  height: 150px;
  position: relative;
  overflow: hidden;
  display: block;
`;

const Title = styled(Link)`
  font-weight: 300;
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  margin: 50px 0 0 0;
  display: block;
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
  text-align: left;
  height: calc(100% - 180px); /* Adjust height to maintain equal size */
`;

const PriceRow = styled.div`
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  padding-bottom: 10px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  color: #666;
  
  img {
    margin-bottom: 5px;
  }
`;

const ReserveButton = styled(Button)`
  background-color: #ff7a00;
  color: black;
  border: none;
  box-shadow: 3px 3px 6px rgba(190, 190, 190, 0.7), -3px -3px 6px rgba(255, 255, 255, 0.7);
  font-weight: bold;


  &:hover {
    background-color: black;
    color: #ff7a00;
    box-shadow: 3px 3px 6px rgba(190, 190, 190, 0.7), -3px -3px 6px rgba(255, 255, 255, 0.7);

  }
`;

export default function ProductBox({_id, title, description, price, images}) {
  const { addProduct } = useContext(CartContext);
  const url = '/product/' + _id;
  return (
    <Tilt>
      <ProductWrapper>
        <ImageLink href={url}>
          <Image 
            src={images?.[0]} 
            alt={title} 
            layout="fill" 
            objectFit="contain" 
          />
        </ImageLink>
        <ProductInfoBox>
          <Title href={url}>{title}</Title>
          <PriceRow>
            <Price>€{price}/Jour</Price>
          </PriceRow><br />
          <ReserveButton block onClick={() => addProduct(_id)}>
            Réservez
          </ReserveButton>
          <InfoRow>
            <InfoItem>
              <Image src="/icons/steering-wheel.svg" width="16" height="16" alt="Steering Wheel" />
            </InfoItem>
            <InfoItem>
              <Image src="/icons/gas.svg" width="16" height="16" alt="Gas" />
            </InfoItem>
            <InfoItem>
              <Image src="/icons/tire.svg" width="16" height="16" alt="Tire" />
            </InfoItem>
          </InfoRow>
        </ProductInfoBox>
      </ProductWrapper>
    </Tilt>
  );
}
