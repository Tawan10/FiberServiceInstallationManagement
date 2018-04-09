import React, { Component } from "react";
import Header from './Header'
import SideBar from './SideBar'

export default class Dashboard extends Component {
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
                  <h3 className="box-title">Today Sales Order:</h3>
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
                                Customer Name
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="example2"
                                rowspan="1"
                                colspan="1"
                                aria-label="Engine version: activate to sort column ascending"
                              >
                                Address
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="example2"
                                rowspan="1"
                                colspan="1"
                                aria-label="CSS grade: activate to sort column ascending"
                              >
                                Order Package
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
                                ONU Location
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
                                Spiltter Name
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row" className="odd">
                              <td className="sorting_1">7400129987</td>
                              <td className="">6/4/2018</td>
                              <td>6 Sanesalee Phongsali</td>
                              <td>Speed 1-5 Mbps</td>
                              <td>A</td>
                              <td>18.039442, 102.634331</td>
                              <td>PO1S83(16)</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">7400129988</td>
                              <td className="">6/4/2018</td>
                              <td>Tasanee Wangchuenchom</td>
                              <td>18 Thangon Saythany</td>
                              <td>Speed 6-10 Mbps</td>
                              <td>18.130348, 102.621275</td>
                              <td>PO1S12(16)</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">7400129989</td>
                              <td className="">6/4/2018</td>
                              <td>Tan Kewasit</td>
                              <td>43 Saiylom Chanthaboury</td>
                              <td>Speed 21-50 Mbps</td>
                              <td>17.990431, 102.639602</td>
                              <td>PO3S17(24)</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">7400129991</td>
                              <td className="">6/4/2018</td>
                              <td>Chayan Yawanopas</td>
                              <td>44 Thangon Saythany</td>
                              <td>Speed 11-20 Mbps</td>
                              <td>18.101683, 102.688480</td>
                              <td>PO1S73(16)</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">7400130002</td>
                              <td className="">6/4/2018</td>
                              <td>Pongpao Taitong</td>
                              <td>33 Saiylom Chanthaboury</td>
                              <td>A</td>
                              <td>18.039442, 102.634331</td>
                              <td>PO1S83(16)</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">7400129992</td>
                              <td className="">6/4/2018</td>
                              <td>Jumpol Taitong</td>
                              <td>76 Dongphosi ardsaiyfong</td>
                              <td>Speed 11-20 Mbps</td>
                              <td>17.896400, 102.712541</td>
                              <td>PO8S71(8)</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">7400129995</td>
                              <td className="">6/4/2018</td>
                              <td>Somporn Aunjai</td>
                              <td>85 Phonehorng Bounnuea</td>
                              <td>Speed 11-20 Mbps</td>
                              <td>15.152054, 105.627569</td>
                              <td>PO6S18(24)</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">7400129997</td>
                              <td className="">6/4/2018</td>
                              <td>Tasanee Wangchuenchom</td>
                              <td>63 Phonehorng Bounnuea</td>
                              <td>Speed 6-10 Mbps</td>
                              <td>15.103003, 105.652975</td>
                              <td>PO4S14(24)</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">7400129999</td>
                              <td className="">6/4/2018</td>
                              <td>Wilai Shechua</td>
                              <td>85 Phonehorng Bounnuea</td>
                              <td>Speed 11-20 Mbps</td>
                              <td>17.873078, 102.717176</td>
                              <td>PO4S14(24)</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">7400130000</td>
                              <td className="">6/4/2018</td>
                              <td>Chayan Yawanopas</td>
                              <td>63 Phonehorng Bounnuea</td>
                              <td>Speed 50-100 Mbps</td>
                              <td>17.977738, 102.622307</td>
                              <td>PO8S71(8)</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="box-header with-border">
                            <h3 className="box-title">Today Work Order:</h3>
                        </div>
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
                                Customer Name
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="example2"
                                rowspan="1"
                                colspan="1"
                                aria-label="Engine version: activate to sort column ascending"
                              >
                                Address
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="example2"
                                rowspan="1"
                                colspan="1"
                                aria-label="CSS grade: activate to sort column ascending"
                              >
                                Order Package
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
                                ONU Location
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
                                Spiltter Name
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row" className="odd">
                              <td className="sorting_1">5200129990</td>
                              <td className="">Wilai Shechua</td>
                              <td>NTU installation</td>
                              <td>Normal</td>
                              <td>6/4/2018</td>
                              <td>19/4/2018</td>
                              <td>Pattanan Pongpao</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">5200129991</td>
                              <td className="">Chayan Yawanopas</td>
                              <td>NTU installation</td>
                              <td>Normal</td>
                              <td>6/4/2018</td>
                              <td>11/4/2018</td>
                              <td>Surisa Namfon</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">5200129992</td>
                              <td className="">Jumpol Taitong</td>
                              <td>Cabling work</td>
                              <td>Normal</td>
                              <td>6/4/2018</td>
                              <td>15/4/2018</td>
                              <td>Pattanan Pongpao</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">5200129993</td>
                              <td className="">Netscape 7.2</td>
                              <td>Win 95+ / Mac OS 8.6-9.2</td>
                              <td>1.7</td>
                              <td>A</td>
                              <td>18.039442, 102.634331</td>
                              <td>PO1S83(16)</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">5200129994</td>
                              <td className="">Mozilla 1.8</td>
                              <td>Win 98+ / OSX.1+</td>
                              <td>1.8</td>
                              <td>A</td>
                              <td>18.039442, 102.634331</td>
                              <td>PO1S83(16)</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">5200129995</td>
                              <td className="">Mozilla 1.7</td>
                              <td>Win 98+ / OSX.1+</td>
                              <td>1.7</td>
                              <td>A</td>
                              <td>18.039442, 102.634331</td>
                              <td>PO1S83(16)</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">5200129998</td>
                              <td className="">Mozilla 1.6</td>
                              <td>Win 95+ / OSX.1+</td>
                              <td>1.6</td>
                              <td>A</td>
                              <td>18.039442, 102.634331</td>
                              <td>PO1S83(16)</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">5200129999</td>
                              <td className="">Mozilla 1.5</td>
                              <td>Win 95+ / OSX.1+</td>
                              <td>1.5</td>
                              <td>A</td>
                              <td>18.039442, 102.634331</td>
                              <td>PO1S83(16)</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">5200130000</td>
                              <td className="">Mozilla 1.4</td>
                              <td>Win 95+ / OSX.1+</td>
                              <td>1.4</td>
                              <td>A</td>
                              <td>18.039442, 102.634331</td>
                              <td>PO1S83(16)</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">5200130001</td>
                              <td className="">Mozilla 1.3</td>
                              <td>Win 95+ / OSX.1+</td>
                              <td>1.3</td>
                              <td>A</td>
                              <td>18.039442, 102.634331</td>
                              <td>PO1S83(16)</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="box-header with-border">
                            <h3 className="box-title">Over Due Work Order:</h3>
                        </div>
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
                                Customer Name
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="example2"
                                rowspan="1"
                                colspan="1"
                                aria-label="Engine version: activate to sort column ascending"
                              >
                                Address
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="example2"
                                rowspan="1"
                                colspan="1"
                                aria-label="CSS grade: activate to sort column ascending"
                              >
                                Order Package
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
                                ONU Location
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
                                Spiltter Name
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
