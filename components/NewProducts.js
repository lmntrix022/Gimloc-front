import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Title = styled.h2`
font-size: 2rem;
color: #333;
text-align: center;
font-size: 32px;
`;

export default function NewProducts({products}) {

  return (
    <Center>
      <Title>LES VÉHICULES LES PLUS DEMANDÉS</Title>< br/>
      <ProductsGrid products={products} />
    </Center>
  );
}