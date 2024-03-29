// import { useAuth } from '@Redux/slices/auth.slice';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PrivateRouter({ children }: { children?: React.ReactNode }): React.ReactNode {
   // const { isAuhthentication, isInitialized, userPermission } = useAuth();

   // if (!isAuhthentication && isInitialized && !userPermission) {
   //    return <Navigate to="/sign-in" replace />;
   // }

   return children || <Outlet />;
}
