import { useState, FormEvent } from 'react'
import { CMS_URL } from '../consts'
import router from 'next/router'
import Nav from './components/navigation/navigation'
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

const Crums = () => {
  return (
    <Breadcrumbs 
    useDefaultStyle
    transformLabel={(title) => title + ''}
    />
  );
};


const INITIAL_STATE = {
  email: '',
  password: '',
}

export default function Login() {
  const [formValues, setFormValues] = useState(INITIAL_STATE)
  const [error, setError] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { email, password } = formValues

    const response = await fetch(`${CMS_URL}/api/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier: email, password }),
    })

    if (!response.ok) {
      const { error } = await response.json()
      setError(error.message)
      return
    }
    const { jwt, user } = await response.json()
    sessionStorage.setItem("jwt", jwt) 
    router.push('/admin')
  }

  return (
    <div className='main-container'>
      <header><Nav/></header>
    <div className='form-container'>
              {/* <div className='bcrums-container'>
        <Crums/>
        </div> */}
    <form onSubmit={handleSubmit}>
      {error && <span className="text-red-700">Error: {error}</span>}
      <div className='email-input'>
        <label className="block" htmlFor="email">
          Email
        </label>
        <input
          onChange={(event) =>
            setFormValues((currentState) => ({
              ...currentState,
              email: event.target.value,
            }))
          }
          type="email"
          required
          id="email"
          name="email"
          
        />
      </div>
      <div className='password-input'>
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          onChange={(event) =>
            setFormValues((currentState) => ({
              ...currentState,
              password: event.target.value,
            }))
          }
          type="password"
          required
          id="password"
          name="password"
          
        />
      </div>
      <button className='login-btn'>Login</button>
    </form>
    </div>
    </div>
  )
}
