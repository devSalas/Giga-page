import AdminContent from "./AdminContent";
import { GlobalProvider, useAuth } from "./GlobalProvider";

function Admin() {


    return ( 
        <GlobalProvider>
            <AdminContent/>
        </GlobalProvider>
     );
}

export default Admin;