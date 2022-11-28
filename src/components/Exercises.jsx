import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseCards from './ExerciseCards';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Exercises(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [HEP, setHEP] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(8);
    
    const navigate = useNavigate();
    const emailState = useSelector((state)=>state.email);
    const dispatch = useDispatch();

    console.log(HEP,"line 14");

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(HEP,"inside handler");
        dispatch({type:"ADD_HEP",payload:{HEP,emailState}});
        dispatch({type:"UPDATE_STORE_HEP",payload:{HEP}});
        navigate('/hepeditor');
    }

    const exerciseApi = async () => {
        setIsLoading(true);
        const response = await axios.get('https://630a50baf280658a59cd50c6.mockapi.io/exercises2');
        const exercises = response.data
        setData(exercises)
        setIsLoading(false);
    };

    
    useEffect(() => {
        exerciseApi();
    },[]);
    
    useEffect(() => {
        setFilterData(data)
    }, [data])
    
    useEffect(() => {
        
    }, [filterData]);
    
    //Get current exercises
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = filterData.slice(indexOfFirstExercise, indexOfLastExercise);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    //Categories
    const categories = [
        { name: 'Shoulder', href: '#'},
        { name: 'Lumbar & Thoracic', href: '#'},
        { name: 'Upper Limbs', href: '#'},
        { name: 'Lower Limbs', href: '#'},
      ]

    //Filter exercises
    const filterExercise = (event) => {
        let newData = data.filter(area => {
            return area.category === event.target.innerText
        })
        setFilterData(newData)
    };
    
    //Add exercise to state
    const addExercise = (e) => {
            if (HEP.findIndex(name => name.exerciseName === e.target.name) !== -1) {
                alert ('Sorry, exercise already added to HEP.')
            } else {
                setHEP(HEP => [...HEP, {exerciseName: e.target.name, exerciseImg: e.target.src, exerciseDesc: e.target.alt}])
            }
        };

    //Remove exercise from state
    const removeExercise = (e) => {
        let newHEP = HEP.filter(exercises => exercises.exerciseName !== e.target.name)
        setHEP(newHEP)
    };

    if (isLoading) {
        return <div role="status" className='flex w-full h-screen items-center justify-center'>
                    <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div>
    }

    return (
        <div className='flex flex-col h-screen items-center justify-start pt-16 dark:bg-gray-800'>
            <div className='flex flex-row gap-8 items-start justify-center py-12 px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col w-1/5 border-2 border-black dark:border-gray-400 dark:text-gray-400'>
                    <h3 className='bg-gray-600 text-gray-200 dark:bg-gray-900 dark:text-gray-400'>Category:</h3>
                    {categories.map((area) => {
                        return <a key={area.name} onClick={filterExercise} href={area.href} className='bg-gray-300 text-gray-600 hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-300'>
                            {area.name}
                        </a>
                    })}
                </div>
                <div className='flex flex-col w-4/5 border-2 border-black dark:border-gray-400'>
                    <ExerciseCards data={currentExercises} addExercise={addExercise} />
                    <Pagination exercisesPerPage={exercisesPerPage} totalExercises={filterData.length} paginate={paginate} currentPage={currentPage} />
                </div> 
            </div>
            <div className='flex flex-col justify-center items-center w-1/2'>
                <div className='flex flex-row justify-between w-full dark:text-gray-400'>
                    <span>Your HEP:</span>
                    <span>Total:{HEP.length}</span>
                </div>
                <div >
                    <div className='flex flex-row justify-start h-full w-full gap-0.5 overflow-auto'>
                        {HEP.map((exercise) => {
                            return <img src={exercise.exerciseImg} name={exercise.exerciseName} onClick={removeExercise} key={exercise.exerciseName} alt='' className='h-36 w-36 border-2 border-black hover:cursor-pointer hover:opacity-50 dark:border-gray-400' />
                        })}
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <button onClick={submitHandler} className='bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded' type="submit">Save HEP</button>
            </div>
        </div>
    );
}

export default Exercises;