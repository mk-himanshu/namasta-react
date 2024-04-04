import Restro_card from "./restro_card";
import res_list from "../utils/mock_data"
import { useEffect, useState } from "react";

const Body =() =>{
    const [listOfRestarount,setlistOfRestarount] = useState(res_list)

    useEffect(() =>{

        fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.330137986438935&lng=77.32995238155127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(restaurant => restaurant.info.cloudinaryImageId));
         setlistOfRestarount(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(restaurant => restaurant.info))
        
    }
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