import { useState,useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import Res_containt from "./Res_containt";


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
        <div className="menu ">
             <div className="m-auto p-4 flex">
             <h1 className="font-bold m-auto text-2xl">{res_info?.name}</h1>
             
             {/* <h4>{res_info?.cuisines?.join(",")}</h4>
              <h4>{res_info?.costForTwo}</h4>
              <h4>{res_info?.avgRating}</h4>
             <ul>
                {item_card?.map((menu) =>(
                    <li>{menu?.info?.cuisines}</li>
                ))}
                
             </ul> */}
             </div>
             <div className="border border-solid border-black rounded-3xl  m-auto shadow-2xl transition-shadow shadow-gray-500 border w-[60%]">
               <h1  className="px-4 m-4 ">⭐{res_info?.avgRatingString +"  " +"Rating  "+ (res_info?.totalRatingsString) + " < --- >   "+ res_info?.costForTwo}</h1>
               <h1 className="px-4 m-4 text-red-500">{res_info?.cuisines.join(" ,")}</h1>
               <h2 className="px-4 m-4">Outlet:-- {res_info?.areaName + " ," + res_info?.locality}</h2>
               <h2 className="px-20  m-4  border-b-2 border-spacing-3">{res_info?.sla?.slaString}</h2>
               
               <p className=" p-2 m-2">Order above 149 for discounted delivary fee</p>

             </div>
             <Res_containt res_data={res_info} />
        </div>
    )
}
export default Restr_menu