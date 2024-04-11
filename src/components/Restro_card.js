import { cdn_link } from "../utils/constants";


 const Restro_card = (props) =>{
    const {res_data} = props;
      return(
          <div className="res_card ">
              <img className="res_logo rounded-lg" src={cdn_link+res_data.info.cloudinaryImageId}></img>
              <h4 className="font-bold py-2">{res_data.info.name} </h4>
              <h4>{res_data.info.cuisines.join(",")}</h4>
              <h4>{res_data.info.costForTwo}</h4>
              <h4>{res_data.info.avgRating}</h4>
  
          </div>
      );
  };

  // higer order component 

  //input res_card => output open_res_card
  export const with_veg_label = () =>{
    return (props) =>{
        return(
            <div>
                <label className="absolute bg-black  text-white m-2 p-2 rounded-md">Pure Veg 🟩</label>
                <Restro_card {...props}/>
            </div>
        )
    }
  }

  export default Restro_card


  // data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(restaurant => restaurant.info