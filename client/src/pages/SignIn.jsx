import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const SignIn = () => {

  const [formData, setFormData] = useState([])

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className='grid place-items-center relative top-20'>
      <article className=''>
        <div className='relative top-3 font-bold shadow-md text-center bg-cyan-500 w-[95%] mx-auto text-white p-5 rounded-md uppercase'>
          login to your account
        </div>
        <form className="flex max-w-md flex-col gap-4 shadow border p-10 w-96">

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput id="email2" type="email" placeholder="name@gmail.com" name='email' onChange={handleFormChange} required shadow />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput id="password2" type="password" name='password' onChange={handleFormChange} required shadow />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              Remember me&nbsp;
              <Link to="#" className="hidden text-cyan-500 hover:underline dark:text-cyan-500">
                terms and conditions
              </Link>
            </Label>
          </div>

          <Button type="submit" className='bg-cyan-500'>Sign In</Button>

          <span className='text-sm text-center my-3'>
            Don't have an account? <Link to='/sign-up' className='text-cyan-500 hover:underline'>Sign Up</Link>
          </span>
        </form>
      </article>
    </main>
  )
}

export default SignIn
