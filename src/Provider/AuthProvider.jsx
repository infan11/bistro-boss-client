import { createContext, useEffect, useState } from "react";
import { app } from "../componanates/firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

export const AuthContext = createContext(null); 
const auth= getAuth(app)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true) 
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
        console.log("current user" , currentUser)
        setLoading(false)
    })
    return() =>{
        return unSubscribe();
    }
},[])
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