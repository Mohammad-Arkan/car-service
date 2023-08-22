import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import {createContext, useState, useEffect} from 'react'

const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password ) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {         
                console.log('logged in user insite auth state observer', currentUser)
                setUser(currentUser)
                setLoading(false)
            })
            return ()=> {
                unSubscribe();
            }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        logIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;