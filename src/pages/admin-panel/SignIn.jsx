import React from 'react'
import Navbar from '../../components/front/Navbar'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <form style={{ marginTop: '150px' }} className="bg-light p-5 rounded">
          <h3 className='text-dark'>Admin Login</h3>
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" placeholder='Email' class="form-control" />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" placeholder='Password' class="form-control" id="exampleInputPassword1" />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default SignIn