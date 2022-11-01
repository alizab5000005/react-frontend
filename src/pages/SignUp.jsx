import React from 'react'
import Navbar from '../components/front/Navbar'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <form style={{ marginTop: '150px' }} className="bg-light p-5 rounded">
                    <div className="row">

                        <div class="mb-3 col-lg-6 col-12">
                            <label htmlFor="name" class="form-label">First Name</label>
                            <input type="text" placeholder='First Name' class="form-control" />
                        </div>
                        <div class="mb-3 col-lg-6 col-12">
                            <label htmlFor="name" class="form-label">Last Name</label>
                            <input type="text" placeholder='Last Name' class="form-control" />
                        </div>
                    </div>
                    <div className="row">

                        <div class="mb-3 col-lg-6 col-12">
                            <label htmlFor="name" class="form-label">Email</label>
                            <input type="text" placeholder='Email' class="form-control" />
                        </div>
                        <div class="mb-3 col-lg-6 col-12">
                            <label htmlFor="name" class="form-label">Phone</label>
                            <input type="text" placeholder='Phone' class="form-control" />
                        </div>
                    </div>
                    <div className="row">

                        <div class="mb-3 col-lg-6 col-12">
                            <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" placeholder='Password' class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 col-lg-6 col-12">
                            <label htmlFor="exampleInputPassword1" class="form-label">Confirm Password</label>
                            <input type="password" placeholder='Confirm Password' class="form-control" id="exampleInputPassword1" />
                        </div>
                    </div>
                    <div class="mb-3">
                    </div>

                    <button type="submit" class="btn btn-primary">Sign Up</button>
                    <span> Already have an acount?</span> <Link to={'/sign-in'}>Sign In</Link>
                </form>
            </div>
        </>
    )
}

export default SignUp