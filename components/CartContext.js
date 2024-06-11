import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (ls) {
      const storedCart = ls.getItem('cart');
      if (storedCart) {
        setCartProducts(JSON.parse(storedCart));
      }
    }
  }, [ls]);

  useEffect(() => {
    if (ls) {
      if (cartProducts.length > 0) {
        ls.setItem('cart', JSON.stringify(cartProducts));
      } else {
        ls.removeItem('cart');
      }
    }
  }, [cartProducts, ls]);

  const addProduct = (productId) => {
    setCartProducts(prev => [...prev, productId]);
  };

  const removeProduct = (productId) => {
    setCartProducts(prev => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((_, index) => index !== pos);
      }
      return prev;
    });
  };

  const removeFromCart = (productId) => {
    setCartProducts(prev => prev.filter(id => id !== productId));
  };

  const clearCart = () => {
    setCartProducts([]);
    if (ls) {
      ls.removeItem('cart');
    }
  };

  return (
    <CartContext.Provider value={{ cartProducts, addProduct, removeProduct, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
