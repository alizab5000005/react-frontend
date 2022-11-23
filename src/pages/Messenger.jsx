import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Messages from '../components/front/Messages';
import Navbar from '../components/front/Navbar'

const Messenger = () => {

  const name = useParams();
  console.log(name.name);
  return (
    <>
    <Navbar />

    <div className="container" >
      <div className="row p-1" style={{border:'1px solid gray', borderRadius:'10px'}}>
        <div className="col-lg-3 bg-light p-3" style={{height:'475px', overflow:'scroll', overflowX:'hidden'}}>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/admin'}>Admin</Link></h5>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/Contractor1'}>Contractor1</Link></h5>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/Contractor2'}>Contractor2</Link></h5>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/Contractor3'}>Contractor3</Link></h5>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/Contractor4'}>Contractor4</Link></h5>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/Contractor5'}>Contractor5</Link></h5>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/Contractor6'}>Contractor6</Link></h5>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/Contractor7'}>Contractor7</Link></h5>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/Contractor8'}>Contractor8</Link></h5>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/Contractor9'}>Contractor9</Link></h5>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/Contractor10'}>Contractor10</Link></h5>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/Contractor11'}>Contractor11</Link></h5>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/Contractor12'}>Contractor12</Link></h5>
          <h5 style={{borderBottom:'1px solid gray'}}><Link to={'/Contractor13'}>Contractor13</Link></h5>
        </div>
        <div className="col-lg-9">
          <div className="div" style={{height:'420px', overflow:'scroll', overflowX:'hidden'}}>
          {name.name === undefined ? 
          
          <div className='text-center mt-4'>
            click on the username in left to view your conversation with him
          </div>
          
          : <Messages name={name} /> }
          </div>
          
          <form action="" className='d-flex align-items-center'>
            <input name="" placeholder='Wtite your message...' className='form-control' />
            <button className='btn btn-success'>Send</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Messenger