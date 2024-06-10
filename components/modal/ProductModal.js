import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from './modal';


const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #333;
`;

const ProductModal = ({ isOpen, onClose, onSubmit, products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setSelectedProduct(null);
    }
  }, [isOpen]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleSubmit = () => {
    if (selectedProduct) {
      onSubmit(selectedProduct);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Choisir un véhicule"
      actionLabel="Confirmer"
    >
      
    </Modal>
  );
};

export default ProductModal;
