import { createContext, useState, useEffect } from "react";
import {featchdatafromapi} from '../utils/api'

export const Context =  createContext();
export const AppContext = ()=>{
 const [loading, setloading]=useState(false);
 const [searchResult,setsearchResults] = useState(false);
 const [selectCategories,setselectCategories] = useState("new");
 const [mobilemenu,setmobilemenu] = useState(false);

 useEffect(()=>{

 },[])

 const fetchselectedcategories= (query)=>{
    featchdatafromapi(`search/?q=${query}`).then((res)=>{
        console.log(res);
        // setsearchResults(res)
        setloading(false);
      })
 }
    return 
}