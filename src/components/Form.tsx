import { useEffect, useState } from "react"
import { urlbase } from "../api/base";


export default function Form() {

    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const notify = setTimeout(() => {
            setMessage("");        // Limpiar el mensaje
            setShowModal(false);   // Cerrar el modal
        }, 3000);
    
        // Limpiar el timeout cuando el componente se desmonte o cuando 'message' cambie
        return () => clearTimeout(notify);
    }, [message]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const nombre = (form.elements.namedItem('Name') as HTMLInputElement)?.value;
        const telefono = (form.elements.namedItem('tel') as HTMLInputElement)?.value;
        const servicio = (form.elements.namedItem('service') as HTMLInputElement)?.value;

        const data = { nombre, telefono, servicio }

        async function getData() {
            try {
                setLoading(true)
                const res = await fetch(`${urlbase}/clientepotencial`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(data)
                });

                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                const json = await res.json();
                console.log(json)

                if (json.status == "success") {
                    setShowModal(true)
                    setMessage("Perfecto, en un momento nos comunicaremos contigo, gracias.");
                }
            } catch (error) {
                setShowModal(true)
                setMessage("Error al enviar, intentelo mas tarde.");
            } finally {
                setLoading(false)
                form.Name.value = "";
                form.tel.value = "";
                form.service.value = ""
            }
        }
        getData();
       /*  async function sendGmail() {

            try {
                const response = await fetch('', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    const result = await response.json();

                } else {

                }
            } catch (error) {

            }

        }
        sendGmail() */


    }




    return (
        <form onSubmit={handleSubmit} className="w-full  py-8 px-4">
            <div className="max-w-6xl  m-auto">
                <div className="bg-custom-gradient-global p-4 py-6 md:p-8 rounded-[30px]">
                    <h2 className=" text-center text-primary text-2xl md:text-3xl font-bold text-whitem mb-8 ">
                        Dejanos tus datos y nosotros te contactamos
                    </h2>
                    <div className="flex gap-4 flex-wrap justify-center px-4 sm:px-0">
                        <input
                            type="text"
                            className="w-full  sm:w-36 h-10 md:w-56 md:h-12 bg-primary rounded-2xl px-4 outline-none"
                            placeholder="nombre"
                            name="Name"
                            pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]{1,60}" title="Ingresa un nombre válido (máximo 60 caracteres)." required
                        />
                        <input
                            type="number"
                            className="w-full  sm:w-36 h-10 md:w-56 md:h-12 bg-primary rounded-2xl px-4 outline-none"
                            placeholder="telefono"
                            name="tel"
                            id="telefono" pattern="9\d{8}" title="Debe comenzar con 9 y tener 9 dígitos." required
                        />
                        <select name="service" className="w-full  sm:w-36 h-10 md:w-56 md:h-12 rounded-2xl px-4 appearance-auto" required >
                            <option value="">Elegir servicio</option>
                            <option value="1">Internet</option>
                            <option value="2">Cable TV</option>
                            <option value="3">Internet + cable</option>
                            <option value="4">Cámaras</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-center my-8">
                    <button
                        type="submit"
                        className="bg-fourth px-16 py-2 md:w-56 md:h-12 font-bold rounded-full text-white transition-all hover:scale-105 duration-100"
                    >
                         {loading ? (<div className="flex-col gap-4 w-full flex items-center justify-center">
                                <div className="w-8 h-8 border-8  text-4xl animate-spin border-white flex items-center justify-center border-t-fourth rounded-full"></div>
                            </div>) : "Enviar"}
                    </button>
                </div>

                {showModal && <div className="flex justify-center ">
                    <p className="inline-block text-center bg-custom-gradient-global py-4   px-8 text-white  rounded-2xl">
                        {message}
                    </p>
                </div>}
            </div>
        </form>
    )
}