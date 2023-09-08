import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import {getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
export const UserContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => setUser(currentUser))
        return()=>unSubscribe();
    },[])
    
    const userInfo = {
        user,
        createUser,
        loginUser,
        logOut,
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProviders;