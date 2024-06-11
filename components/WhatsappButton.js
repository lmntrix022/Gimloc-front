// components/WhatsappButton.js
import styled from "styled-components";
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButtonStyled = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;
  z-index: 1000;

  &:hover {
    background-color: #1EBEA5;
  }
`;

const WhatsappButton = () => {
  const whatsappUrl = `https://wa.me/33749849624?text=Bonjour, je veux réserver un véhicule.`;
  return (
    <WhatsappButtonStyled href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={30} />
    </WhatsappButtonStyled>
  );
};

export default WhatsappButton;
