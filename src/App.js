import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import Loading from './assets/images/loading.gif'
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

import SuperAdminInvoiceList from './Screens/SuperAdmin/InvoiceList';
import SuperAdminPages from './Screens/SuperAdmin/Pages';
import SuperAdminEditPages from './Screens/SuperAdmin/EditPages';
import SuperAdminAllUsers from './Screens/SuperAdmin/AllUsers';
import SuperAdminUserDetail from './Screens/SuperAdmin/UserDetail';
import SuperAdminUserTask from './Screens/SuperAdmin/UserTask';
import SuperAdminInvoiceDesign from './Screens/SuperAdmin/Invoice';
import SuperAdminEmailSubscribers from './Screens/SuperAdmin/EmailSubscribers';
import SuperAdminFeedback from './Screens/SuperAdmin/Feedback';
import SuperAdminFeedbackReply from './Screens/SuperAdmin/FeedbackReply';
import SuperAdminEmailTempList from './Screens/SuperAdmin/EmailTempList';
import SuperAdminAddEmailTemplate from './Screens/SuperAdmin/AddEmailTemplate';
import SuperAdminEditEmailTemplate from './Screens/SuperAdmin/EditEmailTemplate';
import SuperAdminPromotions from './Screens/SuperAdmin/Promotions';
import SuperAdminAddPromotions from './Screens/SuperAdmin/Addpromotion';
import SuperAdminBilling from './Screens/SuperAdmin/Billing';

import SuperAdminSettings from './Screens/SuperAdmin/Settings';
import SuperAdminPaypal from './Screens/SuperAdmin/Paypal';
import SuperAdminStripe from './Screens/SuperAdmin/Stripe';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Redirect } from 'react-router'


function App() {
  const [authentication, setAuthState] = useState({
    authenticated: false,
    EmailVerified: false,
    isadmin: false,
    initializing: true
  });

  React.useEffect(() => firebase.auth().onAuthStateChanged(user => {
    if (user) {
      fetch("https://purposewebapp.herokuapp.com/user/getProfile", {
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify({
          Email: user.email,
        })
      }).then(r => r.json().then(data => {

        if (!r.ok) {

        }
        else {
          if (data.result) {
            console.log(data)
            setAuthState({
              authenticated: true,
              EmailVerified: data.result.EmailVerified,
              isadmin: false,
              initializing: false
            })
          }
          else {
            fetch("https://purposewebapp.herokuapp.com/admin/getProfile", {
              method: "POST",
              headers: {
                "content-Type": "application/json"
              },
              body: JSON.stringify({
                Email: user.email,
              })
            }).then(r2 => r2.json().then(data2 => {

              if (!r2.ok) {

              }
              else {
                if (data2.result) {
                  setAuthState({
                    authenticated: false,
                    EmailVerified: true,
                    isadmin: true,
                    initializing: false
                  })
                }
              }
            }))

          }
        }

      }))
    }
    else {
      setAuthState({
        authenticated: false,
        EmailVerified: false,
        isadmin: false,
        initializing: false
      })
    }
  }), [setAuthState]);


  const VerifyEmail = () => {
    
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {

        fetch("https://purposewebapp.herokuapp.com/user/getProfile", {
          method: "POST",
          headers: {
            "content-Type": "application/json"
          },
          body: JSON.stringify({
            Email: user.email,
          })
        }).then(r => r.json().then(data => {
          if (!r.ok) {
          }
          else {
            if (data.result) {
              fetch("https://purposewebapp.herokuapp.com/user/VerifyEmail", {
                method: "POST",
                headers: {
                  "content-Type": "application/json"
                },
                body: JSON.stringify({
                  _id: data.result._id
                })
              })
            }
          }
        }))
      }
    })
  }



  const AuthRedirect = ({ component: Component, ...rest }) => {

    return (
      <Route {...rest} render={props =>
        authentication.authenticated ? <Redirect to={{ pathname: "/EmailVerification" }} /> : [(authentication.isadmin ? <Redirect to={{ pathname: "/AdminDashboard" }} /> : <Component {...props} {...rest} />)]
      }
      />
    )
  }

  const EmailRoute = ({ component: Component, ...rest }) => {

    return (
      <Route {...rest} render={props =>
        !authentication.authenticated ? <Redirect to={{ pathname: "/login" }} /> : [(authentication.EmailVerified === true || authentication.EmailVerified === "true" ? <Redirect to={{ pathname: "/Dashboard" }} /> : <Component {...props} {...rest} />)]
      }
      />
    )
  }

  const ProtectedRoute = ({ component: Component, ...rest }) => {

    return (
      <Route {...rest} render={(props => {
        if (props.location.search.length > 7) {
          console.log(props.location.search)
          VerifyEmail()
          props.history.push('/Dashboard')
          // window.location.reload()
        }
        else {
          console.log("NO PROP")
        }
        return !authentication.authenticated ? <Redirect to={{ pathname: "/login" }} /> : [(authentication.EmailVerified === true || authentication.EmailVerified === "true" ? <Component {...props} {...rest} /> : <Redirect to={{ pathname: "/EmailVerification" }} />)]
      })

      }
      />
    )
  }

  const SuperAdminRoute = ({ component: Component, ...rest }) => {

    return (
      <Route {...rest} render={props =>
        authentication.isadmin ? <Component {...props} {...rest} /> : <Redirect to={{ pathname: "/login" }} />
      }
      />
    )
  }



  if (authentication.initializing) {
    return <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <img src={Loading} />
    </div>
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
      <SuperAdminRoute path='/AdminDashboard' component={SuperAdminAllUsers} />
      <SuperAdminRoute path='/Pages' component={SuperAdminPages} />
      <SuperAdminRoute path='/EditPages' component={SuperAdminEditPages} />
      {/* <SuperAdminRoute path='/AllUsers' component={SuperAdminAllUsers} /> */}
      <SuperAdminRoute path='/UserDetail' component={SuperAdminUserDetail} />
      <SuperAdminRoute path='/UserTask' component={SuperAdminUserTask} />
      <SuperAdminRoute path='/Invoice' component={SuperAdminInvoiceList} />
      <SuperAdminRoute path='/Promotions' component={SuperAdminPromotions} />
      <SuperAdminRoute path='/AddPromotions' component={SuperAdminAddPromotions} />
      <SuperAdminRoute path='/EmailSubscribers' component={SuperAdminEmailSubscribers} />
      <SuperAdminRoute path='/Feedback' component={SuperAdminFeedback} />
      <SuperAdminRoute path='/FeedbackReply' component={SuperAdminFeedbackReply} />
      <SuperAdminRoute path='/EmailTemplateList' component={SuperAdminEmailTempList} />
      <SuperAdminRoute path='/AddEmailTemplate' component={SuperAdminAddEmailTemplate} />
      <SuperAdminRoute path='/EditEmailTemplate' component={SuperAdminEditEmailTemplate} />
      <SuperAdminRoute path='/Billing' component={SuperAdminBilling} />
      <SuperAdminRoute path='/Settings' component={SuperAdminSettings} />
      <SuperAdminRoute path='/Paypal' component={SuperAdminPaypal} />
      <SuperAdminRoute path='/Stripe' component={SuperAdminStripe} />


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
