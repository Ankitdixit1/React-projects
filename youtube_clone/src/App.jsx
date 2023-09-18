import { useState, useEffect } from "react"
import { featchdatafromapi } from "./utils/api"
import { AppContext } from "./context/contextApi"
function App() {
  // useEffect( ()=>{
  //   apitesting();
  // },[]);
  // const apitesting=(query)=>{
  //   featchdatafromapi(`search/?q=${query}`).then((res)=>{
  //     console.log(res);
  //   })
  // }

  return (
    <>
    <AppContext><div>App</div></AppContext>
    <h1 className="text-red-700 text-5xl">
      Hello world!
    </h1>
    </>
  )
}

export default App
