import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/front/Navbar'

const Profile = () => {
    return (
        <>
        <Navbar />
    
        <div className='container' style={{marginTop:'70px'}}>
            <div className="d-flex align-items-center p-3 bg-secondary">
                <div className="col-lg-3 col-3">
                    <img style={{ borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqeZDBa0fx2_3cHpIlB9mnIlBBF2Zqoa5-JiGbbncZw4KWhlOTtXJ6TdVRznzcjonInU&usqp=CAU" alt="" />
                </div>
                <div className="col-lg-9 col-9">
                    <h5 className='text-white'>Contractor Name
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-primary ms-4'>Add Work</button></h5>

                </div>
            </div>





            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Project</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <input type="file" name="" className='form-control mb-3' id="" />
                                <textarea name="" className='form-control' placeholder='desccribe your work'></textarea>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-2 bg-light py-3">
                <div className="col-lg-6">
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
                <div className="col-lg-6">
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
                <div className="col-lg-6">
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
                <div className="col-lg-6">
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
        </>
    )
}

export default Profile