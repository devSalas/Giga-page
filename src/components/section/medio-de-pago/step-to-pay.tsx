import {useState } from "react";
import { medios_de_pago, Method_pay } from "../../../data/pages/medios-de-pago";

interface Bank_details {
    image: string;
    description: string
}




export default function StepToPay() {
    const [selectedBank, setSelectedBank] = useState<Bank_details[]>(Method_pay["BCP"]!)
    const [activeBank, setActiveBank] = useState("BCP")


    const handleClickBanck = (medio: string,e:any) => {
     /*    const getTagBank = e.currentTarget
        const getDataSetTagBank = getTagBank.dataset.bank */

       setActiveBank(medio)

        
        if (medio == "BBVA") setSelectedBank(Method_pay["BBVA"])
        if (medio == "YAPE") setSelectedBank(Method_pay["YAPE"])
        if (medio == "BCP") setSelectedBank(Method_pay["BCP"])
    }

    return (
        <section className="p-8 lg:p-16 bg-plata">
            <h2 className="text-center  text-2xl md:text-4xl font-bold mb-8">
                <span className="text-fourth"> SELECCIONA TU MÉTODO DE PAGO </span> <br />
                <span className="text-secondary"
                >Y TE ENSEÑAMOS A COMO PAGAR TU SERVICIO</span>
            </h2>

            <article className=" ">
                <div id="contenedor-pagos" className="flex flex-wrap justify-center gap-8 max-w-6xl m-auto p-4 lg:p-16">
                    {
                        medios_de_pago.map((medios, i) => {
                            return (
                                <a
                                    href="#step-to-pay"
                                    onClick={(e) => handleClickBanck(medios.name,e)}
                                    key={i}
                                    data-bank={medios.name}
                                    className={`${medios.name === activeBank ?'bg-custom-gradient-global' :'' }   method-pay p-4 lg:p-8 rounded-2xl bg-primary aspect-square flex justify-center items-center relative  hover:bg-custom-gradient-global  duration-300`}
                                >
                                    <img src={medios.url} alt="" />
                                    <div className="bg-secondary  text-white absolute bottom-0 pt-1 px-2 inline-block rounded-t-lg">
                                        COMO PAGAR  
                                    </div>
                                </a>
                            );
                        })
                    }
                </div>
            </article>

            <article id="step-to-pay" className="grid md:grid-cols-2  gap-y-16 gap-x-8 lg:gap-x-0 max-w-6xl m-auto py-16">
                {
                    selectedBank.map((el, index) => {
                        return (<div key={index} className="w-full max-w-md aspect-square flex   justify-self-center gap-6">
                            <img src={el.image} alt="" className={`${(index+1)%2==0 ?"order-1" :"order-2"} md:order-1`}/>
                            <div className={`flex flex-col justify-center items-center ${(index+1)%2==0 ?"order-2" :"order-1"} md:order-2` } >
                                <div className="self-start text-7xl text-csecondary font-bold">
                                    {index+1}
                                </div>
                                <p className="text-pretty text-xs     ">
                                {el.description}
                                </p>
                            </div>
                        </div>)
                    })
                }
            </article>


        </section>
    )
}