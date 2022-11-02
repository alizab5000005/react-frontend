import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg h5  navbar-light bg-primary">
      <div class="container-fluid">
        <a class="navbar-bran p-2 my-auto" href="#">
          <img style={{ borderRadius: '50%', width: '60px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" alt="" />
        </a>
        <button class="navbar-toggler bg-light me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span style={{marginTop:'-6px', marginLeft:'-9px'}} class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={'/'} class="nav-link ">Home</Link>
            </li>
            <li class="nav-item">
            <Link to={'/bids'} class="nav-link ">Bids</Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to={'/admin/dashboard'}>Admin</Link></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>

              </ul>
            </li>

          </ul>
          <form class="d-flex align-items-center">
          <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={'/messenger'} class="nav-link " aria-current="page">Messenger</Link>
            </li>
            <li class="nav-item">
              <Link to={'/post-bid'} class="nav-link " aria-current="page">Post Bid</Link>
            </li>
            <li class="nav-item">
              <Link to={'/sign-up'} class="nav-link " aria-current="page">Signup</Link>
            </li>
            <li class="nav-item">
              <Link to={'/sign-in'} class="nav-link " aria-current="page">Signin</Link>
            </li>
          

          </ul>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar