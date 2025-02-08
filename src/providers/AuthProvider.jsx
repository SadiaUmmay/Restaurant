import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)
    // create user function
    const createUser = (email, password) => {
        setloading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // signin user function
    const signIn = (email, password) => {
        setloading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout user function
    const logOut = ()=>{
        setloading(false)
        return signOut(auth)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            console.log("currentuser", currentuser)
            setloading(false)
        });
        return () => {
            return unsubscribe;
        }
    }, [])

    const infoData = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={infoData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;