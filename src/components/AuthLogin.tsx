import { useEffect, useState } from "react";
import { urlbase } from "../api/base";


export function AuthLogin() {
    const [err,setErr] = useState("")


    useEffect(()=>{
        const ErrorHidden = setTimeout(()=>{
            setErr("")
        },3000)
    },[err])

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const username = form.username.value
        const password = form.password.value
            
        const ValidateUser = async () => {
            try {
                const res = await fetch(`${urlbase}/auth/login`, { method: "POST", body: JSON.stringify({ username, password }), headers: {"Content-Type": "application/json" } })
                const json = await res.json();
                console.log(res, json)

                if (!res.ok) {
                  
                }
                if (!json.token) return alert("Datos incorrectos.")
                localStorage.setItem("token", json.token)
                window.location.href = "/admin/dashboard";

                setErr("")

            } catch (error) {
                setErr("Ocurrio un error al enviar el formluario")
            }
        }
        ValidateUser()
    }

    return (

        <div className="w-full max-w-sm">
          
            {err && <p className="absolute right-4 bottom-4 bg-red-400 text-white rounded-lg px-4 py-4">{err}</p> }

            <h1 className="text-4xl font-bold text-white text-center mb-16">
                Inicia Sesión
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 px-[16px]">
                <div>
                    <label htmlFor="" className="block text-xl text-slate-300 mb-4"
                    >Usuario</label>
                    <input
                        type="text"
                        name="username"
                        className="rounded-md h-12 w-full p-2 bg-slate-200"

                        placeholder="jose"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="" className="block text-xl text-slate-300 mb-4"
                    >Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        className="rounded-md h-12 w-full p-2 bg-slate-200"

                        placeholder="*******"
                        required
                    />
                </div>
                <button

                    className="rounded-md h-12 w-full p-2 bg-fourth text-primary font-medium hover:scale-105 transition-transform duration-100"
                >Enviar</button>
            </form>
        </div>

    )
}