import React, { useState } from "react";
import { terms } from "../../data/components/terms";

const Dropdown = () => {
  // Los términos (preguntas y respuestas) se definen directamente dentro del componente.


  // Estado para almacenar el índice del término abierto
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Función para alternar la visibilidad de la respuesta
  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-4 max-w-6xl m-auto md:mb-16">
      <h2 className="text-3xl sm:text-4xl text-csecondary text-center font-extrabold mb-16">
        PREGUNTAS FRECUENTES
      </h2>
      <div className="rounded-xl overflow-hidden flex flex-col gap-4">
        {terms.map((term, index) => (
          <div key={index}>
            <div
              className="term_title flex items-center gap-4 justify-between p-2 px-6 cursor-pointer border-2 rounded-2xl border-fourth"
              onClick={() => toggleAnswer(index)}
            >
              <p className="text-base text-cfourth font-medium">{term.question}</p>
              <div className="flex justify-center items-center max-w-[50px]">
                {/* Icono de la flecha hacia abajo o hacia arriba */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  className={activeIndex === index ? "hidden" : ""}
                >
                  <path
                    d="M6.98389 9.74365L0.343263 3.10303C-0.115722 2.64404 -0.115722 1.90186 0.343263 1.44775L1.44678 0.344238C1.90576 -0.114746 2.64795 -0.114746 3.10205 0.344238L7.80908 5.05127L12.5161 0.344238C12.9751 -0.114746 13.7173 -0.114746 14.1714 0.344238L15.2847 1.44287C15.7437 1.90186 15.7437 2.64404 15.2847 3.09814L8.64404 9.73877C8.18506 10.2026 7.44287 10.2026 6.98389 9.74365Z"
                    fill="#860526"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="11"
                  viewBox="0 0 17 11"
                  fill="none"
                  className={activeIndex === index ? "" : "hidden"}
                >
                  <path
                    d="M9.7475 0.362574L16.2407 7.1474C16.6895 7.61635 16.6732 8.35836 16.2044 8.80228L15.0769 9.8813C14.6079 10.3301 13.8659 10.3138 13.422 9.84495L8.81947 5.03571L4.01023 9.63825C3.54127 10.087 2.79927 10.0708 2.35535 9.60191L1.26646 8.4791C0.817665 8.01015 0.833961 7.26814 1.3028 6.82422L8.08763 0.331005C8.55669 -0.122673 9.2987 -0.106378 9.7475 0.362574Z"
                    fill="#860526"
                  />
                </svg>
              </div>
            </div>

            {/* Mostrar la respuesta solo si este item está activo */}
            {activeIndex === index && (
              <div className="term_description w-full pb-4 px-6 py-4">
                <ul className="text-black/70 list-none">
                  <li>{term.anwser}</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
