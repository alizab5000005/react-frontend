import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/admin-panel/Footer'
import Sidebar from '../../components/admin-panel/Sidebar'

const FullMessage = () => {
    return (
        <>
              <div class="wrapper">
                <Sidebar />
                <div class="content-wrapper">
                    <div class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1 class="m-0">Full Message</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active">FullMessage</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="card mx-2">


                                <div class="card-body table-responsive p-0" >
                                    <table class="table table-head-fixed text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Username</th>
                                                <th>Message</th>
                                              
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mr Khan</td>
                                                <td>
                                                <textarea className='form-control p-4' rows={3} readOnly>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum, qui error vitae unde quaerat sed accusantium enim corrupti impedit dignissimos sint accusamus suscipit et aliquid obcaecati quidem ea. Numquam.
                                                </textarea>
                                               
                                                </td>
                                               
                                            </tr>
                                            <tr>
                                                <td>Admin</td>
                                                <td>
                                                <textarea className='form-control p-4'  placeholder='Write your reply'>
                                                    
                                                </textarea>
                                                 <button className='btn btn-primary btn-block mt-1'>Send</button>
                                                </td>
                                               
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

export default FullMessage