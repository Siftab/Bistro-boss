import  { createContext, useEffect, useState } from 'react';
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../Firebase/firebase.config';
export const AuthContext= createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
            console.log("current_user is "
            ,currentUser)
        })
        return ()=>unSubscribe()
    },[])
    const authData={
                    user,
                    loading
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;