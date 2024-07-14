type Props = {
    verifyCredentials:(username:string,password:string)=>void
}

export function Login({verifyCredentials}:Props) {


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
       e.preventDefault();
       const form = e.currentTarget;
       const name = form.username.value
       const password = form.password.value
       verifyCredentials(name, password)
    }

    return (

        <div className="w-full max-w-sm">
            <h1 className="text-4xl font-bold text-white text-center mb-16">
                Inicia Sesión
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
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