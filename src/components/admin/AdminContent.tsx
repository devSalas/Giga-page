import { useAuth } from "./GlobalProvider";
import Dashboard from "./page/Dashboard";

function AdminContent() {
    const {isAuth,user,loading } = useAuth()
    
    if(loading ) return <div>Cargando...</div>
    


    return ( 
        <div>
            {
                isAuth ? <Dashboard/> : ""
            }
        </div>
     );
}

export default AdminContent;