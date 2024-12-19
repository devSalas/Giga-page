import React, { useState } from 'react';
import { LinkWhatsaapTechnicalSupport, LinkWhatsaapCustomer } from "../data";

const WhatsAppWidget: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="container ">
                <section 
                    id="ws" 
                    className={`${isModalOpen ? 'block' : 'hidden'} max-w-[380px] overflow-hidden shadow-2xl rounded-[25px] font-sans animate-showModal`}
                >
                    <header 
                        className="bg-[rgb(38,190,38)] p-4 flex gap-5 text-white" 
                        id="header-wp"
                    >
                        <div className="header_icon_wp m-auto">
                            <WhatsAppIcon />
                        </div>
                        <div>
                            <div className="text-base mb-[10px]">Iniciar una conversación</div>
                            <div className="text-sm">
                                ¡Hola! Haga clic en uno de nuestros miembros a continuación para chatear WhatsApp
                            </div>
                        </div>
                    </header>

                    <div className="container_worker_wp flex flex-col gap-[10px] p-[30px_25px] bg-white">
                        <a
                            className="worker_wp flex gap-2 items-center bg-[rgba(8,8,8,0.055)] p-3 no-underline rounded-[5px] border-l-2 border-l-[rgb(38,190,38)] shadow-[0px_0px_5px_rgba(41,40,40,0.377)] hover:scale-105 transition-transform duration-100 ease-linear"
                            target="_blank"
                            href={LinkWhatsaapCustomer}
                            rel="nofollow noopener noreferrer"
                        >
                            <div>
                                <WhatsAppIcon />
                            </div>
                            <div>
                                <div className="wp_title_worker text-black mb-[5px]">Atención al Cliente</div>
                                <div className="wp_desc_worker text-[rgba(56,54,54,0.747)] text-xs">
                                    Escríbeme para una cualquier consulta
                                </div>
                            </div>
                        </a>

                        <a
                            className="worker_wp flex gap-2 items-center bg-[rgba(8,8,8,0.055)] p-3 no-underline rounded-[5px] border-l-2 border-l-[rgb(38,190,38)] shadow-[0px_0px_5px_rgba(41,40,40,0.377)] hover:scale-105 transition-transform duration-100 ease-linear"
                            target="_blank"
                            href="https://api.whatsapp.com/send?phone=51947341565"
                            rel="nofollow noopener noreferrer"
                        >
                            <div>
                                <WhatsAppIcon />
                            </div>
                            <div>
                                <div className="wp_title_worker text-black mb-[5px]">Soporte Técnico</div>
                                <div className="wp_desc_worker text-[rgba(56,54,54,0.747)] text-xs">
                                    Escríbeme para una cualquier consulta
                                </div>
                            </div>
                        </a>
                    </div>
                </section>

                <button 
                    id="btn-w" 
                    onClick={toggleModal}
                    className="self-end justify-self-end bg-[rgb(38,190,38)] border-none w-[60px] h-[60px] flex justify-center items-center rounded-full"
                >
                    {isModalOpen ? (
                        <CloseIcon />
                    ) : (
                        <WhatsAppIcon />
                    )}
                </button>
            </div>
        </div>
    );
};

// WhatsApp Icon Component
const WhatsAppIcon: React.FC = () => (
    <svg
        width="32px"
        height="32px"
        className="nta-whatsapp-default-avatar"
        version="1.1"
        viewBox="0 0 512 512"
    >
        <path
            style={{fill: "#EDEDED"}}
            d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0 S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"
        />
        <path
            style={{fill: "#55CD6C"}}
            d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662 c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234 c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"
        />
        <path
            style={{fill: "#FEFEFE"}}
            d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297 c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048 c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359 c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248 c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062 l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"
        />
    </svg>
);

// Close Icon Component
const CloseIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        style={{fill: "rgba(255, 255, 255, 1)"}}
    >
        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
    </svg>
);

export default WhatsAppWidget; 