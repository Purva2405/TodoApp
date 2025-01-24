import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://app-my.free.beeceptor.com', { title })
            .then(response => {
                console.log(response.data);
                setTitle('');
            })
            .catch(error => {
                console.error("Error adding task: ", error);
            });
    };

    return (
        <div>
            <h2 className="mb-3">Create Task</h2>
            <form onSubmit={handleSubmit} className="mb-3">
                <input
                    type="text"
                    className="form-control mb-2"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Enter task"
                />
                <button type="submit" className="btn btn-primary">Add Task</button>
            </form>
        </div>
    );
};

export default CreateTask;