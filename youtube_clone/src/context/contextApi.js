import { useEffect, useState, createContext } from "react";
import {featchdatafromapi} from "../utils/api"

export const Context = createContext();
export const AppContext = (props)=>{
    const [loading, setloading] = useState(false);
    const [searchresult, setsearchresult] = useState(false);
    const [selectcatogry, setselectcatogry] = useState(false);
    const [mobilemenu, setmobilemenu] = useState(false);
      
    useEffect(()=>{}); 

    return (
        <Context.Provider
        value={{loading, setloading,
            searchresult, setsearchresult,
            selectcatogry, setselectcatogry,
            mobilemenu, setmobilemenu}}
        >{props.children}</Context.Provider>
    );
};