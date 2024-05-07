import React from 'react';
import { Navigate, Outlet } from "react-router-dom"

export const PublicRoute = ({ isLoggedIn }) => {

    if (isLoggedIn) {
        return <Navigate to={'/'} />
    }


    return <Outlet />

}