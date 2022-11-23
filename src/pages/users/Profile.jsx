import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/front/Footer'
import Navbar from '../../components/front/Navbar'

const Profile = () => {

    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)
    const [video, setVideo] = useState(null)

    const onImage1Change = (event) => {
       document.getElementById('1').style.color = 'orange';
    }
    const onImage2Change = (event) => {
        document.getElementById('2').style.color = 'orange';
        if (event.target.files && event.target.files[0]) {
            setImage2(URL.createObjectURL(event.target.files[0]));
        }
    }
    const onImage3Change = (event) => {
        document.getElementById('3').style.color = 'orange';
       
    }
    const onImage4Change = (event) => {
        document.getElementById('4').style.color = 'orange';
       
    }
    const onImage5Change = (event) => {
        document.getElementById('5').style.color = 'orange';
       
    }
 

    return (
        <>
            <Navbar />

            <div className='container'>
                <div className="d-flex align-items-center p-3 bg-primary">
                    <div className="col-lg-3 col-3">
                        <img style={{ borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqeZDBa0fx2_3cHpIlB9mnIlBBF2Zqoa5-JiGbbncZw4KWhlOTtXJ6TdVRznzcjonInU&usqp=CAU" alt="" />
                    </div>
                    <div className="col-lg-9 col-9">
                        <h5 className='text-dark'>User Name
                        </h5>
                    </div>
                </div>










                <h3 className='mt-4'>My Bids</h3>
               
                <div className="container" >
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
            </div>

            <div class="container-fluid py-5">
                <div class="container">
                    <div class="row align-items-end mb-4">
                        <div class="col-lg-6">
                            <h6 class="text-secondary font-weight-semi-bold text-uppercase mb-3">Complaints</h6>
                            <h1 class="section-title mb-3">Let Us Know About Your Complaints</h1>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-lg-12 mb-5 mb-lg-0">
                            <div class="contact-form">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" novalidate="novalidate">


                                    <div class="control-group">
                                        <textarea class="form-control p-4" rows="6" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div>
                                        <button class="btn btn-primary btn-block py-3 px-5" type="submit" id="sendMessageButton">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div class="container-fluid py-5">
                <div class="container">
                    <div class="row align-items-end mb-4">
                        <div class="col-lg-6">
                            <h6 class="text-secondary font-weight-semi-bold text-uppercase mb-3">Feedbacks</h6>
                            <h1 class="section-title mb-3">Let Us Know About Your Feedbacks</h1>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-lg-12 mb-5 mb-lg-0">
                            <div class="contact-form">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" novalidate="novalidate">

                                    <label htmlFor="">Rating</label>
                                    <div class="control-group ml-2 my-2">
                                        <label class=" btn-file" >
                                            <i id='1' className='fa fa-star'></i>
                                            <input type="checkbox" onChange={onImage1Change} style={{ display: 'none' }} name="" className='form-conrol mb-3' id="" />
                                        </label>
                                        <label class=" btn-file" >
                                            <i id='2' className='fa fa-star'></i>
                                            <input type="checkbox" onChange={onImage2Change} style={{ display: 'none' }} name="" className='form-conrol mb-3' id="" />
                                        </label>
                                        <label class=" btn-file" >
                                            <i id='3' className='fa fa-star'></i>
                                            <input type="checkbox" onChange={onImage3Change} style={{ display: 'none' }} name="" className='form-conrol mb-3' id="" />
                                        </label>
                                        <label class=" btn-file" >
                                            <i id='4' className='fa fa-star'></i>
                                            <input type="checkbox" onChange={onImage4Change} style={{ display: 'none' }} name="" className='form-conrol mb-3' id="" />
                                        </label>
                                        <label class=" btn-file" >
                                            <i id='5' className='fa fa-star'></i>
                                            <input type="checkbox" onChange={onImage5Change} style={{ display: 'none' }} name="" className='form-conrol mb-3' id="" />
                                        </label>
                                        
                                    </div>
                                    <label htmlFor="">Review</label>
                                    <div class="control-group">
                                        <textarea class="form-control p-4"  id="message" placeholder="Review" required="required" data-validation-required-message="Please enter your message"></textarea>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div>
                                        <button class="btn btn-primary btn-block py-3 px-5" type="submit" id="sendMessageButton">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Profile