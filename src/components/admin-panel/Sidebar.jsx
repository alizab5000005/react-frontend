import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside id="leftsidebar" className="sidebar">
    <div className="navbar-brand">
        <button className="btn-menu ls-toggle-btn" type="button"><i className="zmdi zmdi-menu"></i></button>
    </div>
    <div className="menu">
        <ul className="list">
            <li>
                <div className="user-info">
                     <div className="detail">
                        <h4>Name</h4>
                        <small>Super Admin</small>                        
                    </div>
                </div>
            </li>
            <li className=""><Link to={'/admin/dashboard'}><i className="zmdi zmdi-home"></i><span>Dashboard</span></Link></li>
            
            <li className=""><Link to={'/admin/contractors'}><i className="zmdi zmdi-home"></i><span>Contractors</span></Link></li>
            
            <li className=""><Link to={'/admin/users'}><i className="zmdi zmdi-home"></i><span>Users</span></Link></li>
            
            <li className=""><Link to={'/admin/complaints'}><i className="zmdi zmdi-home"></i><span>Complaints</span></Link></li>
            
            
        </ul>
    </div>
</aside>
  )
}

export default Sidebar