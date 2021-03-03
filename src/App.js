import React, { useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./index.css";
import { useState }  from 'react'
import AddTask from "./components/AddTask";

function App() { 
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([])
    const endPoint = 'http://localhost:5000/tasks/';

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        }

        getTasks();
    }, [])

    // Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch(endPoint);
        const data = await res.json();
        return data;
    }

    // Add Task
    const addTask = async (task) => {
        const res = await fetch(`${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task),
        })
        const data = await res.json()
        setTasks([...tasks, data]);
        
        // const id = Math.floor(Math.random() * 10000) + 1;
        // const newTask = {
        //     id,
        //     ...task
        // }
        // setTasks([...tasks, newTask]);
    }

    // Delete Task
    const deleteTask = async (id) => {
        await fetch(`${endPoint}${id}`,{
            method: 'DELETE',
        });
        setTasks(tasks.filter((task) => task.id !== id));
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