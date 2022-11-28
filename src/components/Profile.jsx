import React from 'react';
import { useSelector } from 'react-redux';
import image from '../assets/userOutline.png'

function Profile(props) {
    const state = useSelector(state => state);
    const { firstname, lastname, occupation, email } = state;
    console.log(state)


    return (
        <div className='h-screen dark:bg-gray-800 dark:text-gray-400'>
            <div className='flex flex-col items-center gap-y-8'>
                <div className='flex flex-row justify-center mt-16'>
                    <img src={image} className='border-8 border-black rounded-full w-80 h-80 dark:border-gray-400' />
                </div>
                <div className='flex flex-col items-start gap-y-4'>
                    <h1><strong>Name: </strong> {firstname + ' ' + lastname}</h1>
                    <h1><strong>Email: </strong>{email}</h1>
                    <h1><strong>Occupation: </strong>{occupation}</h1>
                </div>
            </div>
        </div>
    );
}

export default Profile;