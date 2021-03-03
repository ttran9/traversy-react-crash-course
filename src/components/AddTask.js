import React from 'react'
import { useState } from 'react';

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
        <form className='add-form'>
            <div>
                <label>Task</label>
                <input className='form-control' 
                        type='text' 
                        placeholder='Add Task'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        />
            </div>
            <div>
                <label>Day & Time</label>
                <input className='form-control' 
                        type='text' 
                        placeholder='Add Day & Time'
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        />
            </div>
            <div>
                <label>Set Reminder</label>
                <input className='form-control form-control-check'
                         type='checkbox' 
                         value={reminder}
                         onChange={(e) => setReminder(
                             e.currentTarget.checked)}
                         />
            </div>
            <input className='btn btn-block' type='submit' value='Save Task'/>
        </form>
    )
}

export default AddTask;
