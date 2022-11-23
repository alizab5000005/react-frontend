import React from 'react'
import Navbar from '../components/front/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/front/Footer'

const BidDetails = () => {
    return (
        <>
            <Navbar />
            <div class="container-fluid bg-primary py-5 mb-5">
                <div class="container py-5">
                    <div class="row align-items-center py-4">
                        <div class="col-md-6 text-center text-md-left">
                            <h1 class="display-4 mb-4 mb-md-0 text-secondary text-uppercase">Bedroom Details</h1>
                        </div>
                        <div class="col-md-6 text-center text-md-right">
                            <div class="d-inline-flex align-items-center">
                                <Link class="btn btn-sm btn-outline-light" to={'/'}>Home</Link>
                                <i class="fas fa-angle-double-right text-light mx-2"></i>
                                <a class="btn btn-sm btn-outline-light disabled" href="">Bedroom Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" >

                <div className="card bg-light bidsd p-4 " style={{ height: '830px' }}>
                    <div className="card-heade  bid-details">
                        <img src="https://thumbs.dreamstime.com/b/luxury-home-bedroom-comfortable-stylish-decor-30716135.jpg" alt="" />

                    </div>
                    <div className="card-body text-dark">
                        <p><strong>Size:</strong> 12x12</p>
                        <p><strong>Attached Bathrooms:</strong> 2</p>

                        <p><strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iste, sint veritatis dolorem sit perferendis voluptate iure officiis quod dicta magnam archi
                            tecto fuga cum facere deleniti ea, obcaecati deserunt eaque aliquam. lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Iste, sint veritatis dolorem sit perferendis voluptate iure officiis
                            quod dicta magnam architecto fuga cum facere deleniti ea, obcaecati deserunt eaque aliquam.</p>

                        <p><strong>Price Ranage:</strong> 10,000 PKR - 30,000 PKR</p>
                        <p><strong>Timeline:</strong> 10 days - 20 days</p>
                        <p><strong>Status:</strong> Pending</p>
                        <p><strong>By:</strong> <Link className='text-blue' to={'/user/username'}>username</Link></p>


                    </div>
                </div>


                <div>
                    <h3 className='mt-4'>Contractors Bids</h3>
                    <table className='table table-bordered'>
                        <thead>
                            <th>Contractor</th>
                            <th>Amount</th>
                            <th>Timeline</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Contractor1</td>
                                <td>10,000 PKR</td>
                                <td>2 days</td>
                                <td>Accept / Reject</td>
                            </tr>
                            <tr>
                                <td>Contractor2</td>
                                <td>12,000 PKR</td>
                                <td>2 days</td>
                                <td>Accept / Reject</td>
                            </tr>
                            <tr>
                                <td>Contractor3</td>
                                <td>13,000 PKR</td>
                                <td>2 days</td>
                                <td>Accept / Reject</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div>
                    <h3 className='mt-4'>Contractor Bid</h3>

                    <form action="" className='row mb-4'>
                        <div className="form-group col-lg-6">
                            <input type="text" className="form-control" placeholder='Amount' />
                        </div>
                        <div className="form-group col-lg-6">
                            <input type="text" className="form-control" placeholder='Timeline' />
                        </div>
                        <div className="form-group col-lg-12">
                            <textarea className="form-control" placeholder='Description'></textarea>
                        </div>
                        <div className="form-group col-lg-12">
                            <button className='btn btn-primary btn-block'>Submit</button>
                        </div>
                    </form>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default BidDetails