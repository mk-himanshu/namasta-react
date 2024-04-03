import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"







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
