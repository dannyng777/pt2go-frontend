import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Registration(props) {
    const [firstname, setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [occupation, setOccupation] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function registerUser(e){
        e.preventDefault()
        dispatch({type:"REGISTER_USER",payload:{firstname,lastname,email,password,occupation}})
        alert('Account created!')
        navigate('/login')
    }
    
    const [showPassword, setShowPassword] = useState(false);
    const [btnText, setBtnText] = useState(true);

    const togglePassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
        setBtnText(!btnText)
    };


    return (
        <div className='h-screen dark:bg-gray-800 dark:text-gray-400'>
            <div className="flex min-h-full items-center justify-center -mt-16 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8" onSubmit={registerUser}>
                <div>
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
                    Register an account
                </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="flex flex-col gap-1 -space-y-px rounded-md shadow-sm">
                    <div>
                        <label htmlFor="first-name" className="sr-only">
                            First name
                        </label>
                        <input
                            value={firstname}
                            onChange={(e)=>{setFirstName(e.target.value)}}
                            id="first-name"
                            name="first-name"
                            type="text"
                            required
                            className="relative block w-full appearance-none rounded-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-gray-400"
                            placeholder="First name"
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="sr-only">
                            Last name
                        </label>
                        <input
                            value={lastname}
                            onChange={(e)=>{setLastName(e.target.value)}}
                            id="last-name"
                            name="last-name"
                            type="text"
                            required
                            className="relative block w-full appearance-none rounded-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-gray-400"
                            placeholder="Last name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="relative block w-full appearance-none rounded-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-gray-400"
                            placeholder="Email address"
                        />
                       </div>
                       <div className='relative'>
                           <label htmlFor="password" className="sr-only">
                              Password
                          </label>
                          <input
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            autoComplete="current-password"
                            required
                            className="relative block w-full appearance-none rounded-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-gray-400"
                            placeholder="Password"
                        />
                            <span className='absolute inset-y-0 right-0 flex items-center pr-2'>
                                <button className='bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label' onClick={togglePassword}>{btnText ? 'Show' : 'Hide'}</button>
                            </span>
                        </div>
                        <div>
                            <select onChange={(e)=>{setOccupation(e.target.value)}} defaultValue={'DEFAULT'} className='relative block w-full appearance-none rounded-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-gray-400'>
                                <option value='DEFAULT' disabled>Select Occupation:</option>
                                <option>Director of Rehab</option>
                                <option>Rehab Manager</option>
                                <option>Physical Therapist</option>
                                <option>PTA</option>
                                <option>PT Tech</option>
                                <option>PT Student</option>
                                <option>PTA Student</option>
                                <option>Occupational Thearpist</option>
                                <option>COTA</option>
                                <option>OT Student</option>
                                <option>OTA Student</option>
                                <option>Speech Therapist</option>
                                <option>Athletic Trainer</option>
                                <option>Clinical Instructor</option>
                                <option>Office Administrator</option>
                                <option>Rehab Tech</option>
                                <option>Other</option>

                            </select>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="agreement"
                                name="agreement"
                                type="checkbox"
                                required
                                className="h-4 w-4 rounded border-gray-400 text-indigo-600 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-400"
                            />
                            <label htmlFor="agreement" className="ml-2 block text-sm text-gray-900 text-left dark:text-gray-400">
                            I agree to the terms and conditions of PT2Go, including stating that I am a Rehabilitation Professionals such as Physical Therapists, Occupational Therapists, PTA's, COTA's, Athletic Trainers, Chiropractors, Orthopedic Doctors, Sports Doctors and more.
                            Please seek additional Medical advise before attempting any exercises or instructions on this site. PT2Go is not responsible for any outcomes of using this site.
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                        Create account
                        </button>
                    </div>
                    <div className="text-sm">
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Already have an account?
                        </Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;