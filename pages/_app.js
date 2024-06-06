import { createGlobalStyle } from 'styled-components';
import { CartContextProvider } from '@/components/CartContext';
import Layout from '@/components/Navbar';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #eee;
  }
  
  main {
    padding-top: 60px; /* Ajustez cette valeur selon la hauteur de votre navbar */
  }
  
  * {
    box-sizing: border-box;
  }
  
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </>
  );
}
