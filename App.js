import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Hello world!!"
);
console.log(heading); //this heading is an object which contains type, props, children etc.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);