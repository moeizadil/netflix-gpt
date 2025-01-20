import { useRef, useState } from "react";
import Header from "./Header";
import {validateLogin} from "../utils/validate"
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
const name = useRef(null)
const email = useRef(null)
const password = useRef(null)
const navigate = useNavigate()
const dispatch = useDispatch()


  const [isSignInForm, setIsSignInForm] = useState(true);
const [errorMessage,setErrorMessage] = useState(null)
  const handleSignIn = ()=>{
    console.log("Email",email.current.value)
    console.log("password",password.current.value)
    const message = validateLogin(email.current.value,password.current.value)
    setErrorMessage(message)

    if(message=== null){
        if(isSignInForm){   
            //sign in 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("sign in success",user)
                navigate("/browse")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setErrorMessage(errorMessage)
            });
        }
        if(!isSignInForm){
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("Sign up success",auth.currentUser)
                // ...

                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    // Profile updated!
                    const {uid,email,displayName} = auth.currentUser;
                    dispatch(addUser({uid: uid, email:email, displayName:displayName}))
                    navigate("/browse")   
    
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
                // ..
            });
        }
    }
  }

  const toggleSignInForm = () => {
    if(!isSignInForm){
        name.current.value=null
    }
    email.current.value=null
    password.current.value=null

    setErrorMessage(null)
    
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          src="https://d3ghupt9z9s6o0.cloudfront.net/app/uploads/2017/04/13100509/Netflix-Background.jpg"
          alt="logo"
        ></img>
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 p-12 absolute  mt-24 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-xl p-2 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            className="my-2 p-2 w-full rounded-lg"
            type="text"
            placeholder="name"
          ></input>
        )}
        <input
        ref={email}
          className="my-2 p-2 w-full rounded-lg"
          type="text"
          placeholder="email"
        ></input>
        <input
        ref={password}
          className="my-2 p-2 w-full rounded-lg"
          type="password"
          placeholder="password"
        ></input>
        <p className="text-red-800 p-2 m-2 text-lg font-bold">
           {errorMessage} 
        </p>
        <button onClick={handleSignIn} className="my-4 p-2 bg-red-700 w-full rounded-lg font-bold text-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer text-white font-bold text-lg" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Are you new to netflix? Signup now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
