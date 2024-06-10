import React, { useContext, useState, useEffect } from "react";
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CartContext } from "@/components/CartContext";
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from "next/link";




// Composants stylisés pour la navbar
const NavbarContainer = styled.nav`
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  padding: 10px 50px;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  color: #ff7a00;
  font-weight: bold;
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 10px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  transition: max-height 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    text-align: center;
  }
`;

const MenuItem = styled.li`
  margin-left: 20px;
  color: #fff;

  @media (max-width: 768px) {
    margin: 20px 0;
    padding: 10px 0;
    color: #fff;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;

      &:hover {
        color: #ff7a00;
      }
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1100; /* Ensure the hamburger icon is above the menu */

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cartProducts } = useContext(CartContext);
  const router = useRouter();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleNavigation = (path) => {
    setOpen(false);
    router.push(path);
  };

  // Utilisation de useEffect pour gérer les liens dynamiquement
  useEffect(() => {
    const menuItems = [
      { path: '/voitures', label: 'VOITURES' },
      { path: '/motos', label: 'MOTOS' },
      { path: '/voitureSpeciales', label: 'VÉHICULES SPÉCIAUX' },
      { path: '/cart', label: 'RESERVER' },
      { path: '/services', label: 'SERVICES' },
      { path: '/contact', label: 'CONTACT' },
    ];

    const menuList = document.getElementById('menuList');
    menuList.innerHTML = '';

    menuItems.forEach(item => {
      const menuItem = document.createElement('li');
      menuItem.className = 'menu-item';
      menuItem.style.margin = '20px 0';
      menuItem.style.padding = '10px 0';
      menuItem.style.color = '#fff';
      menuItem.innerHTML = `<a href="${item.path}" style="color: #fff; text-decoration: none; font-size: 1.5rem; font-weight: bold;">${item.label}</a>`;
      menuItem.addEventListener('click', (e) => {
        e.preventDefault();
        handleNavigation(item.path);
      });

      menuList.appendChild(menuItem);
    });
  }, []);

  return (
    <NavbarContainer>
      <Logo>
        <Link href="/" passHref>
          <Image src="/gimloc_logo.png" alt="Image de logo" width={80} height={40} />
        </Link>
      </Logo>
      <Hamburger onClick={handleToggle}>
        {open ? <FaTimes size={25} color="#ff7a00" /> : <FaBars size={25} color="#ff7a00" />}
      </Hamburger>
      <Menu id="menuList" open={open}></Menu>
    </NavbarContainer>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '60px' }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
