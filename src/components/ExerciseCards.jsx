import React from 'react';
import uuid from 'react-uuid';

function ExerciseCards({ data, addExercise }) {

    return (
        <div className='flex flex-row flex-wrap justify-center items-center gap-2 w-full m-2'>
            {data.map((exercise) => {
                return <div className="flex flex-col items-center bg-white rounded-lg shadow-lg" key={uuid()}>
                            <div className="p-6">
                                <img src={exercise.image} key={exercise.name} onClick={addExercise} alt={exercise.description} name={exercise.name} className="h-52 w-52 rounded-t-lg hover:cursor-pointer hover:opacity-50" />
                                    {exercise.name}
                            </div>
                        </div>
            })}
        </div>
    );
}

export default ExerciseCards;