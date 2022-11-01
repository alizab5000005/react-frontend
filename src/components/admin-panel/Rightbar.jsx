import React from 'react'

const Rightbar = () => {
  return (
    <aside id="rightsidebar" className="right-sidebar">
    <ul className="nav nav-tabs sm">
        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#setting"><i className="zmdi zmdi-settings zmdi-hc-spin"></i></a></li>
        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#chat"><i className="zmdi zmdi-comments"></i></a></li>
    </ul>
    <div className="tab-content">
        <div className="tab-pane active" id="setting">
            <div className="slim_scroll">
                <div className="card">
                    <h6>Theme Option</h6>
                    <div className="light_dark">
                        <div className="radio">
                            <input type="radio" name="radio1" id="lighttheme" value="light"  />
                            <label htmlFor="lighttheme">Light Mode</label>
                        </div>
                        <div className="radio mb-0">
                            <input type="radio" name="radio1" id="darktheme" value="dark" />
                            <label htmlFor="darktheme">Dark Mode</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h6>Color Skins</h6>
                    <ul className="choose-skin list-unstyled">
                        <li data-theme="purple"><div className="purple"></div></li>
                        <li data-theme="blue"><div className="blue"></div></li>
                        <li data-theme="cyan"><div className="cyan"></div></li>
                        <li data-theme="green"><div className="green"></div></li>
                        <li data-theme="orange"><div className="orange"></div></li>
                        <li data-theme="blush" className="active"><div className="blush"></div></li>
                    </ul>                                        
                </div>
                <div className="card">
                    <h6>General Settings</h6>
                    <ul className="setting-list list-unstyled">
                        <li>
                            <div className="checkbox">
                                <input id="checkbox1" type="checkbox" />
                                <label htmlFor="checkbox1">Report Panel Usage</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox2" type="checkbox"  />
                                <label htmlFor="checkbox2">Email Redirect</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox3" type="checkbox"  />
                                <label htmlFor="checkbox3">Notifications</label>
                            </div>                        
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox4" type="checkbox" />
                                <label htmlFor="checkbox4">Auto Updates</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox5" type="checkbox"  />
                                <label htmlFor="checkbox5">Offline</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox6" type="checkbox"  />
                                <label htmlFor="checkbox6">Location Permission</label>
                            </div>
                        </li>
                    </ul>
                </div>                
            </div>                
        </div>       
        <div className="tab-pane right_chat" id="chat">
            <div className="slim_scroll">
                <div className="card">
                    <ul className="list-unstyled">
                        <li className="online">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img className="media-object " src="assets/images/xs/avatar4.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">Sophia <small className="float-right">11:00AM</small></span>
                                        <span className="message">There are many variations of passages of Lorem Ipsum available</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>                            
                        </li>
                        <li className="online">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img className="media-object " src="assets/images/xs/avatar5.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">Grayson <small className="float-right">11:30AM</small></span>
                                        <span className="message">All the Lorem Ipsum generators on the</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>                            
                        </li>
                        <li className="offline">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img className="media-object " src="assets/images/xs/avatar2.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">Isabella <small className="float-right">11:31AM</small></span>
                                        <span className="message">Contrary to popular belief, Lorem Ipsum</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>                            
                        </li>
                        <li className="me">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img className="media-object " src="assets/images/xs/avatar1.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">John <small className="float-right">05:00PM</small></span>
                                        <span className="message">It is a long established fact that a reader</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>                            
                        </li>
                        <li className="online">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img className="media-object " src="assets/images/xs/avatar3.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">Alexander <small className="float-right">06:08PM</small></span>
                                        <span className="message">Richard McClintock, a Latin professor</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>                            
                        </li>                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</aside>
  )
}

export default Rightbar