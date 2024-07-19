import { useState } from "react";
import { Login } from "./login";
import { TableClient } from "./TableClient";


type PropData = {
    status: string;
    titles: string[];
    data: Array<[string, number, string, string]>;
}


export function PanelMain() {

    const [data, setData] = useState< PropData | null >(null);
    const [showTable, setShowTable] = useState(false);


    function verifyCredentials(username: string, password: string) {
        async function getData() {
            try {
                const res = await fetch("https://gigamas.com.pe/downloadexcel/sendData.php", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({ username, password })
                });

                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                setShowTable(true)
                const result = await res.json();
                setData(result)
                console.log(result);



            } catch (error) {

            } finally {




            }
        }

        getData();
    }

    return (
        <div className="w-full min-h-screen bg-secondary p-8 flex justify-center items-center">
            {!showTable && <Login verifyCredentials={verifyCredentials} />}
            {
                showTable && data && <TableClient data={data} />

            }

        </div>
    )
}