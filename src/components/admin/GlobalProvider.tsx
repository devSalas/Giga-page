// src/context/GlobalContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { CheckApi } from '../../api/CheckApi';

// Definición del tipo para el contexto
interface GlobalContextType {
    user: any; // Puedes definir el tipo de 'user' según lo que esperas recibir de tu API
    isAuth: boolean;
    loading: boolean;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null); // Ejemplo de variable global
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const res = await CheckApi(); 
                
                if(!res) {
                    console.log("entro al error ")
                    window.location.href="/admin/login"
                    return;
                }
                setIsAuth(res!); 
                
                if (res) {
                    setUser(res); 
                }
            } catch (error) {
                console.error("Error checking API:", error);
                setIsAuth(false);
            }finally{
                setLoading(false)
            }
        };

        getData();
    }, []);

    return (
        <GlobalContext.Provider value={{ user, isAuth, loading }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Hook personalizado para acceder al contexto
export const useAuth = (): GlobalContextType => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useAuth must be used within a GlobalProvider');
    }
    return context;
};
