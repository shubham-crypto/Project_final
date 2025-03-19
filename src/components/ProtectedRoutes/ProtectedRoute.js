import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";


const ProtectedRoute = ({ element }) => {
    // const { user } = useAuth();
    // const location = useLocation();

    // // if (!user) {
    // //     return <Navigate to="/" state={{ from: location }} />;
    // // }

    return element;
};

export default ProtectedRoute;
