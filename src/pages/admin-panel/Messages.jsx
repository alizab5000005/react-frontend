import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/admin-panel/Footer'
import Sidebar from '../../components/admin-panel/Sidebar'

const Messages = () => {
    return (
        <>
              <div class="wrapper">
                <Sidebar />
                <div class="content-wrapper">
                    <div class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1 class="m-0">Messages</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active">Messages</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="card mx-2">


                                <div class="card-body table-responsive p-0" style={{ height: '330px' }}>
                                    <table class="table table-head-fixed text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Username</th>
                                                <th>Message</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>
                                                Lorem ipsum dolor sit amet consectetur 
                                                adipisicing elit. Vero hic voluptates eius...
                                                <Link to={'/admin/id'}>Read All</Link> 
                                                </td>
                                                <td>Reply / Delete</td>
                                            </tr>
                                         
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>
                                                Lorem ipsum dolor sit amet consectetur 
                                                adipisicing elit. Vero hic voluptates eius...
                                                <Link to={'/admin/id'}>Read All</Link> 
                                                </td>
                                                <td>Reply / Delete</td>
                                            </tr>
                                         
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>
                                                Lorem ipsum dolor sit amet consectetur 
                                                adipisicing elit. Vero hic voluptates eius...
                                                <Link to={'/admin/id'}>Read All</Link> 
                                                </td>
                                                <td>Reply / Delete</td>
                                            </tr>
                                         
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>
                                                Lorem ipsum dolor sit amet consectetur 
                                                adipisicing elit. Vero hic voluptates eius...
                                                <Link to={'/admin/id'}>Read All</Link> 
                                                </td>
                                                <td>Reply / Delete</td>
                                            </tr>
                                         
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>
                                                Lorem ipsum dolor sit amet consectetur 
                                                adipisicing elit. Vero hic voluptates eius...
                                                <Link to={'/admin/id'}>Read All</Link> 
                                                </td>
                                                <td>Reply / Delete</td>
                                            </tr>
                                         
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>
                                                Lorem ipsum dolor sit amet consectetur 
                                                adipisicing elit. Vero hic voluptates eius...
                                                <Link to={'/admin/id'}>Read All</Link> 
                                                </td>
                                                <td>Reply / Delete</td>
                                            </tr>
                                         
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>
                                                Lorem ipsum dolor sit amet consectetur 
                                                adipisicing elit. Vero hic voluptates eius...
                                                <Link to={'/admin/id'}>Read All</Link> 
                                                </td>
                                                <td>Reply / Delete</td>
                                            </tr>
                                         
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default Messages