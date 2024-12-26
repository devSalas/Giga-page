import React from 'react';
import { navbar_header } from "../data/components/header"; // Importar los datos de navegación

const NavbarDesktop = () => {
  return (
    <div>
      <div className="hidden lg:flex md:px-4 md:py-2 justify-between items-center max-w-7xl m-auto">
        <figure className="self-center place-self-center">
          <a href="/">
            <img src="/imgs/gigamas_logo.png" alt="" className="md:w-24" />
          </a>
        </figure>
        <nav className="flex sm:gap-4 lg:gap-8">
          {navbar_header.map((item) => (
            <a
              key={item.url}  // Es importante incluir una clave única para cada elemento en un mapa
              href={item.url}
              className="md:text-sm lg:text-base font-bold transition-all hover:scale-105 duration-100 hover:md:font-bold hover:md:text-secondary"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <button className="bg-call_bottom text-white flex gap-4 md:p-2 lg:p-3 lg:px-6 md:px-6 rounded-2xl cursor-default">
          <img src="/imgs/phone.png" alt="Phone" />
          <span className="text-base">(01) 4801475</span>
        </button>
      </div>
    </div>
  );
};

export default NavbarDesktop;
