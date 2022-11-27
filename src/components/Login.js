import React from 'react'
//stylesheets
import '../assets/stylesheets/Login.css';
//images
import asperLogo from '../assets/images/Asper.png'
import { Button } from '@mui/material';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from '../assets/contextapi/StateProvider';
import { actionTypes } from '../assets/contextapi/reducer';
const provider = new GoogleAuthProvider();
const auth = getAuth();

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () =>{

    
    signInWithPopup(auth, provider).then(result=>{

        console.log(result.user)
        dispatch({
            type: actionTypes.SET_USER,
            user:result.user,
        })

    }).catch((error)=>{
             // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorCode,error,email ,errorMessage,credential)
    alert(errorMessage)
        })
    }
    

  return (
    <div className='login'>
        <div className="login__container">
            <img src={asperLogo} alt='...'/>
            <h1>
                Sign In to Apser Discussion Forum
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, quo!</p>
            <Button onClick={signIn}>
                Sign In with Google
            </Button>

        </div>

    </div>
  )
}

export default Login