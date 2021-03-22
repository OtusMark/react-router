import React, {useContext} from "react";
import {AuthContext} from "../Context/AuthContext";
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute: React.FC<any> = ({children, ...resProps}) => {
    // @ts-ignore
    const {isLoggedIn} = useContext(AuthContext)

    return (
        <Route {...resProps} render={(props) => {
            return isLoggedIn ? children : <Redirect to="/"/>
        }}/>
    )
}