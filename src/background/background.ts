import { URLContext } from "../contexts/URLContext";
import { createContext, useState, useContext } from "react";
//import  userLogin from "../components/Login";
//import { useUser } from "../useUser";
import { fetchToken } from "./fetchToken";


chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ isLoggedIn: false });
});

//checks if user is logged in

fetchToken(true).then((token) => {
    console.log("Token: ", token);
    chrome.storage.sync.set({ isLoggedIn: true });
}).catch((error) => {
    console.log("Error: ", error);
});

chrome.storage.onChanged.addListener(() => {
    fetchToken(true).then((token) => {
        console.log("Token: ", token);
        chrome.storage.sync.set({ isLoggedIn: true });
    }).catch((error) => {
        console.log("Error: ", error);
    });
});    


/*
chrome.runtime.onMessage.addListener(async function (buttonClicked, sender, sendResponse) {
    console.log(buttonClicked.reason);
    if (buttonClicked.reason === "login") {
        console.log("login heard");
        try {
            await userLogin();
            console.log("Authentication successful");
            sendResponse({ success: true });
        } catch (error) {
            console.log("Authentication failed: ", error);
            sendResponse({ success: false, error: error });
        }
        return true; // Return true to indicate that sendResponse will be used asynchronously
      } else if (buttonClicked.reason === "logout") {
        try {
            chrome.identity.removeCachedAuthToken({ token: buttonClicked.reason}, () => {
                fetch(
                    "https://accounts.google.com/o/oauth2/revoke?token=" + buttonClicked.token,
                    { method: "GET" }
                ).then((response) => {
                    console.log("logout response", response);
                });
            });
            chrome.storage.sync.set({ isLoggedIn: false });
            sendResponse({ success: true });
        } catch (error) {
            console.log("Error in logout:", error);
            sendResponse({ success: false, error: error });
        }
        return true; // Return true to indicate that sendResponse will be used asynchronously
      }
    });

chrome.storage.onChanged.addListener(function (changes, namespace) {
    console.log("storage changed");
    //const loginStatus = getLoginStatus();
    for (const key in changes) {
        const storageChange = changes[key];
        console.log(storageChange);
    }
});
*/