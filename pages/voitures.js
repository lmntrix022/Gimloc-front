import React, { useState } from 'react';
import styled from "styled-components";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import WhatsappButton from '@/components/WhatsappButton';
import MailButton from '@/components/MailButton';



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
    color: #ff7b01;
  }

  &:focus {
    box-shadow: inset 7px 7px 15px rgba(0, 0, 0, 0.2), inset -7px -7px 15px rgba(255, 255, 255, 0.5);
  }
`;

export default function ProductsPage({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Center><br />
        <Title>Toutes les voitures</Title>
        <SearchInput
          type="text"
          placeholder="Rechercher un véhicule..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <ProductsGrid products={filteredProducts} />
      </Center>
      <WhatsappButton /> 
      <MailButton mailto="info@guideinmaroc.com"/> 
      <br /> 
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  // Supposons que vous connaissez l'ID de la catégorie "voitures".
  const carCategoryId = '665b0f4fc38786d1c68cd423';

  // Trier par prix en ordre croissant
  const products = await Product.find({ category: carCategoryId }, null, { sort: { 'price': 1 } });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
