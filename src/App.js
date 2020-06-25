import React, { useState, useContext } from 'react';
import './App.css';
import Dashboard from './Screens/Dashboard';
import Notes from './Screens/Notes';
import EmailVerification from './Screens/EmailVerification';
import StickyNotes from './Screens/StickyNotes';
import AddNotes from './Screens/AddNotes';
import AddStickyNotes from './Screens/AddStickyNotes';
import Notifications from './Screens/Notifications';
import PayBills from './Screens/PayBills';
import CreatePayBill from './Screens/CreatePayBill';
import Contacts from './Screens/Contacts';
import Profile from './Screens/Profile';
import AllTasks from './Screens/AllTasks';
import CreateContact from './Screens/CreateContact';
import AddTask from './Screens/AddTask';
import BirthDay from './Screens/BirthDay';
import BirthdayForm from './Screens/BirthdayForm';
import Calender from './Screens/Calender';
import Users from './Screens/Users';
import CreateUser from './Screens/CreateUser';
import ProfileNotification from './Screens/ProfilesTab/Notificatoins';
import ProfileVerification from './Screens/ProfilesTab/Verification';
import ProfileAccount from './Screens/ProfilesTab/Account';
import ProfilePayment from './Screens/ProfilesTab/Payment';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ForgetPassword from './Screens/ForgetPassword';
import firebase from './config/firebaseConfig';
import page404 from './Screens/page404';
import 'bootstrap/dist/css/bootstrap.min.css';

import SuperAdminDashboard from './Screens/SuperAdmin/Dashboard';
import SuperAdminPages from './Screens/SuperAdmin/Pages';
import SuperAdminEditPages from './Screens/SuperAdmin/EditPages';
import SuperAdminAllUsers from './Screens/SuperAdmin/AllUsers';
import SuperAdminInvoiceDesign from './Screens/SuperAdmin/Invoice';
import SuperAdminEmailSubscribers from './Screens/SuperAdmin/EmailSubscribers';
import SuperAdminFeedback from './Screens/SuperAdmin/Feedback';
import SuperAdminFeedbackReply from './Screens/SuperAdmin/FeedbackReply';
import SuperAdminAddEmailTemplate from './Screens/SuperAdmin/AddEmailTemplate';
import SuperAdminEditEmailTemplate from './Screens/SuperAdmin/EditEmailTemplate';

import SuperAdminPromotions from './Screens/SuperAdmin/Promotions';
import SuperAdminEmailTempList from './Screens/SuperAdmin/EmailTempList';





import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Redirect } from 'react-router'


