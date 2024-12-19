import { urlbase } from "./base";

export async function CheckApi() {

    const token = localStorage.getItem("token") // Ajusta el nombre de la cookie según 

    if (!token) {
        return false
    }
    const response = await fetch(`${urlbase}/auth/verify-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const json = await response.json();
    return json




}
