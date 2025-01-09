import { useEffect, useState } from "react"
import { urlbase } from "../api/base";


// Datos mock
const provincias = [
    { value: "lima", name: "Lima" },
    { value: "canete", name: "Cañete" }
];

const distritos = [
    { value: 1, name: "Villa Maria del triunfo", provincia: "lima" },
    { value: 2, name: "San Juan de Miraflores", provincia: "lima" },
    { value: 3, name: "Surco", provincia: "lima" },
    { value: 4, name: "Lunahuaná", provincia: "canete" },

];


function CoberturaForm() {
    const [formData, setFormData] = useState({
        provincia: "",
        distrito: "",
        nombre: "",
        telefono: "",
        dni: "",
        correo: ""
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [filteredDistritos, setFilteredDistritos] = useState(distritos);

    useEffect(() => {
        const notify = setTimeout(() => {
            setError(false);
            setSuccess(false);
        }, 3000);
        return () => clearTimeout(notify);
    }, [error, success]);

    useEffect(() => {
        if (formData.provincia) {
            const distritosProvicia = distritos.filter(
                distrito => distrito.provincia === formData.provincia
            );
            setFilteredDistritos(distritosProvicia);
            setFormData(prev => ({ ...prev, distrito: "" })); 
        } else {
            setFilteredDistritos([]);
        }
    }, [formData.provincia]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const { provincia, distrito, nombre, telefono, dni, correo } = formData;

        if (!provincia || !distrito || !nombre || !telefono || !dni) {
            setMessage("LLenar información correcta");
            return;
        }

        try {
            setLoading(true);
            console.log({ provincia, distrito, nombre, telefono, dni, correo })
            const res = await fetch(`${urlbase}/clientepotencial`, {
                method: "POST",
                body: JSON.stringify({ provincia, distrito, nombre, telefono, dni, correo }),
                headers: {
                    'Content-Type': 'Application/json'
                },
                credentials: 'include'
            });

            if (!res.ok) {
                throw new Error();
            }

            const json = await res.json();
            
            if (json.status === "success") {
                setSuccess(true);
                setFormData({
                    provincia: "",
                    distrito: "",
                    nombre: "",
                    telefono: "",
                    dni: "",
                    correo: ""
                });
            }
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center gap-[30px]">
            <div className="bg-map rounded-[20px] sm:p-[50px] bg-cover shadow-lg">
                <form onSubmit={handleSubmit} className="bg-primary p-[20px] sm:px-[35px] sm:py-[40px] rounded-[15px] flex flex-col gap-[30px] max-w-[400px] m-auto shadow-2xl">
                    <div className="flex flex-col gap-[20px]">
                        <select 
                            name="provincia" 
                            value={formData.provincia}
                            onChange={handleChange}
                            required 
                            className="h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100"
                        >
                            <option value="">Eliga la Provincia</option>
                            {provincias.map((provincia, index) => (
                                <option key={index} value={provincia.value}>
                                    {provincia.name}
                                </option>
                            ))}
                        </select>

                        <select 
                            name="distrito" 
                            value={formData.distrito}
                            onChange={handleChange}
                            required 
                            className="h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100"
                        >
                            <option value="">Eliga el distrito</option>
                            {filteredDistritos.map((distrito, index) => (
                                <option key={index} value={distrito.value}>
                                    {distrito.name}
                                </option>
                            ))}
                        </select>

                        <input 
                            name="nombre" 
                            value={formData.nombre}
                            onChange={handleChange}
                            required 
                            type="text" 
                            placeholder="Nombre Completo" 
                            className="h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100" 
                        />
                        <input 
                            name="telefono" 
                            value={formData.telefono}
                            onChange={handleChange}
                            required 
                            type="text" 
                            placeholder="Telefono" 
                            className="h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100" 
                        />
                        <input 
                            name="dni" 
                            value={formData.dni}
                            onChange={handleChange}
                            required 
                            type="text" 
                            placeholder="DNI" 
                            className="h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100" 
                        />

                        <button className="h-[45px] w-full rounded-[20px] px-[10px] bg-secondary text-white">
                            {loading ? (
                                <div className="flex-col gap-4 w-full flex items-center justify-center">
                                    <div className="w-8 h-8 border-8 text-4xl animate-spin border-white flex items-center justify-center border-t-fourth rounded-full" />
                                </div>
                            ) : "Enviar"}
                        </button>
                    </div>
                </form>
            </div>

            {success && (
                <div className="px-[20px] py-[10px] rounded-md w-full text-white bg-custom-gradient-global">
                    Perfecto, en un momento nos comunicaremos contigo, gracias.
                </div>
            )}
            
            {error && (
                <div className="w-full rounded-md text-white bg-red-500">
                    <p className="px-[20px] py-[10px]">Ocurrió un Error al enviar el formulario. Inténtelo nuevamente, por favor.</p>
                </div>
            )}
        </div>
    );
}

export default CoberturaForm;