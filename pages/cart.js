import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";
import WhatsappButton from "@/components/WhatsappButton";
import MailButton from "@/components/MailButton";
import Image from 'next/image';

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
  }
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #e0e0e0;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ScrollableContent = styled.div`
  max-height: 400px;  /* Fixez la hauteur du formulaire ici */
  overflow-y: auto;  /* Ajoutez un défilement vertical si le contenu dépasse la hauteur */
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff;
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
  }
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const TotalText = styled.p`
  font-weight: bold;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart, removeFromCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [daysBetween, setDaysBetween] = useState(null);

  useEffect(() => {
    const storedDaysBetween = localStorage.getItem('daysBetween');
    if (storedDaysBetween) {
      setDaysBetween(Number(storedDaysBetween));
    }

    if (cartProducts.length > 0) {
      axios.post('/api/cart', { ids: cartProducts })
        .then(response => {
          setProducts(response.data);
        });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window.location.href.includes('success')) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  const moreOfThisProduct = (id) => {
    addProduct(id);
  };

  const lessOfThisProduct = (id) => {
    removeProduct(id);
  };

  const goToPayment = async () => {
    const reservationData = {
      name, email, city, postalCode, streetAddress, country,
      cartProducts,
      daysBetween,
    };

    try {
      await axios.post('/api/saveReservation', reservationData);
      const response = await axios.post('/api/checkout', reservationData);
      if (response.data.url) {
        window.location = response.data.url;
      }
    } catch (error) {
      console.error('Failed to save reservation', error);
    }
  };

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price;
  }

  if (isSuccess) {
    return (
      <Center>
        <ColumnsWrapper>
          <Box>
            <h1>Merci pour votre commande !</h1>
            <p>On vous enverra un courriel pour confirmer votre réservation.</p>
          </Box>
        </ColumnsWrapper>
      </Center>
    );
  }

  return (
    <Center>
      <ColumnsWrapper>
        <Box>
          <h2>Réservation</h2>
          {!cartProducts.length && <div>Pas de réservation</div>}
          {products.length > 0 && (
            <Table>
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>Nombre de jour</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product._id}>
                    <ProductInfoCell>
                      <ProductImageBox>
                        <Image src={product.images[0]} alt={product.title} width={80} height={80} />
                      </ProductImageBox>
                      {product.title}
                    </ProductInfoCell>
                    <td>
                      <QuantityWrapper>
                        <Button onClick={() => lessOfThisProduct(product._id)}>-</Button>
                        <QuantityLabel>
                          {cartProducts.filter(id => id === product._id).length}
                        </QuantityLabel>
                        <Button onClick={() => moreOfThisProduct(product._id)}>+</Button>
                      </QuantityWrapper>
                    </td>
                    <td>
                      <Button onClick={() => removeFromCart(product._id)}>Supprimer</Button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <TotalText>Total: €{total}</TotalText>
                  </td>
                </tr>
              </tbody>
            </Table>
          )}
        </Box>
        {!!cartProducts.length && (
          <Box>
            <ScrollableContent>
              <h2>Informations sur les commandes</h2>
              <Input type="text" placeholder="Nom" value={name} onChange={ev => setName(ev.target.value)} />
              <Input type="text" placeholder="Email" value={email} onChange={ev => setEmail(ev.target.value)} />
              <CityHolder>
                <Input type="text" placeholder="Ville" value={city} onChange={ev => setCity(ev.target.value)} />
                <Input type="text" placeholder="Code Postal" value={postalCode} onChange={ev => setPostalCode(ev.target.value)} />
              </CityHolder>
              <Input type="text" placeholder="Adresse" value={streetAddress} onChange={ev => setStreetAddress(ev.target.value)} />
              <Input type="text" placeholder="Pays" value={country} onChange={ev => setCountry(ev.target.value)} />
              <Button black block onClick={goToPayment}>
                Continuer le paiement
              </Button>
            </ScrollableContent>
          </Box>
        )}
      </ColumnsWrapper>
      <br />
      <WhatsappButton />
      <MailButton mailto="info@guideinmaroc.com" />

    </Center>
  );
}
