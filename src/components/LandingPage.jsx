import React from 'react';
import { useNavigate } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import image1 from '../assets/PT1.jpg';
import image2 from '../assets/PT2.jpg';
import image3 from '../assets/PT3.jpg';
import image4 from '../assets/PT4.jpg';
import { useSelector } from 'react-redux';

function LandingPage(props) {
    const state = useSelector((state)=>state)
    const navigate = useNavigate();

    //if already logged in go straight to dashboard, else go to login page
    const handleClick = (event) => {
        event.preventDefault();
        if(state.isLoggedIn){
            navigate('dashboard')
        }else{
        navigate('/login');
        }
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center w-full h-screen dark:bg-gray-800'>
                <div className='container pt-10 h-screen'>
                    <AliceCarousel autoPlay infinite autoPlayInterval={3000} autoPlayStrategy="none" disableButtonsControls animationType="fadeout">
                        <img src={image1} className='sliderimg ' alt='' />
                        <img src={image2} className='sliderimg ' alt='' />
                        <img src={image3} className='sliderimg ' alt='' />
                        <img src={image4} className='sliderimg ' alt='' />
                    </AliceCarousel>
                    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div className="h-full w-full max-w-md space-y-8 dark:bg-gray-800">
                            <button 
                                type="submit"
                                className="group relative flex w-full items-center justify-center rounded-md border border-transparent bg-gray-400 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 hover:bg-gray-600"
                                onClick={handleClick}>
                                Enter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;