import { 
    createContext, 
    ReactNode, 
    useContext, 
    useEffect,
    useState
} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext('visitor');

// fill this out later
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    return (
        <AuthContext.Provider value="">
            {children}
        </AuthContext.Provider>
    )
}