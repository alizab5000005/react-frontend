import React from 'react'
import Rightbar from '../../components/admin-panel/Rightbar'
import RightSideIcons from '../../components/admin-panel/RightSideIcons'
import Sidebar from '../../components/admin-panel/Sidebar'

const Dashboard = () => {

    //window.location.reload();

    return (
        <>
            <RightSideIcons />
            <Sidebar />
            <Rightbar />

            <section className="content">
                <div className="body-scroll">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-12">
                                <h2>Dashboard</h2>
                                <ul className="breadcrumb mt-2">
                                    <h4>Today's Contracts</h4>
                                </ul>
                                <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc"></i></button>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="table-responsive">
                                        <table className="table table-hover product_item_list c_table theme-color mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Contactor</th>
                                                    <th data-breakpoints="sm xs">User</th>
                                                    <th data-breakpoints="xs">Amount</th>
                                                    <th data-breakpoints="xs md">Status</th>
                                                    <th data-breakpoints="sm xs md">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><h5>Simple Black Clock</h5></td>
                                                    <td><span className="text-muted">randomised words even slightly believable</span></td>
                                                    <td>$16.00</td>
                                                    <td><span className="col-green">In Stock</span></td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><h5>Brone Candle</h5></td>
                                                    <td><span className="text-muted">It is a long established  will be distracted</span></td>
                                                    <td>$15.00</td>
                                                    <td><span className="col-amber">Low Stock</span></td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><h5>Wood Simple Clock</h5></td>
                                                    <td><span className="text-muted">There passages of Lorem Ipsum available</span></td>
                                                    <td>$16.00</td>
                                                    <td><span className="col-amber">Low Stock</span></td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><h5>Unero Small Bag</h5></td>
                                                    <td><span className="text-muted">It is a long established fact that a distracted</span></td>
                                                    <td>$23.00</td>
                                                    <td><span className="col-red">Out Of Stock</span></td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><h5>Simple Black Clock</h5></td>
                                                    <td><span className="text-muted">Contrary to popular belief, simply random text</span></td>
                                                    <td>$16.00</td>
                                                    <td><span className="col-green">In Stock</span></td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><h5>Brone Lamp Glasses</h5></td>
                                                    <td><span className="text-muted">All the Lorem Ipsum generators on predefined chunks</span></td>
                                                    <td>$12.00</td>
                                                    <td><span className="col-green">In Stock</span></td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><h5>Simple Black Clock</h5></td>
                                                    <td><span className="text-muted">established fact that a be distracted</span></td>
                                                    <td>$22.00</td>
                                                    <td><span className="col-red">Out Of Stock</span></td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-green"><i className="zmdi zmdi-edit"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-default waves-effect waves-float btn-sm waves-red"><i className="zmdi zmdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="body">
                                        <ul className="pagination pagination-primary m-b-0">
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);"><i className="zmdi zmdi-arrow-left"></i></a></li>
                                            <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);">4</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);"><i className="zmdi zmdi-arrow-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Dashboard