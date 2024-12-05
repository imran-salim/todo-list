'use client';

import { useState } from 'react';
import type { NextPage } from 'next';
import { Task } from '../interfaces/task';

const Home: NextPage = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [input, setInput] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return;
        const newTask: Task = {
            id: Date.now(),
            text: input,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setInput('');
    }

    const toggleCompletion = (id: number) => {
        setTasks(
            tasks.map((task) => 
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">To-Do List</h1>

            <form onSubmit={handleFormSubmit} className="flex mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Add a new task"
                    className="pl-2 text-black"
                />
                <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
                    Add
                </button>
            </form>

            <ul>
                {tasks.length === 0 && (
                    <>
                        &nbsp;
                        No tasks
                    </>
                )}
                
                {tasks.map((task) => (
                    <li key={task.id} className="flex items-center mb-2">
                        <input 
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleCompletion(task.id)}
                            className="mr-2"
                        />
                        <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="ml-auto bg-red-500 text-white p-1 rounded"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;

