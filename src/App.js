import React, { Component } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Orderdetail from './components/Orderdetail'
import  Workorderdetail from './components/Workorderdetail'
import NewOrder from './components/NewOrder'
import CompleteOrder from './components/CompleteOrder'
import Teammanagement from './components/Teammanagement'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route path="/workorderdetail" component={Workorderdetail} />
          <Route path="/neworder" component={NewOrder} />
          <Route path="/completeorder" component={CompleteOrder} />
          <Route path="/orderdetail" component={Orderdetail} />
          <Route path="/teammanagement" component={Teammanagement} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Login} />
        </Switch>
  
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
