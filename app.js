import React from "react"
import ReactDOM from "react-dom/client"

const Header = () =>{
    return(
        <div className="header">
            <div className="logo_container">
                <img className="logo" alt="image not found" src="https://img.freepik.com/free-vector/hand-drawn-pizzeria-vintage-logo_23-2150174657.jpg?w=740&t=st=1711889429~exp=1711890029~hmac=a0d1f6f72118ee1a2b5c5e80c7887acf9d316ee3ee23617adb26e5418b87a213"></img>
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

const Restro_card = () =>{
    return(
        <div className="res_card">
            <img className="res_logo" src="https://myfoodstory.com/wp-content/uploads/2022/04/Shahi-Paneer-2.jpg"></img>
            <h4>food villa </h4>
            <h4>panner, veg, non-ved</h4>
            <h4>4.4 star</h4>
            <h4>38 min</h4>

        </div>
    )
}
const Body =() =>{
    return(
        <div className="body">
            <div className="search">
               <h1>search</h1>
            </div>
            <div className="restro_container">
                  <Restro_card/>
                  <Restro_card/>
                  <Restro_card/>
                  <Restro_card/>
                  <Restro_card/>
                  <Restro_card/>
                  <Restro_card/>
                  <Restro_card/>
                  <Restro_card/>
                  <Restro_card/>
            </div>
        </div>
    );
};


const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

















// const parent = React.createElement("div",{id:"parent"},
// [React.createElement("div",{id:"child"},
// [React.createElement("h1",{},"hello himanshhhhu"),
// React.createElement("h2",{},"good to see you again")])
// ,React.createElement("div",{id:"child"},
// [React.createElement("h1",{},"hello himanshhhhu"),
// React.createElement("h2",{},"good to see you again")])
// ]);

// const heading = React.createElement("h1",{id:"heading"},"hello himanshu are you ready for learning REACT");

// using jsx
// const jsxheading = (<h1 className="heading">wow ia am learning jsx</h1>);

//react component.....fxn react component
// const HeadingComponent = () =><h1 className="head">this is himanshu</h1>;


// //component composition
// const me = "himanhu";
// const Heading = () =>
// (<div>
//     {me}                       
//     {HeadingComponent()}
//     <HeadingComponent/>
//     <HeadingComponent></HeadingComponent>
//     <h1 className="head_">learning jsx and react</h1>
// </div>
// );
