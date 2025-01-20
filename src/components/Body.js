import {createBrowserRouter} from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in,
              const {uid,email,displayName} = user;
              dispatch(addUser({uid: uid, email:email, displayName:displayName}))
            } 
            else {
              // User is signed out
              dispatch(removeUser())
            }
          });
    },[])
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login></Login>
        },
        {
            path: "/browse",
            element:  <Browse></Browse>
        },

    ])

    return(
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
    )
}

export default Body
