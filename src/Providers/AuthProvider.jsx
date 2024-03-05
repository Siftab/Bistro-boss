import  { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { auth } from '../Firebase/firebase.config';
export const AuthContext= createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider= new GoogleAuthProvider();

 const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
 }
 const login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }
 const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
 }

//  Google Sign in 
     
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }


    // UserObeserver 
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
            console.log("current_user track in authState "
            ,currentUser)
        })
        return ()=>unSubscribe()
    },[])
    const authData={
                    user,
                    loading,
                    createUser,
                    login,
                    logOut,setUser
                    ,signInWithGoogle

                    
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;