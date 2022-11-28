import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function UserDashboard() {

  const [currentHEP, setCurrentHEP] = useState([]);
  const navigate = useNavigate()
  const loginState = useSelector((state)=>state);
  const { firstname, lastname, exercises, email} = loginState;
  const [HEPStatus, setHEPStatus] = useState(false)
  const dispatch = useDispatch();


  const deleteHandler=(e,index)=>{
    e.preventDefault()
    dispatch({type:"DELETE_REDUX_HEP", payload:{index}})
    dispatch({type:"DELETE_HEP",payload:{email, index}})
  }

  const updateCurrentHEP = (e, data) => {
    e.preventDefault();
    setCurrentHEP(data)
    setHEPStatus(!HEPStatus)
  }
  
  useEffect(() => { //useEffect will run if the dependency (currentHEP) changes. 
    dispatch({type:"UPDATE_CURRENT_HEP", payload: { currentHEP }})
  }, [currentHEP])

  useEffect(()=>{ //useEffect will run if the dependency (HEPStatus) changes. 
    if (HEPStatus){
      navigate('/hepeditor')
    }
  }, [HEPStatus])

  const handleProfile = () => {
    navigate('/profile')
  }

  const handleAddExercise = () => {
    navigate('/addcustomexercise')
  }

  const handleCreateHEP = () => {
    navigate('/exercises')
  }


  return (
      <div className='w-full h-screen dark:bg-gray-800 dark:text-gray-400'>
        <div className='pt-16 text-4xl'>
          Welcome, {firstname + ' ' + lastname}!
        </div>
        <div className='flex flex-row w-full gap-5 pt-16'>
          <div className='flex flex-col h-full w-1/3 border-black border-2 ml-5 dark:border-gray-400'>
            <span className='bg-gray-600 text-gray-200 dark:bg-gray-900 dark:text-gray-400'>Menu:</span>
            <button className='bg-gray-300 text-gray-600 dark:bg-gray-700 hover:bg-gray-400 dark:text-gray-400 dark:hover:bg-gray-600 hover:underline dark:hover:text-gray-300' onClick={handleProfile}>Profile</button>
            <button className='bg-gray-300 text-gray-600 dark:bg-gray-700 hover:bg-gray-400 dark:text-gray-400 dark:hover:bg-gray-600 hover:underline dark:hover:text-gray-300' onClick={handleAddExercise}>Add Custom Exercise</button>
          </div>
          <div className='flex flex-col w-2/3 border-black border-2 mr-5 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:border-gray-400'>
          <span className='bg-gray-600 text-gray-200 dark:bg-gray-900 dark:text-gray-400'>Your Routines:</span>
            {exercises.map((data, index) => {
              return  <div className='flex flex-row justify-around items-center pb-2 pt-2 bg-gray-300 text-gray-600 dark:bg-gray-700 hover:bg-gray-400 dark:text-gray-400 dark:hover:bg-gray-600' key={index}>
                        <a onClick={(e)=>{updateCurrentHEP(e, data)}} className='hover:underline dark:hover:text-gray-300' href='#'>Exercise Routine {index + 1}</a>
                        <button onClick={(e)=>deleteHandler(e,index)} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 m-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Delete</button>
                      </div>
              }
            )}
          </div>
        </div>
        <div className='flex flex-row justify-end mt-5 mr-5'>
              <button onClick={handleCreateHEP} className='group relative flex w-1/8 justify-center rounded-md border border-transparent bg-gray-400 hover:bg-gray-600 py-2 px-4 text-sm font-medium text-white'>Create an HEP</button>
        </div>
      </div>
  )
}

export default UserDashboard