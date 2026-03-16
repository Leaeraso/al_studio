"use client";
// Client Component: necesita useState para el menú móvil y el estado de scroll,
// y useEffect para el scroll listener y el lock del body scroll

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Clases", href: "#clases" },
  { label: "Sobre", href: "#sobre" },
  { label: "Horarios", href: "#horarios" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "header-scrolled border-b" : "bg-transparent"
        }`}
      >
        <nav
          className="container-layout flex items-center justify-between h-16 md:h-20"
          aria-label="Navegación principal"
        >
          {/* Logo — el SVG tiene fill negro, class invert lo vuelve blanco en dark mode */}
          <Link href="#inicio" aria-label="Al Studio - Volver al inicio">
            <Image
              src="/logo.svg"
              alt="Al Studio"
              width={120}
              height={40}
              className="h-14 md:h-[72px] w-auto"
              priority
            />
          </Link>

          {/* Desktop nav — visible en lg+ */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="header-nav-link text-body-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa — solo en mobile/tablet */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 transition-colors duration-200"
            style={{ color: "var(--color-foreground)" }}
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`mobile-menu-overlay fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        aria-hidden={!mobileOpen}
      >
        {/* Botón cerrar */}
        <button
          onClick={() => setMobileOpen(false)}
          className={`absolute top-4 right-4 p-2 transition-all duration-300 ${
            mobileOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
          style={{ color: "var(--color-foreground)" }}
          aria-label="Cerrar menú de navegación"
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>

        <nav aria-label="Menú móvil">
          <ul className="flex flex-col items-center gap-8" role="list">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-300 ease-in-out ${
                  mobileOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  className="mobile-nav-link text-[22px] font-body font-light tracking-[0.12em] uppercase"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
