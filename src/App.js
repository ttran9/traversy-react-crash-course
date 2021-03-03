import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./index.css";

function App() { 

    return (
        <div className="container">
            <h1>Hello From React</h1>
            <Header />
            <h2>Lets test!!!</h2>
            <Tasks/>
            {/* <Header title = {1}/> */}
            {/* <Header title='custom title tracker'/> */}
        </div>  
    )
}

export default App;