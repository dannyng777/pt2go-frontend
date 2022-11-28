import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function AddCustomExercise(props) {
    
    const [image, setImage] = useState({
        preview: '',
        raw: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [imageURL, setImageURL] = useState('')
    const [exName, setExName] = useState('');
    const [exDescription, setExDescription] = useState('');
    const [exCategory, setExCategory] = useState('');

    const navigate = useNavigate();

    const handleImageChange = (e) => {
        setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
        });
    }

    const handleImageURL = (e) => {
        setImageURL(e.target.value)
    }

    const handleNameChange = (e) => {
        setExName(e.target.value)
    }

    const handleDescChange = (e) => {
        setExDescription(e.target.value)
    }

    const handleCategoryChange = (e) => {
            setExCategory(e.target.value)
    }

    const handleUpload = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        console.log(imageURL, exName, exDescription, exCategory)
        if (image.preview === '' && imageURL === '' || exName === '' || exDescription === '' || exCategory === 'DEFAULT') {
            alert('Missing fields')
        } else {
            const formData = new FormData()
            formData.append('image', image.raw)

            await axios.post('https://630a50baf280658a59cd50c6.mockapi.io/exercises2', {
                name: exName,
                description: exDescription,
                category: exCategory,
                image: imageURL
            });
            setIsLoading(false)
            alert('Exercise created successfully!')
            navigate('/exercises')
        }
    }

    if (isLoading) {
        return <div role="status" className='flex w-full h-screen items-center justify-center'>
                    <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div>
    }


    return (
        <div className='h-screen dark:bg-gray-800 dark:text-gray-400'>
            <div className='flex flex-col items-center pt-16'>
            Create your own exercises!
                <div className="flex flex-row w-4/5 justify-between py-5">
                    <div className='flex flex-col items-center justify-center w-1/4'>
                        {image.preview ? (
                            <img src={image.preview} alt='' className='w-300 h-300' />
                        ) : (
                            <h5></h5>
                        )}
                        <input type='file' accept='image/*' onChange={handleImageChange} />
                        <textarea onChange={handleImageURL} className='w-full h-1/4 resize-none dark:bg-gray-800 dark:text-gray-400 mr-28 mt-5' placeholder='Image URL'></textarea>
                    </div>
                    <div className="p-4 w-1/2">
                        <textarea onChange={handleNameChange} className='w-full h-1/4 resize-none dark:bg-gray-800 dark:text-gray-400' placeholder='Exercise name'>
                        </textarea>
                        <textarea onChange={handleDescChange} className='w-full h-3/4 resize-none dark:bg-gray-800 dark:text-gray-400' placeholder='Description'>
                        </textarea>
                    </div>
                    <div className='pt-4'>
                        <select onChange={handleCategoryChange} defaultValue={'DEFAULT'} className='dark:bg-gray-800 dark:text-gray-400'>
                            <option value='DEFAULT' disabled>Category:</option>
                            <option value='Shoulder'>Shoulder</option>
                            <option value='Lumbar & Thoracic'>Lumbar & Thoracic</option>
                            <option value='Upper Limbs'>Upper Limbs</option>
                            <option value='Lower Limbs'>Lower Limbs</option>
                        </select>
                    </div>
                </div>
                        <button onClick={handleUpload} className='bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'>Upload</button>
            </div>
        </div>
    );
}

export default AddCustomExercise;