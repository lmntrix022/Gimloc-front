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
  margin-left: 40px;
  color: #fff;

  a {
    color: ${props => (props.selected ? '#ff7a00' : '#fff')};
    background: ${props => (props.selected ? 'rgba(255, 122, 0, 0.2)' : 'transparent')};
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background 0.3s, color 0.3s;

    &:hover {
      color: #ff7a00;
      background: rgba(255, 122, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    margin: 20px 0;
    padding: 10px 0;
    color: #fff;

    a {
      color: ${props => (props.selected ? '#ff7a00' : '#fff')};
      background: ${props => (props.selected ? 'rgba(255, 122, 0, 0.2)' : 'transparent')};
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
      padding: 10px 20px;
      border-radius: 5px;

      &:hover {
        color: #ff7a00;
        background: rgba(255, 122, 0, 0.2);
      }
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1100;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState('');
  const { cartProducts } = useContext(CartContext);
  const router = useRouter();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleNavigation = (path) => {
    setOpen(false);
    setSelectedPath(path);
    router.push(path);
  };

  useEffect(() => {
    setSelectedPath(router.pathname);
  }, [router.pathname]);

  const NavLink = ({ href, children }) => (
    <MenuItem selected={selectedPath === href}>
      <Link href={href} onClick={() => handleNavigation(href)}>
        {children}
      </Link>
    </MenuItem>
  );

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
      <Menu open={open}>
        <NavLink href="/voitures">VOITURES</NavLink>
        <NavLink href="/motos">MOTOS</NavLink>
        <NavLink href="/voitureSpeciales">VÉHICULES SPÉCIAUX</NavLink>
        <NavLink href="/cart">RESERVER</NavLink>
        <NavLink href="/services">SERVICES</NavLink>
        <NavLink href="/contact">CONTACT</NavLink>
      </Menu>
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
