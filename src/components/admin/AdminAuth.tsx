import { useEffect, useState } from "react";
import { CheckApi } from "../../api/CheckApi";

export default function AdminAuth({ children }:{children:React.ReactNode}) {
    const [isAuth, setIsAuth] = useState(false);
    const [loading,setLoading] = useState(false);
    const [err,setErr] = useState("");
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true)
                const res = await CheckApi(); // Asegúrate de importar o definir CheckApi
                console.log(res)
                if(!res) return window.location.href="/admin/login";
                setIsAuth(res)
            } catch (error) {
                console.error("Error checking API:", error);
                setIsAuth(false);
                setErr("Ocurrio un error al traer los datos desde el servidor")
            }finally{
                setLoading(false)
                
            }
        };

        getData();
    }, []);

    

    return (
        <div className="w-full min-h-screen ">
            {isAuth ? children : (loading ?<div>Cargando...</div> :<div>Ocurrio un Error</div>)}
        </div>
    );
}