function App() {
  const [count, setCount] = useState(true);
  const [EmailVerified, setUserEmail_Verified] = useState(null);
  const [userdata, setUser_data] = useState(null);


  // function getCurrentUser() {
  //   firebase.auth().onAuthStateChanged(function (user) {
  //     if (user) {
  //       fetch("https://purposewebapp.herokuapp.com/user/getProfile", {
  //         method: "POST",
  //         headers: {
  //           "content-Type": "application/json"
  //         },
  //         body: JSON.stringify({
  //           Email: user.email,
  //         })
  //       }).then(r => r.json().then(data => {
  //         if (!r.ok) {
  //         }
  //         else {
  //           // setCount(false)
  //           setUser_data(data.result)
  //           // setUserEmail_Verified(data.result.EmailVerified)
  //           console.log(data)
  //           console.log("FUNCTION CHALA OR USER HAI")
  //         }
  //       }))
  //     }
  //     else {
  //       setUserEmail_Verified(null)
  //       setUser_data(null)
  //       console.log("FUNCTION CHALA BUT USER NULL HAI")
  //       // setCount(false)
  //     }
  //   })
  // }
  // count && getCurrentUser();

  const AuthRedirect = ({ component: Component, ...rest }) => {

    const isEmail = localStorage.getItem('EmailVerified');
    var SuperAdmin = localStorage.getItem('SuperAdmin');
    return (
      <Route {...rest} render={props =>
        isEmail ? <Redirect to={{ pathname: "/EmailVerification" }} /> : [(SuperAdmin ? <Redirect to={{ pathname: "/AdminDashboard" }} /> : <Component {...props} {...rest} />)]
      }
      />
    )
  }

  const EmailRoute = ({ component: Component, ...rest }) => {

    const isEmail = localStorage.getItem('EmailVerified');
    return (
      <Route {...rest} render={props =>
        !isEmail ? <Redirect to={{ pathname: "/login" }} /> : [(isEmail === true || isEmail === "true" ? <Redirect to={{ pathname: "/Dashboard" }} /> : <Component {...props} {...rest} />)]
        // isEmail === true || isEmail === "true" ? <Redirect to={{ pathname: "/Dashboard" }} /> : <Component {...props} {...rest} />
      }
      />
    )
  }

  const ProtectedRoute = ({ component: Component, ...rest }) => {

    var isEmail = localStorage.getItem('EmailVerified');

    return (
      <Route {...rest} render={(props => {
        if (props.location.search.length > 6) {
          console.log(props.location.search)

          localStorage.setItem('EmailVerified', true)
          isEmail = true
          props.history.push('/Dashboard')
        }
        else {
          console.log("NO PROP")
        }
        return !isEmail ? <Redirect to={{ pathname: "/login" }} /> : [(isEmail === true || isEmail === "true" ? <Component {...props} {...rest} /> : <Redirect to={{ pathname: "/EmailVerification" }} />)]
      })

      }
      />
    )
  }

  const SuperAdminRoute = ({ component: Component, ...rest }) => {

    var SuperAdmin = localStorage.getItem('SuperAdmin');

    return (
      <Route {...rest} render={props =>
        SuperAdmin ? <Component {...props} {...rest} /> : <Redirect to={{ pathname: "/login" }} />
      }
      />
    )
  }




  return <Router>
    <Switch>
      <ProtectedRoute path='/AddStickyNotes' component={AddStickyNotes} />
      <ProtectedRoute path='/AddNotes' component={AddNotes} />
      <ProtectedRoute path='/StickyNotes' component={StickyNotes} />
      <ProtectedRoute path='/ProfilePayment' component={ProfilePayment} />
      <ProtectedRoute path='/ProfileAccount' component={ProfileAccount} />
      <ProtectedRoute path='/ProfileVerification' component={ProfileVerification} />
      <ProtectedRoute path='/ProfileNotification' component={ProfileNotification} />
      <ProtectedRoute path='/CreateUser' component={CreateUser} />
      <ProtectedRoute path='/Users' component={Users} />
      <ProtectedRoute path='/Calender' component={Calender} />
      <ProtectedRoute path='/CreatePayBill' component={CreatePayBill} />
      <ProtectedRoute path='/BirthdayForm' component={BirthdayForm} />
      <ProtectedRoute path='/BirthDay' component={BirthDay} />
      <ProtectedRoute path='/AddTask' component={AddTask} />
      <ProtectedRoute path='/CreateContact' component={CreateContact} />
      <ProtectedRoute path='/AllTasks' component={AllTasks} />
      <ProtectedRoute path='/Profile' component={Profile} />
      <ProtectedRoute path='/Contacts' component={Contacts} />
      <ProtectedRoute path='/PayBill' component={PayBills} />
      <ProtectedRoute path='/Notification' component={Notifications} />
      <ProtectedRoute path='/Notes' component={Notes} />
      <ProtectedRoute path='/Dashboard' component={Dashboard} />

      {/* Super Admin Routes */}
      <SuperAdminRoute path='/AdminDashboard' component={SuperAdminDashboard} />
      <SuperAdminRoute path='/Pages' component={SuperAdminPages} />
      <SuperAdminRoute path='/EditPages' component={SuperAdminEditPages} />
      <SuperAdminRoute path='/AllUsers' component={SuperAdminAllUsers} />
      <SuperAdminRoute path='/Invoice' component={SuperAdminInvoiceDesign} />
      <SuperAdminRoute path='/Promotions' component={SuperAdminPromotions} />
      <SuperAdminRoute path='/EmailSubscribers' component={SuperAdminEmailSubscribers} />
      <SuperAdminRoute path='/Feedback' component={SuperAdminFeedback} />
      <SuperAdminRoute path='/FeedbackReply' component={SuperAdminFeedbackReply} />
      <SuperAdminRoute path='/EmailTemplateList' component={SuperAdminEmailTempList} />
      <SuperAdminRoute path='/AddEmailTemplate' component={SuperAdminAddEmailTemplate} />
      <SuperAdminRoute path='/EditEmailTemplate' component={SuperAdminEditEmailTemplate} />




      <EmailRoute path='/EmailVerification' component={EmailVerification} />

      <AuthRedirect path='/login' component={Login} />
      <AuthRedirect path='/Signup' component={Signup} />
      <AuthRedirect path='/ForgetPassword/' component={ForgetPassword} />
      <AuthRedirect exact path='/' component={Home} />
      <Route path='*' component={page404} />
    </Switch>
  </Router>
}


export default App;
