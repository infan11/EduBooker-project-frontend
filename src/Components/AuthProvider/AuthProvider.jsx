
import { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const login = (email ,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password)
    }
    const logout = (email , password) => {
        setLoading(true);
        return signOut(auth)
    }
    const googleUser = (email , password) => {
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }
   const forgotpassword = (email , password) => {
    setLoading(false);
    return sendPasswordResetEmail(auth , email , password)
   }
   const updateUserProfile = ({name, photo}) => {
    return updateProfile(auth.currentUser , {
        displayName : name , photoURL: photo
    })
   }
   useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth , currentUser => {
        setUser(currentUser)
        console.log("all ready user have" , currentUser);
        setLoading(false)
    })
     return () => 
        onSubscribe()
         
   } , [])
const authInfo = {
    createUser ,
    user,
    loading,
    login,
    logout,
    forgotpassword,
    googleUser,
    updateUserProfile
}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;