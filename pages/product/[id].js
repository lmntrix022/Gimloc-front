import Center from "@/components/Center";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import { useRouter } from "next/router";
import Image from "next/image";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.4rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  padding-bottom: 10px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  color: #666;
  
  img {
    margin-bottom: 5px;
  }
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  const router = useRouter();

  const handleReserveClick = () => {
    addProduct(product._id);
    router.push('/cart');
  };

  return (
    <Center>
      <ColWrapper>
        <WhiteBox>
          <ProductImages images={product.images} />
          <InfoRow>
            <InfoItem>
              <Image 
                src="/icons/steering-wheel.svg" 
                width="16" 
                height="16" 
                alt="Steering Wheel" 
                sizes="(max-width: 768px) 100vw, 16px"
              />
            </InfoItem>
            <InfoItem>
              <Image 
                src="/icons/gas.svg" 
                width="16" 
                height="16" 
                alt="Gas" 
                sizes="(max-width: 768px) 100vw, 16px"
              />
            </InfoItem>
            <InfoItem>
              <Image 
                src="/icons/tire.svg" 
                width="16" 
                height="16" 
                alt="Tire" 
                sizes="(max-width: 768px) 100vw, 16px"
              />
            </InfoItem>
          </InfoRow>
        </WhiteBox>
        <div>
          <Title>{product.title}</Title>
          <p>{product.description}</p>
          <PriceRow>
            <div>
              <Price>€{product.price}</Price>
            </div>
            <div>
              <Button primary block onClick={handleReserveClick}>
                <CartIcon /> Réserver
              </Button>
            </div>
          </PriceRow>
        </div>
      </ColWrapper>
    </Center>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}
