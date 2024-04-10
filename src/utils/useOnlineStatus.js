import { useState,useEffect } from "react"

const useOnlineStatus = () =>{
    const [online_status,setOnline_status] = useState(true);
    useEffect(()=>{
        window.addEventListener("online", ()=>{
            setOnline_status(true)
        })
        window.addEventListener("offline",()=>{
            setOnline_status(false)
        })
    })
    return online_status
}
export default useOnlineStatus