import styled from 'styled-components';

const CategoryButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  background: ${({ active }) => (active ? '#ff7b01' : '#000')};
  color: ${({ active }) => (active ? '#000' : '#ff7b01')};

  transition: all 0.2s ease;

  &:active {
    box-shadow: inset 7px 7px 15px #bebebe, inset -7px -7px 15px #ffffff;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export default CategoryButton;
