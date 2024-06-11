import React, { useState } from 'react';
import styled from 'styled-components';

const SearchFormContainer = styled.div`
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

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <SearchFormContainer>
      <SearchInput
        type="text"
        placeholder="Rechercher un véhicule..."
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchFormContainer>
  );
};

export default SearchForm;
