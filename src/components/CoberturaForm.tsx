import { useEffect, useState } from "react";
import { distritos, provincias } from "../data/pages/cobertura";
import { urlPostCreatePotentialClient } from "../api/base";

interface DataForm {
    provincia: string;
    distrito: string;
    nombre: string;
    telefono: string;
    dni: string;
}

function CoberturaForm() {
    const [message, setMessage] = useState("")
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const notify = setTimeout(() => {
            setError(false);
            setSuccess(false);

        }, 3000);
        return () => clearTimeout(notify);
    }, [error, success]);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        const { provincia, distrito, nombre, telefono, dni, correo } = data

        if (!provincia || !distrito || !nombre || !telefono || !dni) {
            return setMessage("LLenar información correcta")
        }

        const sendData = async () => {
            try {
                setLoading(true)
                const res = await fetch(urlPostCreatePotentialClient, {
                    method: "POST", body: JSON.stringify({ provincia, distrito, nombre, telefono, dni, correo }), headers: {
                        'Content-Type': 'Application/json'
                    },
                    credentials: 'include'
                });
                if (!res.ok) {
                    new Error();
                }
                const json = await res.json()
                
                if (json.status == "success") {
                    setSuccess(true)
                    let form = e.target as HTMLFormElement
                    form.reset()
                }
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
                e.currentTarget.reset();
            }
        }

        sendData()

    }




    return (
        <div className="flex flex-col justify-center gap-[30px]">
            <div className=" bg-map rounded-[20px] sm:p-[50px] bg-cover shadow-lg	" >
                <form onSubmit={handleSubmit} className="bg-primary p-[20px] sm:px-[35px] sm:py-[40px] rounded-[15px] flex flex-col gap-[30px] max-w-[400px] m-auto shadow-2xl">

                    <div className="flex flex-col gap-[20px]">

                        <select name="provincia" id="" required className="h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100">
                            <option value="">Eliga la Provincia</option>
                            {
                                provincias.map((distrito, index) => (
                                    <option key={index} value={distrito.value}>{distrito.name}</option>
                                ))
                            }
                        </select>
                        <select name="distrito" required id="" className="h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100">
                            <option value="">Eliga la distrito</option>
                            {
                                distritos.map((distrito, index) => (
                                    <option key={index} value={distrito.value}>{distrito.name}</option>
                                ))
                            }
                        </select>
                        <input name="nombre" required type="text" placeholder="Nombre Completo" className="h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100" />
                        <input name="telefono" required type="text" placeholder="Telefono" className="h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100" />
                        <input name="dni" required type="text" placeholder="DNI" className="h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100" />

                        <button className="h-[45px] w-full rounded-[20px] px-[10px] bg-secondary  text-white">
                            {loading ? (<div className="flex-col gap-4 w-full flex items-center justify-center">
                                <div className="w-8 h-8 border-8  text-4xl animate-spin border-white flex items-center justify-center border-t-fourth rounded-full"></div>
                            </div>) : "Enviar"}
                        </button>
                    </div>
                </form>
            </div>
            {success && <div className="  px-[20px] py-[10px] rounded-md w-full text-white bg-custom-gradient-global ">
                Perfecto, en un momento nos comunicaremos contigo, gracias.
            </div>}
            {error && <div className="w-full  rounded-md  text-white bg-red-500  ">
                <p className="px-[20px] py-[10px] ">Ocurrio un Error al enviar el formluario. Intentelo nuevamente, por favor.</p>
            </div>}
        </div>
    )
}
export default CoberturaForm;