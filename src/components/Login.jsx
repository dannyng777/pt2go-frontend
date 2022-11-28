import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { useEffect } from 'react';


function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [btnText, setBtnText] = useState(true);

    const loginState = useSelector((state)=>state.isLoggedIn)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const togglePassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
        setBtnText(!btnText)
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };

    const handlePassChange = (e) => {
        setPassword(e.target.value)
    };

    const loginUser = (e) => {
        e.preventDefault()
        dispatch({type:"FETCH_USER",payload:{email,password}})
    };

    useEffect(()=>{ //useEffect will run if the dependency (loginState) changes. 
        if(loginState){
            navigate("/dashboard");
        }
    },[loginState])

    return (
        <div className='h-screen dark:bg-gray-800 dark:text-gray-400'>
            <div className="flex min-h-full items-center justify-center -mt-16 py-12 px-4 sm:px-6 lg:px-8">
                <div onSubmit={loginUser} className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
                            Sign in to your account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="flex flex-col gap-1 -space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                value={email}
                                onChange={handleEmailChange}
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
                                onChange={handlePassChange}
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
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-400 text-indigo-600 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-400"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-400">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                        Sign in
                        </button>
                    </div>
                    <div className="text-sm">
                        <Link to="/registration" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Need an account?
                        </Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;