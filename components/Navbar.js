import React, { useContext, useState } from "react";
import Link from "next/link";
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { CartContext } from "@/components/CartContext";
import Footer from '@/components/Footer'; // Assurez-vous que le chemin est correct
import Image from 'next/image';

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
    display: ${props => (props.open ? 'block' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    text-align: center;
    max-height: ${props => (props.open ? '300px' : '0')};
    overflow: hidden;
  }
`;

const MenuItem = styled.li`
  margin-left: 20px;

  @media (max-width: 768px) {
    margin: 0;
    padding: 10px 0;
    border-top: 1px solid #444;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
      color: #ff7a00;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cartProducts } = useContext(CartContext);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <NavbarContainer>
      <Logo>
        <Link href="/" passHref>
          <Image src="/gimloc_logo.png" alt="Image de logo" width={80} height={40} />
        </Link>
      </Logo>
      <Hamburger onClick={handleToggle}>
        <FaBars size={25} color="#ff7a00" />
      </Hamburger>
      <Menu open={open}>
        <MenuItem>
          <Link href="/voitures" passHref>
            <p>VOITURES</p>
          </Link>
        </MenuItem>
         <MenuItem>
          <Link href="/motos" passHref>
            <p>MOTOS</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/voitureSpeciales" passHref>
            <p>VÉHICULES SPÉCIAUX</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/cart" passHref>
            <p>RESERVER</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/services" passHref>
            <p>SERVICES</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/contact" passHref>
            <p>CONTACT</p>
          </Link>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '60px' }}>{children}</main> {/* Ajoutez un padding-top pour éviter que le contenu ne soit masqué par la navbar */}
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Layout;
