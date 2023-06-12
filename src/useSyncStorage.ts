import { useState } from 'react';

/*export function useSyncStorage() {
    const [value, setValue] = useState<string>("");

    const setItem = ( key: string, value: string) => {
        setValue(value);
        chrome.storage.sync.set({ key, value });
        
        console.log("Value is set to " + value);
    };

    async function getItem(key: string) {
        chrome.storage.sync.get([key], function (result) {
            console.log("Value currently is " + result.key);
            setValue(result.key);
        });
        return value;
    };

    const removeItem = (key: string) => {
        chrome.storage.sync.remove([key]);
        setValue("");
    };

    return { value, setItem, getItem, removeItem };
    
};*/

export const setSyncValue = async(key: string, value: string): Promise<void> => {
    console.log("setSyncValue");

    try {
        chrome.storage.sync.set({ key: value });
    } catch (error) {
        console.log("error in setAuthToken", error);
    }
}

export function getSyncValue(key: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.get([key], function (result) {
                console.log("result", result);
                resolve(result.key);
            });
        } catch (error) {
            console.log("error in getAuthToken", error);
            reject(error);
        }
    });
}
