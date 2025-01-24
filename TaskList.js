import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('https://app-my.free.beeceptor.com')
            .then(response => {
                
                setTasks(response.data); // Ensure it's an array
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);
    

    return (
        <div>
            <h2 className="mb-3">Tasks</h2>
            <ul className="list-group">
                {tasks.map(task => (
                    <li className="list-group-item" key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;