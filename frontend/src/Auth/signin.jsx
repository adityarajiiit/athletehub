import React, { useState } from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import animationData from "../assets/Animation.json";
export default function Signin(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return(
        <div className="flex justify-center items-center h-screen bg-[#bcd6eb]"> 
        <div className="bg-gradient-to-r from-[#0F044C] via-purple-900 to-[#141E61] shadow-lg rounded-md w-9/12 lg:w-[40rem]">

            <h1 className='font-bold text-3xl p-3 pl-6 text-[#687EFF]'>Logo.</h1> 
            <div className='flex flex-col items-center justify-center'>
                <Lottie options={defaultOptions}
                height={100}
                width={200}
                />
                <h2 className='text-center font-bold text-3xl text-[#80B3FF] mb-2'>Welcome back !</h2>
                <p className='text-center w-4/6 font-semibold text-base mb-6 text-[#B6FFFA]'>Unlock endless opportunities in sports management—connect with experts, expand your scope, and take your career to the next level!</p>
            </div>
            
            <form onSubmit={handleSubmit} className='bg-white rounded-t-xl flex flex-col p-8'>
                <div className='flex flex-col'>
                    <label className='relative top-3 bg-white w-fit left-2 p-1'>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='border-2 border-[#687EFF] p-2 rounded-md'
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='relative top-3 bg-white w-fit left-2 p-1'>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='border-2 border-[#687EFF] p-2 rounded-md'
                    />
                </div>
                
                <button type="submit" className='mt-8 mb-2 p-2 border bg-[#301E67] text-[#98E4FF] font-semibold rounded-md'>Sign In</button>
                <p className='text-center text-[#141415]'>Don't  have an account? <Link to='/sign-up' className='text-[#687EFF] underline'>Sign In</Link></p>
            </form>
        </div>
    </div>
    )
}