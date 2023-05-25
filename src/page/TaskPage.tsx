import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface TaskPageProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

interface Task {
  id: number;
  title: string;
  buttonText1: string;
  buttonText2?: string;
}

const TaskPage: React.FC<TaskPageProps> = ({ tasks, setTasks }) => {
  const history = useNavigate();
  const { taskId, subTaskId } = useParams<{ taskId: string; subTaskId: string }>();

  const handleDelete = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === Number(taskId) && subTaskId) {
        const buttonKey = `buttonText${subTaskId}`;
        return { ...task, [buttonKey]: undefined } as Task;
      }
      return task;
    });

    setTasks(updatedTasks);
    // Redirigir al home después de eliminar la subtask
    history('/');
  };

  const renderConfirmationMessage = () => {
    return (
      <div className="p-6 bg-slate-300 rounded-lg shadow-lg m-auto h-screen">
        <div className='bg-slate-100 p-8 text-center rounded-2xl'>
          <h2 className="text-2xl font-bold mb-4">Eliminar Tarea</h2>
          <p className="text-gray-700 mb-4">¿Estás seguro de que deseas eliminar la tarea #{taskId}.{subTaskId}?</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleDelete}
          >
            Eliminar

          </button>
        </div>

      </div>
    );
  };

  return <>{renderConfirmationMessage()}</>;
};

export default TaskPage;
