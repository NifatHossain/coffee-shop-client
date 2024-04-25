import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "./firebase.config";

export const AuthContext= createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const registerUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser=(email,password) =>{
        return  signInWithEmailAndPassword(auth, email, password)
    }

    const authValues={user, registerUser, logInUser}
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;