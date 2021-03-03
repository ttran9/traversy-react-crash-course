import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./index.css";
import { useState }  from 'react'
import AddTask from "./components/AddTask";

function App() { 
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([])

    
    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = {
            id,
            ...task
        }
        setTasks([...tasks, newTask]);
    }

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
        // console.log('delete', id)
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? 
                    { ...task, reminder: !task.reminder } : 
                    task))
    }

    return (
        <div className="container">
            {/* <h1>Hello From React</h1> */}
            <Header onAdd = {() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
            />
            {showAddTask && <AddTask onAdd={addTask} />}
            {/* <h2>Lets test!!!</h2> */}
            {tasks.length > 0 ? 
                <Tasks tasks={tasks} 
                        onDelete={deleteTask} 
                        onToggle={toggleReminder}
                /> : 
                'No Tasks To Show'    
            }
            {/* <Header title = {1}/> */}
            {/* <Header title='custom title tracker'/> */}
        </div>  
    )
}

export default App;