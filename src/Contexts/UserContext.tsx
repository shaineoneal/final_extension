import { createContext } from "react"; 
import { UserStateType } from "../types/user";

export const UserContext = createContext<UserStateType>({
    user: {
        email: null,
        authToken: null,
        sheetURL: null
    },
    setUser: () => {}
});

