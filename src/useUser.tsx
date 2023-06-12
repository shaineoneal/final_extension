import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';
import { UserType } from './types/user';

/** allows access to the current user and login function
 * 
 * @returns {UserType} the current user
 */
export function useUser() {
    const { user, setUser } = useContext(UserContext);

    const login = (user: UserType) => {
        console.log("login");
        setUser(user);
    }

    const logout = () => {
        console.log("logout");
        setUser(null);
    }

    const changeUser = (key: string, value: string) => {
        console.log("change user");
        //make a copy of the user
        const newUser = user;
        if ((key === "email" || key === "authToken" || key === "sheetURL") && newUser) {
            newUser[key] = value;
            setUser(newUser);
            console.log ("updated user: ", newUser);
        }
    }
    return { user, login, logout, changeUser };
}


/*export const useUser = () => {

    console.log("use user");

    console.log("creating user context");
    const { user, saveUser } = useContext(UserContext);

    const addUser = (user: UserType) => {
        console.log("add user; email: ", user?.email);
        saveUser(user);
        chrome.storage.local.set({ user });
    };

    const removeUser = () => {
        saveUser(null);
        chrome.storage.local.remove("user");
    };

    return { user, addUser, removeUser};
}

/**
 * 
 * @returns {boolean} Whether the user is logged in or not
 

export const checkLocal = () => {

    const user = chrome.storage.local.get("user")
    if (user) {
        return user;
    } else {
        return null;
    }
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    console.log("user");
    const [user, saveUser] = useState<UserType | null>(null);

    return (
        <UserContext.Provider value={{ user, saveUser }}>
            {children}
        </UserContext.Provider>
    );
} 

export default UserProvider;*/