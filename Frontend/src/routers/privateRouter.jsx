import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router';

function PrivateRouter({children}) {
    const {currentUser} = useAuth();
    if(currentUser){
        return children;
    }
  return <Navigate to="/login" replace={true} />;
   
}

export default PrivateRouter;
