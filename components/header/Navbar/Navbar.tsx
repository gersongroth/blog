import Logo from "@components/ui/Logo";
import Link from "next/link";
import React from "react";
import Container from "../../ui/Container";
import Menu from "../Menu";
import styles from './Navbar.module.css';
import NavbarRoot from "./NavbarRoot";

const Navbar = ({ }) => (
  <NavbarRoot>
    <Container>
      <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
        <div className="flex items-center flex-1">
          <Link href="/">
            <a className={styles.logo} aria-label="Logo">
              <Logo />
            </a>
          </Link>
          {/* <nav className="hidden ml-6 space-x-4 lg:block">
            <Link href="/search">
              <a className={styles.link}>All</a>
            </Link>
            <Link href="/search?q=clothes">
              <a className={styles.link}>Clothes</a>
            </Link>
            <Link href="/search?q=accessories">
              <a className={styles.link}>Accessories</a>
            </Link>
            <Link href="/search?q=shoes">
              <a className={styles.link}>Shoes</a>
            </Link>
          </nav> */}
        </div>

        <div className="justify-center flex-1 hidden lg:flex">
          {/* <Searchbar /> */}
        </div>

        <div className="flex justify-end flex-1 space-x-8 items-center">
          <Menu />
          {/* <UserNav /> */}
        </div>
      </div>

      <div className="flex pb-4 lg:px-6 lg:hidden">
        {/* <Searchbar id="mobile-search" /> */}
      </div>
    </Container>
  </NavbarRoot>
);

export default Navbar;
