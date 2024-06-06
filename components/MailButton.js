import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Composants stylisés pour le bouton mail
const MailButtonContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #ff7a00;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  position: fixed;
  bottom: 20px;
  left: 20px; /* Positionné en bas à gauche */
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background-color: #d66800;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const MailIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MailButton = ({ mailto }) => {
  return (
    <MailButtonContainer href={`mailto:${mailto}`}>
      <MailIcon icon={faEnvelope} />
    </MailButtonContainer>
  );
};

export default MailButton;
