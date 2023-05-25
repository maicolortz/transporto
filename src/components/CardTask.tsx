import React from 'react';
interface Task {
    id: number;
    title: string;
    buttonText1: string;
    buttonText2?: string;
}

interface CardTaskProps extends Task {
    tasks: Task[];
    onSubmit: (task: Task, subTaskId: number) => void
}

const CardTask: React.FC<CardTaskProps> = ({
    id,
    title,
    buttonText1,
    buttonText2,
    onSubmit
}) => {

    const handleSubmit = (id: number, subTaskId: number) => {
        onSubmit({ id, buttonText1, title, buttonText2 }, subTaskId);
    }

    return (
        <div className="bg-white rounded shadow p-4">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="flex justify-between m-auto  mt-4 flex-wrap py-5 gap-5">
                {buttonText1 &&

                    <button
                        className="btn btn-primary"
                        onClick={() => handleSubmit(id, 1)}
                    >
                        {buttonText1}
                    </button>
                }
                {buttonText2 && (
                    <button
                        className="btn btn-primary px-4 py-2 rounded-lg"
                        onClick={() => handleSubmit(id, 2)}
                    >
                        {buttonText2}
                    </button>
                )}
                {buttonText1 === undefined && buttonText2 === undefined && (<h2 className=' bold text-lg'>No hay tareas disponibles en esta seccion</h2>)}
            </div>
        </div>
    );

};

export default CardTask;
