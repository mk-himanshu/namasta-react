import Restro_card from "./restro_card";
import res_list from "../utils/mock_data"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body =() =>{
    const [listOfRestarount,setlistOfRestarount] = useState([]);
    const [search_text, setsearch_text] = useState("");
    const [filtered_restaurent,setfiltered_restaurent] = useState([]);

    useEffect(() =>{

        fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.251294610850675&lng=87.02275671064854&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
         setlistOfRestarount(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
         setfiltered_restaurent(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

        
    }

    //  conditional rendring
    if (listOfRestarount==0)
    {
        return <Shimmer/>
    }
    return (<div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search_text" value={search_text} onChange={(e) =>
                    {setsearch_text(e.target.value);
                    }}></input>

                    <button onClick={() =>{
                    console.log(search_text)
                    
                    const filtered_list = listOfRestarount.filter((res) =>
                    res.info.name.toLowerCase().includes(search_text.toLowerCase()));
                    setfiltered_restaurent(filtered_list)
                    }}>
                        search
                    </button>

                </div>
               <button className="filter_btn" onClick={()=>{
                     const filter_list = listOfRestarount.filter((res) =>
                     res.info.avgRating > 4);
                     setfiltered_restaurent(filter_list)
               }}>
                rating more than 4</button>
                <button className="filter_btn" onClick={() => {
                    const filter_list =listOfRestarount.filter((res) => 
                        res.info.avgRating > 4.2
                    );
                    setfiltered_restaurent(filter_list)
                    
                }}>
                    rating more than 4.5
                </button>
            
            </div>
            <div className="restro_container">
                {/* <Restro_card res_data = {res_list[0]}/> */}
                  {filtered_restaurent.map(restaurent => <Link to={"/retaurents/"+restaurent.info.id} className="link" ><Restro_card  res_data={restaurent}/></Link>)}
                  
                  
            </div>
        </div>
    );
  };

  export default Body