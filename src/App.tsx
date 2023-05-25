import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskList from './components/ListTask';
import TaskPage from './page/TaskPage';

interface Task {
  id: number;
  title: string;
  buttonText1: string;
  buttonText2?: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Tarea #1', buttonText1: 'Hacer tarea #1', },
    { id: 2, title: 'Tarea #2', buttonText1: 'Hacer tarea #2', },
    { id: 3, title: 'Tarea #3', buttonText1: 'Hacer tarea #3.1', buttonText2: 'Hacer tarea #3.2' },
    { id: 4, title: 'Tarea #4', buttonText1: 'Hacer tarea #4.1', buttonText2: 'Hacer tarea #4.2' },
    { id: 5, title: 'Tarea #5', buttonText1: 'Hacer tarea #5.1', buttonText2: 'Hacer tarea #5.2' },
    { id: 6, title: 'Tarea #6', buttonText1: 'Hacer tarea #6' },
  ]);



  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<TaskList tasks={tasks} />}
        />
        <Route path="/task/:taskId/:subTaskId" element={<TaskPage setTasks={setTasks} tasks={tasks} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
