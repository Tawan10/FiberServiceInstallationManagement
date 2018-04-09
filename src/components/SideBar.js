import React, {Component} from 'react';
import { Link } from 'react-router-dom'
export default class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">Dashborad</li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>Sale Order</span>
                                <span className="pull-right-container">
                                <span className="label label-primary pull-right"></span>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><Link  to="/neworder"><a href="pages/layout/top-nav.html"><small className="label pull-right bg-yellow">12</small><i className="fa fa-circle-o"></i> New Order</a></Link></li>
                                <li><Link  to="/completeorder"><a href="pages/layout/boxed.html"><small className="label pull-right bg-green">8</small><i className="fa fa-circle-o"></i> Complate Order</a></Link></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>Work Order</span>
                                <span className="pull-right-container">
                                <span className="label label-primary pull-right"></span>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a><small className="label pull-right bg-yellow">4</small><i className="fa fa-circle-o"></i> New</a></li>
                                <li><a><small className="label pull-right bg-green">5</small><i className="fa fa-circle-o"></i> On Progress</a></li>
                                <li><a><small className="label pull-right bg-blue">3</small><i className="fa fa-circle-o"></i> Purpose</a></li>
                                <li><a><small className="label pull-right bg-red">3</small><i className="fa fa-circle-o"></i> Rejected</a></li>
                                <li><a><small className="label pull-right bg-green">5</small><i className="fa fa-circle-o"></i> Complated</a></li>
                            </ul>
                        </li>
                        <li>
                        <Link to="/teammanagement"><a>
                            <span> Team Management</span>
                            <span className="pull-right-container">
                            </span>
                        </a></Link>
                        </li>
                        <li>
                       <Link to="/logout"> <a href="#">
                            <span>Logout</span>
                            <span className="pull-right-container">
                            </span>
                        </a>
                        </Link>
                        </li>
                    </ul>
                </section>
            </aside> 
        )
    }
}
