import { useEffect, useState } from "react";
import { urlbase } from "../api/base";

function FormContact() {

    const [message, setMessage] = useState("")
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const notify = setTimeout(() => {
            setError(false);
            setSuccess(false);     // Limpiar el mensaje

        }, 3000);

        // Limpiar el timeout cuando el componente se desmonte o cuando 'message' cambie
        return () => clearTimeout(notify);
    }, [error, success]);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        const { nombre, dni, correo, telefono, mensaje } = data
        console.log(data)
        if (!nombre || !telefono || !dni || !correo) {
            alert("Tiene que ingresar todos los datos.")
            return;
        }





        const sendData = async () => {
            try {
                setLoading(true)
                const res = await fetch(`${urlbase}/clientepotencial`, {
                    method: "POST", body: JSON.stringify(data), headers: {
                        'Content-Type': 'Application/json',
                        'Accept': 'Application/json'
                    },
               
                });
                console.log(res)

                if (!res.ok) {
                    new Error();
                }
                const json = await res.json()
                console.log(json)
                if (json.status == "success") {
                    setSuccess(true)
                    let form = e.target as HTMLFormElement
                    form.reset()
                }
            } catch (error) {
               
                setError(true)
            }finally{
                setLoading(false)
            }
        }

        sendData()

    }


    useEffect(() => {

    }, [])



    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] max-w-[500px]   m-auto ">

            <div className="w-full ">
                <div
                    className="grid grid-cols-2 px-[15px] py-[20px] bg-custom-gradient-global gap-[10px]  rounded-[24px] lg:p-[20px] lg:gap-[20px]  "
                >
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombres Completos"
                        required
                        className="rounded-[15px] lg:rounded-[30px] text-start h-[40px]  py-[4px] px-[20px] text-xs sm:text-base "
                    />
                    <input
                        type="text"
                        name="dni"
                        placeholder="DNI o CE"
                        className="rounded-[15px] lg:rounded-[20px] text-start h-[40px] py-[4px] px-[20px] text-xs sm:text-base "
                    />
                    <input
                        type="text"
                        name="telefono"
                        placeholder="telefono"
                        className="rounded-[15px] lg:rounded-[20px] text-start h-[40px] py-[4px] px-[20px] text-xs sm:text-base "
                    />
                    <input
                        type="correo"
                        placeholder="Correo"
                        name="correo"
                        className="rounded-[15px] lg:rounded-[20px] text-start h-[40px] py-[4px] px-[20px] text-xs sm:text-base "
                    />
                    <textarea name="mensaje" id="" className=" rounded-[15px]  lg:rounded-[20px] h-[80px] resize-none w-full col-span-2 p-[20px] ">

                    </textarea>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <button type="submit" className="px-16 rounded-2xl py-2 bg-fourth text-white">
                    {loading ? (<div className="flex-col gap-4 w-full flex items-center justify-center">
                        <div className="w-6 h-6 border-8  text-4xl animate-spin border-white flex items-center justify-center border-t-fourth rounded-full"></div>
                    </div>) : "Enviar"}
                </button>
            </div>
            {success && <div className="  px-[20px] py-[10px] rounded-md w-full text-white bg-custom-gradient-global ">
                Perfecto, en un momento nos comunicaremos contigo, gracias.
            </div>}
            {error && <div className="w-full  rounded-md  text-white bg-red-500  ">
                <p className="px-[20px] py-[10px] ">Ocurrio un Error al enviar el formluario. Intentelo nuevamente, por favor.</p>
            </div>}
        </form>

    );
}

export default FormContact;