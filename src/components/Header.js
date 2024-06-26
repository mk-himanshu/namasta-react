import { useState ,useContext} from "react";
import { logo_url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Use_context from "../utils/User_context"
import User_context from "../utils/User_context";
// import Grocery from "./Grocery";

const Header = () =>{
    const [btn_name,setbtn_name] = useState("login")
    const online_status = useOnlineStatus();
    
    //use react context....
    const data = useContext(User_context)
    console.log(data);

        return(
        <div className="flex justify-between bg-pink-200 shadow-md ">
            <div className="logo_container">
                <img className="p-2 w-24" alt="image not found" src={logo_url}></img>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4">
                    <li>online status {online_status ?"✅":"❌"}</li>
                    <li className="px-3"><Link to="./">Home</Link></li>
                    <li className="px-3"><Link to="./grocery">Grocery</Link></li>
                    <li className="px-3"><Link to="./About">About</Link></li>
                    <li className="px-3"><Link to="./Contact">Contact Us</Link></li>
                    <li className="px-3">Cart</li>
                    <button className="log_btn px-2  bg-green-300 rounded-lg" onClick={() =>{
                        btn_name==="login" ? setbtn_name("logOut") : setbtn_name("login")
                    }}>
                        {btn_name}
                    </button>
                </ul>
            </div>
        </div>
    );
  };

  export default Header