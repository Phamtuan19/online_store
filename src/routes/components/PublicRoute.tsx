import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'src/redux/slices/auth.slice';

function PublicRouter({ children }: { children?: React.ReactNode }) {
   const { isAuhthentication, isInitialized } = useAuth();

   if (isAuhthentication && isInitialized) {
      return <Navigate to="/" />;
   }

   return children || <Outlet />;
}
export default PublicRouter;
