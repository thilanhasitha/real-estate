import React from 'react'
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-400 shadow-md'>
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <h1 className='font-bolt text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>PRIME - </span>
            <span className='text-slate-700'>ESTATE</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input  className='bg-transparent focus:outline-none w-24 sm:w-64' type='text' placeholder='Search ... '/>
             <FaSearch className='text-slate-600 '/> 
        </form>
        <ul className='flex gap-8'>
            <Link to ='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to ='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='sign-in'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Sign-In</li>
            </Link>
        </ul>
        </div>
    </header>
  )
}
