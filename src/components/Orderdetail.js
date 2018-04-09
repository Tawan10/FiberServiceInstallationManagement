import React, { Component } from "react"
import Header from './Header'
import SideBar from './SideBar'
import Picorderdetail from '../images/orderdetail.JPG'

export default class Orderdetail extends Component {
  render() {
    return (
        <div>
            <Header/>
            <SideBar/>
            <div className="content-wrapper">
            <section className="content-header">
              <div className="row">
                <div className="col-md-12">
                  <div className="box">
                
                    <div className="box-body">
                      <div
                        id="example2_wrapper"
                        className="dataTables_wrapper form-inline dt-bootstrap"
                      >
                        <div className="row">
                          <div className="col-sm-6" />
                          <div className="col-sm-6" />
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                          <img src={Picorderdetail} hight="100%" width="100%" alt="" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-5">
                            
                          </div>
                          <div className="col-sm-7">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="example2_paginate"
                            >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
    );
  }
}
