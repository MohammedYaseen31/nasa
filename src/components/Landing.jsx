import React, { useRef, useState } from 'react'
import '../assets/styles/landing.css'
import { Link, useNavigate } from 'react-router-dom'
const Landing = () => {
  let err =  `
                border : 1px solid red,
              `
  let formData = useRef()
  let loginNavigate=useNavigate()
  let [emailErr, setemailErr] = useState('')
  let [passwordErr, setpasswordErr] = useState('')
  let handleForm = (e) => {
    e.preventDefault();
    // console.log(formData);
    let emailField = formData.current[0];
    let passwordField = formData.current[1];

    let credentials = {
      email: 'admin@gmail.com',
      password: 'admin123'
    }

    let { email, password } = credentials

    let checkemail = (emailField.value === email)
    let checkpass = (passwordField.value === password)

    if (checkemail && checkpass) {
      loginNavigate(`/home`)
    }
    else {
      // emailField.style.cssText=err
      // passwordField.style.cssText=err
      if (emailField.value === "" || emailField.value === null) {
        emailField.style.cssText = err
        setemailErr('Email is Empty')
      }
      else if (passwordField.value === "" || passwordField.value === null) {
        passwordField.style.cssText = err
        setpasswordErr('Password is empty')
      }
      else if (emailField.value !== email) {
        emailField.style.cssText = err
        setemailErr('Wrong Email id')
      }
      else if (passwordField.value !== password) {
        passwordField.style.cssText = err
        setpasswordErr('Wrong Password')
      }
    }
  }
  return (
    <>
      <div className="landing">
        <div className="container">
          <div className="header">
            <h2>Log Into The Curios World of ROVER</h2>
          </div>
          <div className="formbox">
            <form onSubmit={handleForm} ref={formData}>
              <input type="email" placeholder='admin@gmail.com' />
              <span>{emailErr}</span>
              <input type="password" placeholder='admin123' />
              <span>{passwordErr}</span>
              <button>Login</button>
            </form>
          </div>
          <div className='forgettenPass'>
            <Link to='/forgot'>Forgotten Password</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
