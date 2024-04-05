import { useState } from "react";
import { logo_url } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    const [btn_name,setbtn_name] = useState("login")
        return(
        <div className="header">
            <div className="logo_container">
                <img className="logo" alt="image not found" src={logo_url}></img>
            </div>
            <div className="nav_item">
                <ul>
                    <li><Link to="./">Home</Link></li>
                    <li><Link to="./About">About</Link></li>
                    <li><Link to="./Contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="log_btn" onClick={() =>{
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