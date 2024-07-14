import { useEffect, useState } from "react"

type Props = {
    data: {
        status: string;
        titles: string[];
        data: Array<[string, number, string, string]>;
    }
}



export function TableClient({ data }: Props) {



    if (!data.status) return (<div>Cargando..</div>)

    return (

        <div>
            <h1 className="text-2xl font-semibold text-center mb-8 text-white">Clientes Potenciales</h1>
            <table className=" table-auto w-full rounded-md max-w-xl border-2 border-fourth/30">
            <thead>
                <tr className="">
                    {data.titles.map((title, index) => (<td className=" p-2 bg-white " key={title + index}>{title}</td>))}
                </tr>
            </thead>
            <tbody>
                {data.data.map((client, index) => (<tr key={index} className="border-b-2 border-b-fourth/30">
                    <td className="p-2 ">{client[0]}</td>
                    <td className="p-2 ">{client[1]}</td>
                    <td className="p-2 ">{client[2]}</td>
                    <td className="p-2 ">{client[3]}</td>

                </tr>))}
            </tbody>
        </table>
        </div>
    )
}