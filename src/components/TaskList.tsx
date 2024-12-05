import { Task } from '../interfaces/task';

interface TaskListProps {
    tasks: Task[],
    complete: (id: number, tasks: Task[]) => void,
    delete: (id: number, tasks: Task[]) => void,
}

const TaskList = (props: TaskListProps) => {
    const toggleCompletion = (id: number) => {
        props.complete(id, props.tasks);
    }

    const deleteTask = (id: number) => {
        props.delete(id, props.tasks)
    }

    return (
        <ul>
            {props.tasks.length === 0 && (
                <>
                    &nbsp;
                    No tasks
                </>
            )}
            
            {props.tasks.map((task: Task) => (
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
    );
}

export default TaskList;
