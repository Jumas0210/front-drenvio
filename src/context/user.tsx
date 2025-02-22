import { createContext, ReactNode } from "react";

interface Props {
    userID : number
}

export const UserContext = createContext<Props>({ userID : 0  });

interface UserProviderProps {
    children: ReactNode;
  }

  export const UserProvider: React.FC<UserProviderProps> = ({ children }) =>{
    
    const userID = 2; // se simula un id de un usuario

    return(
        <UserContext.Provider
            value={{
                userID
            }}
        >
            {children}
        </UserContext.Provider>
    );
}