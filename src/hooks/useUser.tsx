import { UserContext } from "../context/user";
import { useContext } from "react";

export const useUser = () =>{
    const user = useContext(UserContext);

    return user;
}