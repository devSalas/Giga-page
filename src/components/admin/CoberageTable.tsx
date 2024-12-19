import { useEffect, useState } from "react";
import { urlbase, urlDeletePotentialClient } from "../../api/base";

interface PotentialClientState {
    id?: string;
    nombre?: string;
    dni?: string;
    telefono?: string;
    servicio?: string;
    distrito?: string;
    provincia?: string;
    correo?: string;
    mensaje?: string;
    fecha?:string;
    fechaLima?:string;
}


function CoberageTable() {
    const [potentialsClients, setPotentialsClients] = useState<PotentialClientState[]>([])
    const [refresh, setRefresh] = useState(false)
    const [message, setMessage] = useState(false)
    const [err, setErr] = useState("")
    useEffect(() => {
        const getData = async () => {
            try {
                const token = localStorage.getItem("token"); // Obtener el token desde localStorage
                const res = await fetch(`${urlbase}/users`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept":"application/json",
                        Authorization: `Bearer ${token}`
                    },
                });
                console.log(res)
                if (!res.ok) return setErr("ocurrio un error al solicitar los datos")

                const json = await res.json();
                const reservedData = json.data.reverse()
                console.log(reservedData)
                setPotentialsClients(reservedData)

            } catch (error) {
                setErr("ocurrio un error al solicitar los datos")

                console.log("Error al obtener datos:"); // Manejo de errores
            }
        };

        getData();
    }, [refresh]);

    const handleRefresh = () => setRefresh(!refresh)


    const deleteData = async (id: string) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                return
            }
            console.log(id, token)
            const res = await fetch(`${urlDeletePotentialClient}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            });

            if (!res.ok) {
                throw new Error();
            }

            const json = await res.json();
            console.log({ json })
            if (json.status === "success") {
                setPotentialsClients(potentialsClients.filter(item => item.id != id))
            }
        } catch (error) {
            alert("Error al eliminar el cliente")

        }
    };

    function handleClickDelete(id: string): void {
        deleteData(id);
    }


    return (
        <div className="flex flex-col gap-[10px]">
            {!err && <div>{err}</div>}
            <div className="px-[10px] py-[5px]">
                <div onClick={handleRefresh} className="w-8 h-8 border-[1px] border-slate-300 flex justify-center items-center rounded-lg hover:bg-secondary cursor-pointer">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="black" d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.7 6.7 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95S18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0" /></svg>
                </div>
            </div>
            <div className="max-w-7xl overflow-x-auto w-full" >
                <table className="text-left w-full rounded-2xl    border-[2px]   overflow-hidden">
                    <thead className=" flex  w-full border-[1px] rounded-2xl border-slate-300 rounded-b-none">
                        <tr className="flex w-full ">
                            <th className="p-4 w-[40px] ">id</th>
                            <th className="p-4 w-[150px]">nombre</th>
                            <th className="p-4 w-[150px]">dni</th>
                            <th className="p-4 w-[150px]">telefono</th>
                            <th className="p-4 w-[150px]">servicio</th>
                            <th className="p-4 w-[150px]">distrito</th>
                            <th className="p-4 w-[150px]">provincia</th>
                            <th className="p-4 w-[150px]">correo</th>
                            <th className="p-4 w-[150px]">mensaje</th>
                            <th className="p-4 w-[150px]">fecha</th>
                            <th className="p-4 w-[150px]">eliminar</th>
                        </tr>
                    </thead>

                    <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-auto w-full  border-[1px] rounded-2xl rounded-t-[0px] border-t-0 border-slate-300 max-h-[500px] max-w-full overflow-x-auto   " >
                        {
                            potentialsClients.map((item, index,arr) => (
                                <tr key={index} className="flex w-full  ">
                                    <td className="px-4 py-2 w-[60px] break-words border-[1px] border-slate-300">{arr.length-index}</td>
                                    <td className="px-4 py-2 w-[150px] break-words border-[1px] border-slate-300">{item.nombre}</td>
                                    <td className="px-4 py-2 w-[150px] break-words border-[1px] border-slate-300">{item.dni}</td>
                                    <td className="px-4 py-2 w-[150px] break-words border-[1px] border-slate-300">{item.telefono}</td>
                                    <td className="px-4 py-2 w-[150px] break-words border-[1px] border-slate-300">{item.servicio}</td>
                                    <td className="px-4 py-2 w-[150px] break-words border-[1px] border-slate-300">{item.distrito}</td>
                                    <td className="px-4 py-2 w-[150px] break-words border-[1px] border-slate-300">{item.provincia}</td>
                                    <td className="px-4 py-2 w-[150px] break-words border-[1px] border-slate-300">{item.correo}</td>
                                    <td className="px-4 py-2 w-[150px]  break-words border-[1px] border-slate-300">{item.mensaje}</td>
                                    <td className="px-4 py-2 w-[150px]  break-words border-[1px] border-slate-300">{item.fechaLima}</td>
                                    <td className="px-4 py-2 w-[200px] break-words border-[1px] border-slate-300 flex justify-center items-center"><svg onClick={() => handleClickDelete(item.id!)} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 cursor-pointer " viewBox="0 0 24 24"><path fill="red" d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" /><path fill="red" d="M9 10h2v8H9zm4 0h2v8h-2z" /></svg></td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CoberageTable;