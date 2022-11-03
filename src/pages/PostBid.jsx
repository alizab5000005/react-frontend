import React from 'react'
import Navbar from '../components/front/Navbar'
import { Link } from 'react-router-dom'

const PostBid = () => {
  return (
    <>
    <Navbar />
    <div className="container">
        <form className="p-5">
            <h3>Post Bid</h3>
            <div className="row">

                <div class="mb-3 col-lg-6 col-12">
                    <label htmlFor="name" class="form-label">Category</label>
                    <select name="" class="form-control">
                        <option value="">Choose Category</option>
                    </select>
                </div>
                <div class="mb-3 col-lg-3 col-12">
                    <label htmlFor="name" class="form-label">Size</label>
                    <input type="text" placeholder="size" class="form-control" />
                </div>
                <div class="mb-3 col-lg-3 col-12">
                    <label htmlFor="name" class="form-label">No. of Bathrooms</label>
                    <input type="text" placeholder='Number of Bathrooms' class="form-control" />
                </div>
            </div>
            <div className="row">

                <div class="mb-3 col-lg-3 col-12">
                    <label htmlFor="name" class="form-label">Price Starting</label>
                    <input type="text" placeholder='Price Starting' class="form-control" />
                </div>
                <div class="mb-3 col-lg-3 col-12">
                    <label htmlFor="name" class="form-label">Price Ending</label>
                    <input type="text" placeholder='Price Ending' class="form-control" />
                </div>
                <div class="mb-3 col-lg-6 col-12">
                    <label htmlFor="name" class="form-label">Timeline</label>
                    <input type="text" placeholder='Timeline' class="form-control" />
                </div>
            </div>
            <div className="row">
            <div class="mb-3 col-lg-12 col-12">
            <label htmlFor="name" class="form-label">Description</label>
                <textarea name="" className='form-control' placeholder='Description'></textarea>
                </div>
            </div>
            <div class="mb-3">
            </div>

            <button type="submit" class="btn btn-primary">Post</button>
            
        </form>
    </div>
</>
  )
}

export default PostBid