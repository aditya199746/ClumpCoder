import React,{useState} from 'react'
import {GoogleLogin,GoogleLogout} from "react-google-login"
import Home from "./Home"

export default function Login() {
    const clintId="558083941192-l8rlqu5c5j53puhdjfisl4s1mk7fks7v.apps.googleusercontent.com";
    const [showLoginButton,setShowLoginButton]=useState(true);
    const [showLogoutButton,setShowLogoutButton]= useState(false);
    const [showHome, setShowHome]=useState(false)

    const onLoginSuccess= (res)=>{
        console.log("Login Success", res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
        setShowHome(true);
    }

    const onFailureSuccess=(res)=>{
        console.log("Login Failed",res);
    }

    const onSignoutSuccess = ()=>{
        alert("signed out successfully")
        setShowLoginButton(true);
        setShowLogoutButton(false);
        setShowHome(false);
    }
    return (
        <div>
        {showLoginButton ? 
            <div className="signInButton">
            <div>Sign In with google account </div>
                <GoogleLogin
                clientId={clintId}
                buttonText="Login"
                onSuccess={onLoginSuccess}
                onFailure={onFailureSuccess}
                cookiePolicy={'single_host_origin'}
            />
            </div>
             :null 
        }
        {
            showHome?<Home />:null
        }
        {showLogoutButton?
            <GoogleLogout
                clintId={clintId}
                buttonText="Logout"
                onLogoutSuccess={onSignoutSuccess}
            /> : null
        }
        </div>
    )
}
