import React from 'react'
import Navbar from '../components/front/Navbar'
import { Link } from 'react-router-dom'

const Bids = () => {
    return (
        <>
            <Navbar />
            <div className="container" style={{ marginTop: '100px' }}>
                <div className="row">
                    <div className="col-lg-6 " >
                        <div className="card bg-light p-4 bids" style={{ height: '400px' }}>
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://thumbs.dreamstime.com/b/luxury-home-bedroom-comfortable-stylish-decor-30716135.jpg" alt="" />

                            </div>
                            <div className="card-body text-dark">
                                <p style={{ fontSize: '30px', marginTop: '-20px' }}><Link to={'/bid/Bedroom'}>Bedroom</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 " >
                        <div className="card bg-light p-4 bids" style={{ height: '400px' }}>
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" alt="" />

                            </div>
                            <div className="card-body text-dark">
                                <p style={{ fontSize: '30px', marginTop: '-20px' }}><Link to={'/bid/Kitchen'}>Kitchen</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bids