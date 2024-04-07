import { useState,useEffect } from "react"
import { useSearchParams } from "react-router-dom";


const Restr_menu = () =>{
    const params = useSearchParams()
    console.log(params +"himanshu");
    const [res_info,set_res_info] = useState(null);
    const [item_card,set_item_card] = useState(null);
    useEffect(() =>{
        fetch_menu()
    },[]);
    const fetch_menu =async () =>{
          const menu = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.251294610850675&lng=87.02275671064854&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
          const json = await menu.json()
          console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1].info)
          set_res_info(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]?.info);
          set_item_card(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    

    return(
        <div className="menu">
             <h1>{res_info?.name}</h1>
             <h4>{res_info?.cuisines?.join(",")}</h4>
              <h4>{res_info?.costForTwo}</h4>
              <h4>{res_info?.avgRating}</h4>
             <ul>
                {item_card?.map((menu) =>(
                    <li>{menu?.info?.cuisines}</li>
                ))}
                
             </ul>
        </div>
    )
}
export default Restr_menu