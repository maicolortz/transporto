import React from 'react';
import CardTask from './CardTask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

interface Task {
    id: number;
    title: string;
    buttonText1: string;
    buttonText2?: string;
}

interface TaskListProps {
    tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    const navigate = useNavigate();

    const validation = (task: Task, subTaskId: number) => {
        if (task.id !== 1 && tasks[0].buttonText1 !== undefined) {
            toast.error('Debe completar la primera tarea antes que cualquier otra.');
        } else if (task.id === 3 && subTaskId !== 1 && tasks[2].buttonText1 !== undefined) {
            toast.error('Debe completar primero la tarea 3.1 antes de continuar a la 3.2.');
        } else if (task.id === 4 && subTaskId === 1 && tasks[2].buttonText2 !== undefined) {
            toast.error('Debe completar primero la tarea 3.2 antes de continuar a la 4.1.');
        } else if (task.id === 5 && subTaskId === 2 && tasks[4].buttonText1 !== undefined) {
            toast.error('Debe completar primero la tarea 5.1 antes de continuar a la 5.2.');
        } else {
            navigate(`/task/${task.id}/${subTaskId}`);
        }
    };

    return (
        <>
            <h1 className='text-7xl text-center p-8  font-bold'>TAREAS</h1>
            <div className="grid grid-cols-1 gap-4 py-6 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                {tasks.map((task) => (
                    <CardTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        buttonText1={task.buttonText1}
                        buttonText2={task.buttonText2}
                        tasks={tasks}
                        onSubmit={validation}
                    />
                ))}
                <ToastContainer />
            </div>
        </>
    );
};

export default TaskList;
