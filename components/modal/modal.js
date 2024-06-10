import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ProductsGrid from '@/components/ProductsGridModal';
import { IoMdClose } from 'react-icons/io';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import Button from '../Button';
import CategoryButton from '../CategoryButton';

const Overlay = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  inset: 0;
  z-index: 50;
  outline: none;
  background: rgba(0, 0, 0, 0.7);
`;

const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 1.5rem auto;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  transform: ${({ showModal }) => (showModal ? 'translateY(0)' : 'translateY(100vh)')};
  opacity: ${({ showModal }) => (showModal ? '1' : '0')};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  flex-grow: 1;
  text-align: center;
  color: #ff7b01;
`;

const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  background: none;
  box-shadow: none;
  font-size: 1.5rem;

  &:active {
    box-shadow: none;
  }
`;

const Body = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CategoryTitle = styled.h3`
  color: white;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #ddd;
`;

const CategoryButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const Modal = ({ isOpen, onClose, onSubmit, title, actionLabel, disabled }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      fetch('/api/categories')
        .then((res) => res.json())
        .then((data) => setCategories(data))
        .catch((error) => console.error('Error fetching categories:', error));
    }
  }, [isOpen]);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`/api/products?category=${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => setVehicles(data))
        .catch((error) => console.error('Error fetching vehicles:', error));
    }
  }, [selectedCategory]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleNext = () => {
    if (step === 1 && selectedCategory) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
    router.push('/cart');
  }, [onSubmit, disabled, router]);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <ModalContainer showModal={showModal}>
        <Header>
          <CloseButton onClick={handleClose}>
            <IoMdClose size={18} />
          </CloseButton>
          <Title>{title}</Title>
        </Header>
        <Body>
          {step === 1 && (
            <div>
              <CategoryTitle>Choisissez une catégorie de véhicule</CategoryTitle><br />
              <CategoryButtonContainer>
                {categories.map((category) => (
                  <CategoryButton
                    key={category._id}
                    active={selectedCategory === category._id}
                    onClick={() => setSelectedCategory(category._id)}
                  >
                    {category.name}
                  </CategoryButton>
                ))}
              </CategoryButtonContainer>
            </div>
          )}
          {step === 2 && (
            <div>
              <ProductsGrid products={vehicles} />
            </div>
          )}
        </Body>
        <Footer>
          {step === 2 && (
            <Button onClick={handleBack}>
              <IoArrowBack />
            </Button>
          )}
          {step === 1 && (
            <Button disabled={!selectedCategory} onClick={handleNext}>
              <IoArrowForward />
            </Button>
          )}
          {step === 2 && (
            <Button disabled={disabled} onClick={handleSubmit}>
              {actionLabel}
            </Button>
          )}
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
