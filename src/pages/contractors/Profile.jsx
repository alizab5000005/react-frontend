import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/front/Footer'
import Navbar from '../../components/front/Navbar'

const Profile = () => {
    return (
        <>
            <Navbar />

            <div className='container'>
                <div className="d-flex align-items-center p-3 bg-primary">
                    <div className="col-lg-3 col-3">
                        <img style={{ borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqeZDBa0fx2_3cHpIlB9mnIlBBF2Zqoa5-JiGbbncZw4KWhlOTtXJ6TdVRznzcjonInU&usqp=CAU" alt="" />
                    </div>
                    <div className="col-lg-9 col-9">
                        <h5 className='text-dark'>Contractor Name
                            <button data-toggle="modal" data-target="#exampleModal" className='btn btn-secondary ml-4'>Add Work</button></h5>

                    </div>
                </div>






                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form action="">
                                    <input type="file" name="" className='form-conrol mb-3' id="" />

                                    <textarea name="" className='form-control' rows={1} placeholder='desccribe your work'></textarea>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="row mt-2  py-3">
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-white">
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxLghidKLgacmp8ZuWeyu70801C4was1nEg&usqp=CAU" alt="" />

                            </div>
                            <div className="card-body text-dark">
                                <h4>Title</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius aliquid amet. Facere expedita, beatae, iste assumenda delectus laboriosam ex quod tempora cumque, numquam deserunt dolores animi ut ad ipsam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-white">
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxLghidKLgacmp8ZuWeyu70801C4was1nEg&usqp=CAU" alt="" />

                            </div>
                            <div className="card-body text-dark">
                                <h4>Title</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius aliquid amet. Facere expedita, beatae, iste assumenda delectus laboriosam ex quod tempora cumque, numquam deserunt dolores animi ut ad ipsam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-white">
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxLghidKLgacmp8ZuWeyu70801C4was1nEg&usqp=CAU" alt="" />

                            </div>
                            <div className="card-body text-dark">
                                <h4>Title</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius aliquid amet. Facere expedita, beatae, iste assumenda delectus laboriosam ex quod tempora cumque, numquam deserunt dolores animi ut ad ipsam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-white">
                            <div className="card-heade">
                                <img style={{ width: '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxLghidKLgacmp8ZuWeyu70801C4was1nEg&usqp=CAU" alt="" />

                            </div>
                            <div className="card-body text-dark">
                                <h4>Title</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius aliquid amet. Facere expedita, beatae, iste assumenda delectus laboriosam ex quod tempora cumque, numquam deserunt dolores animi ut ad ipsam.</p>
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