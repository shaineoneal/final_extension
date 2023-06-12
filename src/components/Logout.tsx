import React from "react";
import { useUser } from "../useUser";
import { getAuthTokenFromGapi } from "./createUser";

const Logout = () => {
    const { user, logout } = useUser();

    const token = user?.authToken;

    const handleLogout = () => {

        if(token){
            removeAuthToken(token).then(() =>{
            logout();});
        }
        console.log("logout: ", useUser().user);
    };

    return (
        <div>
            <button onClick={handleLogout} disabled={!useUser().user}>
                {!useUser().user ? "Logged Out!" : "Logout"}
            </button>
        </div>
    );
}

const removeAuthToken = async (token: string) => {

    console.log("token", token);

    try {
        chrome.identity.removeCachedAuthToken( {token}, () => {
            console.log("Removed auth token");
        });
    }
    catch (error) {
        console.log("error removing auth token", error);
    }
}

export default Logout;