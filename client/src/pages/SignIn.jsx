import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function SignUp() {

  const [formData,setFormData] = useState({});
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/v1/user/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    });
    //to view the console what are the data keeping from spread operator of ...formData
    console.log(formData);
  }

  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='text-3xl text-center  font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        {/* <input type='text'placeholder='UserName' className=' p-3 rounded-lg bg-slate-200' id='username' onChange={handleChange}/> */}
        <input type='email'placeholder='Email' className=' p-3 rounded-lg bg-slate-200' id='email'  onChange={handleChange}/>
        <input type='password'placeholder='Password' className=' p-3 rounded-lg bg-slate-200' id='password'  onChange={handleChange}/>

        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className='flex justify-between mt-7'>
        <p>Have  not an Account?</p>
         <Link to='/sign-up'>
        <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
