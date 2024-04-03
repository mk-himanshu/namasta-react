import { logo_url } from "../utils/constants";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo_container">
                <img className="logo" alt="image not found" src={logo_url}></img>
            </div>
            <div className="nav_item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
  };

  export default Header