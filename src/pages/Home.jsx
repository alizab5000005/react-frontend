import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/front/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{ height: '600px' }} src="https://img.freepik.com/free-vector/abstract-banner-background-with-red-shapes_1361-3348.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img style={{ height: '600px' }} src="https://img.freepik.com/free-vector/abstract-banner-background-with-red-shapes_1361-3348.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img style={{ height: '600px' }} src="https://img.freepik.com/free-vector/abstract-banner-background-with-red-shapes_1361-3348.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container mt-5">
                <h3>Contractors</h3>
                <div className="row">
                    <div className="col-lg-4 col-6">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-fR0Zx64Qe2yt6dd98UhZxSG8UQnz004XlDMn3yFrWpbKUBwMUpFgZaiFLtINWnYdHw&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'contractor/Khan'} class="btn btn-primary">Mr Khan</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-fR0Zx64Qe2yt6dd98UhZxSG8UQnz004XlDMn3yFrWpbKUBwMUpFgZaiFLtINWnYdHw&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'contractor/Khan'} class="btn btn-primary">Mr Khan</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-fR0Zx64Qe2yt6dd98UhZxSG8UQnz004XlDMn3yFrWpbKUBwMUpFgZaiFLtINWnYdHw&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'contractor/Khan'} class="btn btn-primary">Mr Khan</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-fR0Zx64Qe2yt6dd98UhZxSG8UQnz004XlDMn3yFrWpbKUBwMUpFgZaiFLtINWnYdHw&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'contractor/Khan'} class="btn btn-primary">Mr Khan</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-fR0Zx64Qe2yt6dd98UhZxSG8UQnz004XlDMn3yFrWpbKUBwMUpFgZaiFLtINWnYdHw&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'contractor/Khan'} class="btn btn-primary">Mr Khan</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-fR0Zx64Qe2yt6dd98UhZxSG8UQnz004XlDMn3yFrWpbKUBwMUpFgZaiFLtINWnYdHw&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'contractor/Khan'} class="btn btn-primary">Mr Khan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-2 bg-light mt-5">
                <h3>Contractor Bids</h3>
                <div className="row ">

                    <div className="col-lg-4 col-12">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Kitchen</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'bid/Kitchen'} class="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Kitchen</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'bid/Kitchen'} class="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Kitchen</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'bid/Kitchen'} class="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-2 bg-light mt-5">
                <h3>User Bids</h3>
                <div className="row">

                    <div className="col-lg-4 col-12">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Kitchen</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'bid/Kitchen'} class="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Kitchen</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'bid/Kitchen'} class="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Kitchen</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'bid/Kitchen'} class="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Home