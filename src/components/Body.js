import Restro_card from "./restro_card";
import res_list from "../utils/mock_data"
import { useState } from "react";

const Body =() =>{
    const [listOfRestarount,setlistOfRestarount] = useState(res_list)
    return(
        <div className="body">
            <div className="filter">
               <button className="filter_btn" onClick={()=>{
                     const filter_list = listOfRestarount.filter((res) =>
                     res.info.avgRating > 4);
                     setlistOfRestarount(filter_list)
               }}>
                search</button>
                <button className="filter_btn" onClick={() => {
                    const filter_list =listOfRestarount.filter((res) => 
                        res.info.avgRating > 4.2
                    );
                    setlistOfRestarount(filter_list)
                    
                }}>
                    rating more than 4.5
                </button>
            
            </div>
            <div className="restro_container">
                {/* <Restro_card res_data = {res_list[0]}/> */}
                  {listOfRestarount.map(restaurent => <Restro_card res_data={restaurent}/>)}
                  
                  
            </div>
        </div>
    );
  };

  export default Body