import { useState, useEffect } from "react"
import { featchdatafromapi } from "./utils/api"

function App() {
  useEffect( ()=>{
    apitesting();
  },[]);
  const apitesting=(query)=>{
    featchdatafromapi(`search/?q=${query}`).then((res)=>{
      console.log(res);
    })
  }

  return (
    <>
    <h1 className="text-red-700 text-5xl">
      Hello world!
    </h1>
    </>
  )
}

export default App
