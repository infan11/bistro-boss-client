import { createContext, useEffect, useState } from "react";
import { app } from "../componanates/firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null); 
const auth= getAuth(app)


const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true) 
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()
   /// create user
const createUser = (email, password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email,password)
}

// google signIn

const googleSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth , googleProvider)
}


// sign 
const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email , password)
}
// log Out

const logOut = (email,password) =>{
    setLoading(true)
    return signOut(auth)
}
// upadte profile
const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

 useEffect( () =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        if(currentUser){
            // get Token and store client
            const userInfo = {email: currentUser.email}
            axiosPublic.post("/jwt" ,userInfo)
            .then(res => {
                if(res.data.token){
                    localStorage.setItem("accesstoken" , res.data.token)
                    setLoading(false)
                }
                else{
                    // todo : remove token (if token stored in the client local storeage , cahing , in memory)
                    localStorage.removeItem("access-token")
                    setLoading(false)
                }
            })
        }
        
      
    })
    return() =>{
        return unSubscribe();
    }
},[axiosPublic])
const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn
}

 return (
  <AuthContext.Provider value={authInfo}>

    {children}
  </AuthContext.Provider>
        );
};

export default AuthProvider;