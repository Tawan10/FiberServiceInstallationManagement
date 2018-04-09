import React, { Component } from "react";
import Header from './Header'
import SideBar from './SideBar'

export default class NewOrder extends Component {
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
                  <div className="box-header with-border">
                    <h3 className="box-title">New Order:</h3>
                  </div>
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
                          <table
                            id="example2"
                            className="table table-bordered table-hover dataTable"
                            role="grid"
                            aria-describedby="example2_info"
                          >
                            <thead>
                              <tr role="row">
                                <th
                                  className="sorting_asc"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Rendering engine: activate to sort column descending"
                                  aria-sort="ascending"
                                >
                                  Order ID
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Browser: activate to sort column ascending"
                                >
                                  Order Date
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Platform(s): activate to sort column ascending"
                                >
                                  Customer
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Engine version: activate to sort column ascending"
                                >
                                  Location
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="CSS grade: activate to sort column ascending"
                                >
                                  Status
                                </th>
                                <th
                                  className="sorting_asc"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Rendering engine: activate to sort column descending"
                                  aria-sort="ascending"
                                >
                                  Detail
                                </th>
                                <th
                                  className="sorting_asc"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Rendering engine: activate to sort column descending"
                                  aria-sort="ascending"
                                >
                                  Work Order
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr role="row" className="odd">
                                <td className="sorting_1">Gecko</td>
                                <td className="">Seamonkey 1.1</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td>18.039442, 102.634331</td>
                                <td>PO1S83(16)</td>
                              </tr>
                              <tr role="row" className="even">
                                <td className="sorting_1">Gecko</td>
                                <td className="">Netscape Navigator 9</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td>18.039442, 102.634331</td>
                                <td>PO1S83(16)</td>
                              </tr>
                              <tr role="row" className="odd">
                                <td className="sorting_1">Gecko</td>
                                <td className="">Netscape Browser 8</td>
                                <td>Win 98SE+</td>
                                <td>1.7</td>
                                <td>A</td>
                                <td>18.039442, 102.634331</td>
                                <td>PO1S83(16)</td>
                              </tr>
                              <tr role="row" className="even">
                                <td className="sorting_1">Gecko</td>
                                <td className="">Netscape 7.2</td>
                                <td>Win 95+ / Mac OS 8.6-9.2</td>
                                <td>1.7</td>
                                <td>A</td>
                                <td>18.039442, 102.634331</td>
                                <td>PO1S83(16)</td>
                              </tr>
                              <tr role="row" className="odd">
                                <td className="sorting_1">Gecko</td>
                                <td className="">Mozilla 1.8</td>
                                <td>Win 98+ / OSX.1+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td>18.039442, 102.634331</td>
                                <td>PO1S83(16)</td>
                              </tr>
                              <tr role="row" className="even">
                                <td className="sorting_1">Gecko</td>
                                <td className="">Mozilla 1.7</td>
                                <td>Win 98+ / OSX.1+</td>
                                <td>1.7</td>
                                <td>A</td>
                                <td>18.039442, 102.634331</td>
                                <td>PO1S83(16)</td>
                              </tr>
                              <tr role="row" className="odd">
                                <td className="sorting_1">Gecko</td>
                                <td className="">Mozilla 1.6</td>
                                <td>Win 95+ / OSX.1+</td>
                                <td>1.6</td>
                                <td>A</td>
                                <td>18.039442, 102.634331</td>
                                <td>PO1S83(16)</td>
                              </tr>
                              <tr role="row" className="even">
                                <td className="sorting_1">Gecko</td>
                                <td className="">Mozilla 1.5</td>
                                <td>Win 95+ / OSX.1+</td>
                                <td>1.5</td>
                                <td>A</td>
                                <td>18.039442, 102.634331</td>
                                <td>PO1S83(16)</td>
                              </tr>
                              <tr role="row" className="odd">
                                <td className="sorting_1">Gecko</td>
                                <td className="">Mozilla 1.4</td>
                                <td>Win 95+ / OSX.1+</td>
                                <td>1.4</td>
                                <td>A</td>
                                <td>18.039442, 102.634331</td>
                                <td>PO1S83(16)</td>
                              </tr>
                              <tr role="row" className="even">
                                <td className="sorting_1">Gecko</td>
                                <td className="">Mozilla 1.3</td>
                                <td>Win 95+ / OSX.1+</td>
                                <td>1.3</td>
                                <td>A</td>
                                <td>18.039442, 102.634331</td>
                                <td>PO1S83(16)</td>
                              </tr>
                            </tbody>
                          </table>
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
