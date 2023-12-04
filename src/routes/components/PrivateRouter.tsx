import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'src/redux/slices/auth.slice';

export default function PrivateRouter({ children }: { children?: React.ReactNode }) {
   const { isAuhthentication, isInitialized, userPermission } = useAuth();

   if (!isAuhthentication && isInitialized && !userPermission) {
      return <Navigate to="/sign-in" replace />;
   }

   return children || <Outlet />;
}
