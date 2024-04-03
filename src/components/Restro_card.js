import { cdn_link } from "../utils/constants";


 const Restro_card = (props) =>{
    const {res_data} = props;
      return(
          <div className="res_card">
              <img className="res_logo" src={cdn_link+res_data.info.cloudinaryImageId}></img>
              <h4>{res_data.info.name} </h4>
              <h4>{res_data.info.cuisines.join(",")}</h4>
              <h4>{res_data.info.costForTwo}</h4>
              <h4>{res_data.info.avgRating}</h4>
  
          </div>
      );
  };

  export default Restro_card