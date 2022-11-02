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
                                <h5 class="card-title">Contractor Name</h5>
                                <Link to={'contractor/Khan'} class="btn btn-primary">View Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-fR0Zx64Qe2yt6dd98UhZxSG8UQnz004XlDMn3yFrWpbKUBwMUpFgZaiFLtINWnYdHw&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Contractor Name</h5>
                                <Link to={'contractor/Khan'} class="btn btn-primary">View Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-fR0Zx64Qe2yt6dd98UhZxSG8UQnz004XlDMn3yFrWpbKUBwMUpFgZaiFLtINWnYdHw&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Contractor Name</h5>
                                <Link to={'contractor/Khan'} class="btn btn-primary">View Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-fR0Zx64Qe2yt6dd98UhZxSG8UQnz004XlDMn3yFrWpbKUBwMUpFgZaiFLtINWnYdHw&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Contractor Name</h5>
                                <Link to={'contractor/Khan'} class="btn btn-primary">View Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-fR0Zx64Qe2yt6dd98UhZxSG8UQnz004XlDMn3yFrWpbKUBwMUpFgZaiFLtINWnYdHw&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Contractor Name</h5>
                                <Link to={'contractor/Khan'} class="btn btn-primary">View Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-fR0Zx64Qe2yt6dd98UhZxSG8UQnz004XlDMn3yFrWpbKUBwMUpFgZaiFLtINWnYdHw&usqp=CAU" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Contractor Name</h5>
                                <Link to={'contractor/Khan'} class="btn btn-primary">View Profile</Link>
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
                                <Link to={'bid/Kitchen'} class="btn btn-primary">View Bid</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Kitchen</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'bid/Kitchen'} class="btn btn-primary">View Bid</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Kitchen</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'bid/Kitchen'} class="btn btn-primary">View Bid</Link>
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
                                <Link to={'bid/Kitchen'} class="btn btn-primary">View Bid</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Kitchen</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'bid/Kitchen'} class="btn btn-primary">View Bid</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div class="card" style={{ width: '100%' }}>
                            <img src="https://media.gettyimages.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?s=612x612" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Kitchen</h5>
                                <p class="card-text">Some quick example text to build on the card.</p>
                                <Link to={'bid/Kitchen'} class="btn btn-primary">View Bid</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <footer class="text-center mt-5 text-lg-start bg-light text-muted">

                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">


                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>




                    <div>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-facebook-f"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-google"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-instagram"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-github"></i>
                        </a>
                    </div>

                </section>



                <section class="">
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>



                            


                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Bids</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Post Bid</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">SignUp</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">SignIn</a>
                                </p>
                            </div>



                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fa fa-home me-3"></i> Address of the Comany's Location</p>
                                <p>
                                    <i class="fa fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i class="fa fa-phone me-3"></i> +923000000000</p>
                            </div>

                        </div>

                    </div>
                </section>

                <div class="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2022 Copyright:
                    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">The Globals.com</a>
                </div>

            </footer>



        </>
    )
}

export default Home