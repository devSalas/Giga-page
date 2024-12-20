import React, { useState } from 'react';
import { dataLinkNavbar } from "../data";

const NavbarMobile = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  // Función para abrir/cerrar el menú
  const toggleNavbar = () => {
    setIsNavbarVisible(prevState => !prevState);
  };

  return (
    <div className="w-full h-16 p-4 flex justify-between items-center lg:hidden">
      <figure>
        <img
          id="btnOpenModal"
          src="/imgs/menu.svg"
          alt="Abrir menú"
          onClick={toggleNavbar}
        />
      </figure>
      <figure>
        <a href="/">
          <img src="/imgs/gigamas_logo.png" alt="Logo" className="w-16" />
        </a>
      </figure>

      {/* Menú de navegación móvil */}
      <div
        id="navbarMobile"
        className={`fixed inset-0 bg-white z-50 ${isNavbarVisible ? '' : 'hidden'}`}
      >
        <div id="closeModal" className="fixed w-full flex justify-between p-4">
          <figure>
            <a href="/">
              <img src="/imgs/gigamas_logo.png" alt="Logo" className="w-32" />
            </a>
          </figure>
          <img
            src="/imgs/close.svg"
            alt="Cerrar"
            onClick={toggleNavbar}
          />
        </div>
        <nav className="flex flex-col justify-center items-center h-full w-full font-semibold text-2xl">
          {dataLinkNavbar.map((link) => (
            <a
              key={link.title}
              href={link.path}
              className="block w-full py-8 text-center text-black hover:bg-secondary hover:text-white"
              onClick={toggleNavbar} // Cierra el menú cuando se hace clic en un enlace
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavbarMobile;
