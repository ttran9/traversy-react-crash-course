import React from "react";
import Header from "./components/Header";
import "./index.css";

function App() { 

    return (
        <div className="container">
            <h1>Hello From React</h1>
            <Header />
            {/* <Header title='custom title tracker'/> */}
        </div>  
    )
}

export default App;