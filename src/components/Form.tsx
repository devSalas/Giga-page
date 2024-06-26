export default function Form() {


    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const tel = e.target.tel.value
        const service = e.target.service.value
        console.log(name,tel,service)

        const data = {
            name,
            tel,
            service
        }

        async function getData() {
            try {
                const res = await fetch("http://localhost/downloadexcel/index.php", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(data)
                });
        
                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
        
                const result = await res.json();
                console.log(result);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        }
        
        // Llamada a la función
        getData();
        


    }




    return (
        <form onSubmit={handleSubmit} className="w-full bg-form p-4 py-16 mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">
                <span className="text-csecondary">Dejanos Tu Información,</span>
                <br /><span className="text-cprimary"> te Contactaremos.</span>
            </h2>
            <div className="flex gap-4 flex-wrap justify-center mb-8">
                <input
                    type="text"
                    className="w-36 h-8 md:w-56 md:h-12 bg-primary rounded-full px-4"
                    placeholder="nombre"
                    name="name"
                    required
                />
                <input
                    type="text"
                    className="w-36 h-8 md:w-56 md:h-12 bg-primary rounded-full px-4"
                    placeholder="telefono"
                    name="tel"
                    required
                />
                <select  name="service" className="w-36 h-8 md:w-56 md:h-12 rounded-full px-4" required >
                    <option value="internet">Internet</option>
                    <option value="cable">Cable TV</option>
                    <option value="internet_cable">Internet + cable</option> px-4
                    <option value="cámaras">Cámaras</option>
                </select>
            </div>
            <div className="flex justify-center my-4">
                <button
                 type="submit"
                    className="bg-secondary px-16 py-2 md:w-56 md:h-12 rounded-full text-white"
                >
                    Enviar
                </button>
            </div>
        </form>
    )
}