import { useAuth } from "./GlobalProvider";

function NavbarAdmin() {

    
   const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();

}


    return (<div className="flex justify-between px-[10px] py-[20px]">
        <h1 className="font-bold">Dashboard</h1>
        <button onClick={logout} className="bg-secondary px-5 py-1 rounded-lg text-white">Salir</button>
    </div>);
}

export default NavbarAdmin;