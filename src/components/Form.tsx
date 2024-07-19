import { useState } from "react"

export default function Form() {

    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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
        sendGmail()

        async function sendGmail() {

            try {
                const response = await fetch('https://formsubmit.co/ajax/esalassulca@gmail.com', {
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


    }




    return (

        <form onSubmit={handleSubmit} className="w-full bg-form p-4 py-8 mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">
                <span className="text-csecondary">Registrate, </span>
                <span className="text-cprimary">Te Contactaremos.</span>
            </h2>
            <div className="flex gap-4 flex-wrap justify-center mb-8">
                <input
                    type="text"
                    className="w-36 h-8 md:w-56 md:h-12 bg-primary rounded-full px-4"
                    placeholder="nombre"
                    name="Name"
                    pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]{1,60}" title="Ingresa un nombre válido (máximo 60 caracteres)." required
                />
                <input
                    type="number"
                    className="w-36 h-8 md:w-56 md:h-12 bg-primary rounded-full px-4"
                    placeholder="telefono"
                    name="tel"
                    id="telefono" pattern="9\d{8}" title="Debe comenzar con 9 y tener 9 dígitos." required
                />
                <select name="service" className="w-36 h-8 md:w-56 md:h-12 rounded-full px-4 appearance-auto" required >
                    <option value="">Elegir servicio</option>
                    <option value="internet">Internet</option>
                    <option value="cable">Cable TV</option>
                    <option value="internet y cable">Internet + cable</option> px-4
                    <option value="cámaras">Cámaras</option>
                </select>
            </div>
            <div className="flex justify-center my-4">
                <button
                    type="submit"
                    className="bg-secondary px-16 py-2 md:w-56 md:h-12 font-bold rounded-full text-white transition-all hover:scale-105 duration-100"
                >
                    Enviar
                </button>
            </div>

            {showModal &&  <div className="flex justify-center ">
                <p className="inline-block text-center bg-secondary/80 py-4   px-8 text-white  rounded-2xl">
                {message}
                </p>
            </div>}
        </form>

    )
}