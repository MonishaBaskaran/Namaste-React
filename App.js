import React from "react";
import ReactDOM from "react-dom/client";
const Title =  () => (
    <h1 className = "head" tabIndex="5" >
    Namaste React
    </h1> 
);

const elem = (
    <h2 className = "elem" tabIndex="5" >
    Welcome to
    </h2> 
);

const HeadingComponent =  () => (
    <div>
        <Title/>
        <Tiltle></Tiltle>
        {Title()}
        <h2 className = "head" tabIndex="5" >
        {elem} Episode - 03
        </h2> 
    </div>
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);