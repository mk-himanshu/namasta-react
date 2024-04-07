import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import Restr_menu from "./components/Restr_menu";







const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};
 const app_router = createBrowserRouter([
    {path : "/",
    element : <AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/retaurents/:res_id",
            element:<Restr_menu/>
        }
    ],
    errorElement : <Error/>,
    

    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={app_router}/>)


// root.render(<AppLayout />);

















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
