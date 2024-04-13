import Menu_item from "./Menu_item"
import { useState } from "react"

const Res_containt = (props)=>{
  
    const [accordian ,Set_accordian] = useState(false)
    const clicked = () =>{
           console.log("clicled")
           Set_accordian(!accordian);
    }
    
    return(
       <div className="my-10">
        <div onClick={(clicked)} className="my-2 p-3 border border-solid border-black rounded-lg  m-auto shadow-md transition-shadow shadow-gray-500  w-[60%]">
        <div className=" flex  justify-between">
            <h1 className="font-bold">Recommended (4)</h1>
            <h1>⬇️</h1>    
        </div>
        <div>
        {accordian ? <Menu_item/> : ""}
        </div>
        </div>

        <div onClick={(clicked)} className=" p-3 my-2 border border-solid border-black rounded-lg  m-auto shadow-md transition-shadow shadow-gray-500  w-[60%]">
        <div className=" flex  justify-between">
            <h1 className="font-bold">Thali (7)</h1>
            <h1>⬇️</h1>    
        </div>
        <div>
        {accordian ? <Menu_item/> : ""}
        </div>
        </div>
        <div onClick={(clicked)} className=" p-3 border border-solid border-black rounded-lg  m-auto shadow-md transition-shadow shadow-gray-500  w-[60%]">
        <div className=" flex  justify-between">
            <h1 className="font-bold">Rice (3)</h1>
            <h1>⬇️</h1>    
        </div>
        <div>
        {accordian ? <Menu_item/> : ""}
        </div>
        </div>
        <div onClick={(clicked)} className=" p-3 my-2 border border-solid border-black rounded-lg  m-auto shadow-md transition-shadow shadow-gray-500  w-[60%]">
        <div className=" flex  justify-between">
            <h1 className="font-bold">Sweets (18)</h1>
            <h1>⬇️</h1>    
        </div>
        <div>
        {accordian ? <Menu_item/> : ""}
        </div>
        </div>
        <div onClick={(clicked)} className=" p-3 my-2 border border-solid border-black rounded-lg  m-auto shadow-md transition-shadow shadow-gray-500  w-[60%]">
        <div className=" flex  justify-between">
            <h1 className="font-bold">Panner (23)</h1>
            <h1>⬇️</h1>    
        </div>
        <div>
        {accordian ? <Menu_item/> : ""}
        </div>
        </div>
        <div onClick={(clicked)} className=" p-3 my-2 border border-solid border-black rounded-lg  m-auto shadow-md transition-shadow shadow-gray-500  w-[60%]">
        <div className=" flex  justify-between">
            <h1 className="font-bold">Roti(4)</h1>
            <h1>⬇️</h1>    
        </div>
        <div>
        {accordian && <Menu_item/> }
        </div>
        </div>
       </div> 
    )
}
export default Res_containt



