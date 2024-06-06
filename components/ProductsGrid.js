import { useState } from 'react';
import styled from "styled-components";
import ProductBox from "@/components/ProductBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr ;
  }
`;

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    background: #ff7a00;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    color: #fff;
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;

    &:disabled {
      background: rgba(255, 255, 255, 0.2);
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.8);
      color: #ff7a00;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

const ProductsGrid = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <StyledProductsGrid>
        {selectedProducts.length > 0 && selectedProducts.map(product => (
          <ProductBox key={product._id} {...product} />
        ))}
      </StyledProductsGrid>
      {products.length > itemsPerPage && (
        <PaginationControls>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Précédent
          </button>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Suivant&nbsp;
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </PaginationControls>
      )}
    </>
  );
};

export default ProductsGrid;
