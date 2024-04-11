import Restro_card ,{with_veg_label} from "./restro_card";
import res_list from "../utils/mock_data"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =() =>{
    const [listOfRestarount,setlistOfRestarount] = useState([]);
    const [search_text, setsearch_text] = useState("");
    const [filtered_restaurent,setfiltered_restaurent] = useState([]);
    console.log(listOfRestarount)
    const Restro_veg_label = with_veg_label(Restro_card);

    useEffect(() =>{

        fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.251294610850675&lng=87.02275671064854&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        console.log(listOfRestarount)
         setlistOfRestarount(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
         setfiltered_restaurent(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

        
    }
    const online_status =useOnlineStatus();
    if (online_status===false) return (
        <div>
            <h1>your connection is interupted</h1>
            <h2>check your internet connection..............</h2>
        </div>
        
    )

    //  conditional rendring
    if (listOfRestarount==0)
    {
        return <Shimmer/>
    }
    
    
    return (<div className="body">
            <div className="filter flex">
                <div className="search m-2 p-2">
                    <input type="text" placeholder="Restaurent" className="border border-solid border-black" value={search_text} onChange={(e) =>
                    {setsearch_text(e.target.value);
                    }}></input>

                    <button className="px-4  m-2 bg-green-500 rounded-md" onClick={() =>{
                    console.log(search_text)
                    
                    const filtered_list = listOfRestarount.filter((res) =>
                    res.info.name.toLowerCase().includes(search_text.toLowerCase()));
                    setfiltered_restaurent(filtered_list)
                    }}>
                        search
                    </button>

                </div>
               <div className="search m-2 p-2 flex justify-center">
               <button className="px-4 m-2 bg-gray-300 rounded-md" onClick={()=>{
                     const filter_list = listOfRestarount.filter((res) =>
                     res.info.avgRating > 4);
                     setfiltered_restaurent(filter_list)
               }}>
                rating more than 4</button>
                <button className="px-4 m-2 bg-gray-300 rounded-md" onClick={() => {
                    const filter_list =listOfRestarount.filter((res) => 
                        res.info.avgRating > 4.2
                    );
                    setfiltered_restaurent(filter_list)
                    
                }}>
                    rating more than 4.5
                </button>
               </div>
            
            </div>
            <div className="restro_container ">
                {/* <Restro_card res_data = {res_list[0]}/> */}
                {/* if restraunt is open than label open label to the card  */}
                  {filtered_restaurent.map(restaurent => 
                  <Link to={"/retaurents/"+restaurent.info.id} className="link" >
                    {
                        restaurent.info.veg ? <Restro_veg_label res_data={restaurent}/> : <Restro_card  res_data={restaurent}/>
                    }
                  </Link>)}
                  
                  
            </div>
        </div>
    );
  };

  export default Body