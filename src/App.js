import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./index.css";
import { useState }  from 'react'

function App() { 
    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "text": "Doctors Appointment",
            "day": "Feb 5th at 2:30pm",
            "reminder": true
          },
          {
            "id": 2,
            "text": "Meeting at School",
            "day": "Feb 6th at 1:30pm",
            "reminder": true
          },
          {
              id: 3,
              text: 'Food Shopping',
              day: 'Feb 5th at 2:30pm',
              reminder: false,
          }
    ])
    
    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
        // console.log('delete', id)
    }

    return (
        <div className="container">
            <h1>Hello From React</h1>
            <Header />
            <h2>Lets test!!!</h2>
            <Tasks tasks={tasks} onDelete={deleteTask} />
            {/* <Header title = {1}/> */}
            {/* <Header title='custom title tracker'/> */}
        </div>  
    )
}

export default App;