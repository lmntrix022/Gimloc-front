import { useState, useEffect } from 'react';
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
    grid-template-columns: 1fr 1fr;
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

const SearchInputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 80%;
  max-width: 400px;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.2), -7px -7px 15px rgba(255, 255, 255, 0.5);
  color: #fff;
  font-size: 1rem;

  &::placeholder {
    color: #ff7b01; /* Couleur du placeholder modifiée */
  }

  &:focus {
    box-shadow: inset 7px 7px 15px rgba(0, 0, 0, 0.2), inset -7px -7px 15px rgba(255, 255, 255, 0.5);
  }
`;

const ProductsGridModal = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    // Initial check
    updateItemsPerPage();

    // Add event listener
    window.addEventListener('resize', updateItemsPerPage);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <SearchInputContainer>
        <SearchInput
          type="text"
          placeholder="Rechercher un véhicule..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchInputContainer>
      <StyledProductsGrid>
        {selectedProducts.length > 0 && selectedProducts.map(product => (
          <ProductBox key={product._id} {...product} />
        ))}
      </StyledProductsGrid>
      {filteredProducts.length > itemsPerPage && (
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

export default ProductsGridModal;
