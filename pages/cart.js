import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";

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
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
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
  img {
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
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
  const [daysBetween, setDaysBetween] = useState(null); // Ajoutez ceci pour suivre la durée de la location

  useEffect(() => {
  // Simulez la récupération de la durée de la location depuis le formulaire de réservation
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

// Ajoutez un console.log pour vérifier daysBetween
useEffect(() => {
  console.log("daysBetween:", daysBetween);
}, [daysBetween]);


  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('success')) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  async function goToPayment() {
    const reservationData = {
      name, email, city, postalCode, streetAddress, country,
      cartProducts,
      daysBetween, // Incluez la durée de la location dans les données de réservation
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
  }
  

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price * daysBetween; 
    console.log(daysBetween);
    // Multipliez le prix par la durée de la location
  }

  if (isSuccess) {
    return (
      <>
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Merci pour votre commande !</h1>
              <p>On vous enverra un courriel pour confirmer votre réservation.</p>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }

  return (
    <>
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Réservation</h2>
            {!cartProducts?.length && (
              <div>Pas de réservation</div>
            )}
            {products?.length > 0 && (
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
                          <img src={product.images[0]} alt="" />
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>
                      <td>
                        <QuantityLabel>
                          {daysBetween}
                        </QuantityLabel>
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
          {!!cartProducts?.length && (
            <Box>
              <h2>Informations sur les commandes</h2>
              <Input type="text"
                placeholder="Nom"
                value={name}
                name="name"
                onChange={ev => setName(ev.target.value)} />
              <Input type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={ev => setEmail(ev.target.value)} />
              <CityHolder>
                <Input type="text"
                  placeholder="Ville"
                  value={city}
                  name="city"
                  onChange={ev => setCity(ev.target.value)} />
                <Input type="text"
                  placeholder="Code Postal"
                  value={postalCode}
                  name="postalCode"
                  onChange={ev => setPostalCode(ev.target.value)} />
              </CityHolder>
              <Input type="text"
                placeholder="Adresse"
                value={streetAddress}
                name="streetAddress"
                onChange={ev => setStreetAddress(ev.target.value)} />
              <Input type="text"
                placeholder="Pays"
                value={country}
                name="country"
                onChange={ev => setCountry(ev.target.value)} />
              <Button black block
                onClick={goToPayment}>
                Continuer le paiement
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
