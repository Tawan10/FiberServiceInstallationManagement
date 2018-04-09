import React, {Component} from 'react';
import Piclogin from '../images/login.jpg'
import { Link } from 'react-router-dom'
export default class Login extends Component {
    render(){
        return (
         <div>
             <Link  to="/dashboard"><img src={Piclogin} hight="100%" width="100%" alt="" /></Link>
         </div>
        )
    }
}