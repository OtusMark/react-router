import {createContext, useState} from "react";

// @ts-ignore
export const AuthContext = createContext()

export const AuthContextProvider = (props: PropsType) => {
    const [isLoggedIn, setIsLoggedIn] = useState('login')

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}

// types

type PropsType = {
    children: JSX.Element
}