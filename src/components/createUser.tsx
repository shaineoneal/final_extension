import { UserContext } from '../contexts/UserContext';
import { useUser } from '../useUser';
import { getSyncValue, setSyncValue } from '../useSyncStorage';

export const getAuthTokenFromGapi = async() => {

    const { changeUser } = useUser();


    console.log("getAuthToken");
    try {
        chrome.identity.getAuthToken({ interactive: true }, (response) => {
            console.log("token", response);
            changeUser( "authToken", response );
            //console.log("user context: ", user);
        });
    } catch (error) {
        console.log("error in getAuthToken", error);
        chrome.identity.clearAllCachedAuthTokens(() => {
            console.log("Cleared all cached");
        });
    }

    const token = getSyncValue("authToken");

    return token;
}

export async function getEmailFromGapi(): Promise<string | null> {

    const { changeUser } = useUser();

    console.log("getEmail");
    try {
        chrome.identity.getProfileUserInfo((response) => {
            console.log("user email: ", response.email);
            changeUser("email", response.email);
            return response.email;
        })

    } catch (error) {
        console.log("error in getEmail", error);
        
    }
    return null;
}

export async function getFromSync(key: string): Promise<string | null> {
    const value: string | null = await getSyncValue(key);
    return value;
}