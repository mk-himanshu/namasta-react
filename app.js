import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"hello himanshhhhu"),
React.createElement("h2",{},"good to see you again")])
,React.createElement("div",{id:"child"},
[React.createElement("h1",{},"hello himanshhhhu"),
React.createElement("h2",{},"good to see you again")])
]);

const heading = React.createElement("h1",{id:"heading"},"hello himanshu are you ready for learning REACT");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);