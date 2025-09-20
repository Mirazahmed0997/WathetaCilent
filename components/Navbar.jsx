"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white/30 backdrop-blur-2xl fixed z-50 w-full" role="banner">
      <nav className="mx-0 lg:mx-20 xl:mx-28 md:mx-5" role="navigation" aria-label="Main Navigation">
        <div className="navbar">
          {/* Logo */}
          <Link href="/" passHref aria-label="Home">
            <div className="navLogoDiv mt-2">
              <img className="navLog" src="/images/logo.png" alt="Watheta Logo" />
            </div>
          </Link>

          {/* Navigation Links */}
          <ul
            onClick={closeMenu}
            className={`nav-links ${isMenuOpen ? "active" : ""}`}
          >
            <li>
              <Link
                prefetch={false}
                href="/"
                className={`nav-item ${pathname === "/" ? "active" : ""}`}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                href="/features"
                className={`nav-item ${pathname === "/features" ? "active" : ""}`}
                aria-current={pathname === "/features" ? "page" : undefined}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                href="/pricing"
                className={`nav-item ${pathname === "/pricing" ? "active" : ""}`}
                aria-current={pathname === "/pricing" ? "page" : undefined}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.watheta.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item"
                aria-label="Watheta Documentation"
              >
                Help
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                href="/contact"
                className={`nav-item ${pathname === "/contact" ? "active" : ""}`}
                aria-current={pathname === "/contact" ? "page" : undefined}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                href="/blogs"
                className={`nav-item ${pathname === "/blogs" ? "active" : ""}`}
                aria-current={pathname === "/blogs" ? "page" : undefined}
              >
                Blog
              </Link>
            </li>

            <li className="block lg:hidden xl:hidden">
              <Link href="https://dash.watheta.com/login" passHref aria-label="Login">
                <button>Log In</button>
              </Link>
            </li>
            <li className="block lg:hidden xl:hidden">
              <Link href="https://dash.watheta.com/register" passHref aria-label="Get Started">
                <button className="get-started rounded-3xl">Get Started</button>
              </Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="flex justify-end w-auto">
            <Link href="https://dash.watheta.com/login" passHref aria-label="Login">
              <button className="me-1 lg:me-5 xl:me-5 md:me-5 hidden lg:block xl:block md:hidden mt-3">
                Log In
              </button>
            </Link>
            <Link href="https://dash.watheta.com/register" passHref aria-label="Get Started">
              <button className="get-started hidden lg:block xl:block md:hidden rounded-3xl text-sm">
                Get Started
              </button>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div
            className="breadcrumb w-auto"
            onClick={toggleMenu}
            role="button"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
            tabIndex={0}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;