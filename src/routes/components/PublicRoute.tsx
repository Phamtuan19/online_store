// import { useAuth } from '@Redux/slices/auth.slice';
import { Outlet } from 'react-router-dom';

function PublicRouter({ children }: { children?: React.ReactNode }) {
   // const { isAuhthentication, isInitialized } = useAuth();

   // if (isAuhthentication && isInitialized) {
   //    return <Navigate to="/" />;
   // }

   return children || <Outlet />;
}
export default PublicRouter;
