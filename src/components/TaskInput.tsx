import { useState } from 'react';
import { Task } from '../interfaces/task';

interface TaskInputProps {
    add: (newTask: Task) => void,
}

const TaskInput = (props: TaskInputProps) => {
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
        props.add(newTask);
        setInput('');
    }

    return (
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
    );
}

export default TaskInput;
