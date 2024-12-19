// AuthProvider.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
// Crea un contexto para la autenticación
const AuthContext = createContext<{ isAuthenticated: boolean; setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> }>({ isAuthenticated: false, setIsAuthenticated: () => {} });

// Componente que provee el estado de autenticación a la aplicación
interface AuthProviderProps {
  children: ReactNode;  // Tipando correctamente 'children' como ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Lógica para obtener el token desde las cookies o localStorage
    const token = localStorage.getItem('auth-token') || document.cookie.replace(/(?:(?:^|.*;\s*)auth-token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acceder al contexto de autenticación
export const useAuth = () => useContext(AuthContext);
