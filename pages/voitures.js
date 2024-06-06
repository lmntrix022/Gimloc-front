import styled from "styled-components";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";

export default function ProductsPage({ products }) {
  return (
    <>
      <Center>
        <Title>Toutes les voitures</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  // Supposons que vous connaissez l'ID de la catégorie "voitures".
  const carCategoryId = '665b0f4fc38786d1c68cd423';

  const products = await Product.find({ category: carCategoryId }, null, { sort: { '_id': -1 } });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
