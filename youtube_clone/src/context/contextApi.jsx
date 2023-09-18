import { createContext, useState, useEffect } from "react";
import {featchdatafromapi} from '../utils/api'

export const Context =  createContext();
export const AppContext = (props)=>{
 const [loading, setloading]=useState(false);
 const [searchResult,setsearchResults] = useState(false);
 const [selectCategories,setselectCategories] = useState("new");
 const [mobilemenu,setmobilemenu] = useState(false);

 useEffect(()=>{
    fetchselectedcategories(selectCategories);
 },[selectCategories]);

 const fetchselectedcategories= (query)=>{
    featchdatafromapi(`search/?q=${query}`).then((res)=>{
        console.log(res);
        // setsearchResults(res)
        setloading(false);
      })
 }
    return (<Context.Provider
    value={{loading, setloading,
        searchResult,setsearchResults,
        selectCategories,setselectCategories,
        mobilemenu,setmobilemenu}}
    >
        {props.children}
    </Context.Provider>)
}