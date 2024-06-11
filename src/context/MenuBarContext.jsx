import { createContext,useState } from "react";

export const MenuBarContext=createContext();

export const MenuaBarToggleProvider=({children})=>{
    const [isMobileNavOpen,setIsMobileNavOpen]=useState(false);
    const toggle=()=>{
        setIsMobileNavOpen(!isMobileNavOpen)
    }
    return(
<MenuBarContext.Provider value={{isMobileNavOpen,toggle}}>
    {children}
</MenuBarContext.Provider>
    )
}