import { useState } from "react"

/* 
NO SE ESTA USANDO ESTE COMPONENTE
*/

export default function ContactForm() {

    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState("");
    const [loading,setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("entro")
        const form = e.currentTarget;
        const name = (form.elements.namedItem('Name') as HTMLInputElement)?.value;
        const tel = (form.elements.namedItem('tel') as HTMLInputElement)?.value;
        const service = (form.elements.namedItem('service') as HTMLInputElement)?.value;



        const data = {
            name,
            tel,
            service
        }

        async function getData() {
            try {
                setLoading(true)
                const res = await fetch("https://gigamas.com.pe/downloadexcel/index.php", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(data)
                });

                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                setShowModal(true)
                setMessage("Perfecto, en un momento nos comunicaremos contigo, gracias.");
                const result = await res.json();
                console.log(result);

                

            } catch (error) {
                setShowModal(true)
                setMessage("Error al enviar, intentelo mas tarde.");
            } finally {
                setTimeout(() => {
                    setShowModal(false)
                }, 5000);

                form.Name.value = "";
                form.tel.value = "";
                form.service.value = ""


            }
        }

        getData();

       

    }




    return (

        <form onSubmit={handleSubmit} className="w-full  py-8 px-4">
            <div className="max-w-6xl  m-auto">
                <div className="bg-custom-gradient-global p-4 md:p-8 rounded-[30px]">
                <h2 className=" text-center text-primary text-2xl md:text-3xl font-bold text-whitem mb-8 ">
                    Dejanos tus datos y nosotros te contactamos
                </h2>
                <div className="flex gap-4 flex-wrap justify-center ">
                    <input
                        type="text"
                        className="w-36 h-10 md:w-56 md:h-12 bg-primary rounded-2xl px-4 outline-none"
                        placeholder="nombre"
                        name="Name"
                       title="Ingresa un nombre válido (máximo 60 caracteres)." required
                    />
                    <input
                        type="number"
                        className=" w-36 h-10 md:w-56 md:h-12 bg-primary rounded-2xl px-4 outline-none"
                        placeholder="telefono"
                        name="tel"
                        id="telefono" title="Debe comenzar con 9 y tener 9 dígitos." required
                    />
                   {/*  <select name="service" className="w-36  h-10 md:w-56 md:h-12 rounded-2xl px-4 appearance-auto" required >
                        <option value="">Elegir servicio</option>
                        <option value="internet">Internet</option>
                        <option value="cable">Cable TV</option>
                        <option value="internet y cable">Internet + cable</option>  
                        <option value="cámaras">Cámaras</option>
                    </select> */}
                </div>
                </div>

                <div className="flex justify-center my-8">
                    <button
                        type="submit"
                        className="bg-fourth px-16 py-2 md:w-56 md:h-12 font-bold rounded-full text-white transition-all hover:scale-105 duration-100"
                    >
                        Enviar
                    </button>
                </div>

                {showModal && <div className="flex justify-center ">
                    <p className="inline-block text-center bg-secondary/80 py-4   px-8 text-white  rounded-2xl">
                        {message}
                    </p>
                </div>}
            </div>
        </form>

    )
}