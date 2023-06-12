import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { IconContext } from "react-icons";  
import { BsFillGearFill } from "react-icons/bs";
import Login, { awaitLoginStatus, Testing } from './components/Login';
import { UserType } from "./types/user";
import "./styles/popup.css";

const Popup = () => {
    
    useEffect(() => {
        console.log("popup");
        console.log("login status: ", awaitLoginStatus());
    }, []);

    return (
        <>
            <header>
                <div className="flex-container">
                    <div className="logo">
                        <img src="icons/icon-32.png" alt="extension-icon"/>
                    </div>
                    <div className="title">AO3E: Rewritten</div>
                    <IconContext.Provider value={{ className: "settings-icon" }}>
                        <a href="options.html">
                            <BsFillGearFill />
                        </a>
                    </IconContext.Provider>
            
                </div>
            </header>
            <main>
                {<Login />}
                {<Testing />}
            </main>
        </>
    );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
