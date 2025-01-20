import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ()=>{
    const navigate = useNavigate()
    const user = useSelector(store=>store.user)
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
    }
    return(
    <div className="absolute z-10 w-screen px-8 py-2 bg-gradient-to-b flex from-black justify-between">
        <img
        className="w-44 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        ></img>
        { user && (
        <div className="flex">
        <span className="text-white text-lg font-bold mr-4 p-8 ">{ "Hello, "+ user.displayName}</span>
        <button className=" p-2 h-10 m-6 rounded-lg text-white bg-red-800 " onClick={handleSignOut}> Logout</button>
        </div>
        )
}
    </div>
    )
}
export default Header