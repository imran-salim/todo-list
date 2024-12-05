'use client';

import { useState } from 'react';
import type { NextPage } from 'next';
import { Task } from '../interfaces/task';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Home: NextPage = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (newTask: Task) => {
        setTasks([...tasks, newTask]);
    }

    const completeTask = (id: number, tasks: Task[]) => {
        setTasks(
            tasks.map((task: Task) => 
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    const deleteTask = (id: number, tasks: Task[]) => {
        setTasks(tasks.filter((task: Task) => task.id !== id));
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
            <TaskInput add={addTask} />
            <TaskList tasks={tasks} complete={completeTask} delete={deleteTask} />
        </div>
    );
}

export default Home;

