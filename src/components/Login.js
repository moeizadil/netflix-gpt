import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
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

      <form className="w-3/12 p-12 absolute  mt-24 bg-black text-white my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-xl p-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="my-2 p-2 w-full"
            type="text"
            placeholder="name"
          ></input>
        )}
        <input
          className="my-2 p-2 w-full"
          type="text"
          placeholder="email"
        ></input>
        <input
          className="my-2 p-2 w-full"
          type="password"
          placeholder="password"
        ></input>
        <button className="my-4 p-2 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Are you new to netflix? Signup now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
