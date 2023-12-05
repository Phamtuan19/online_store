import { Outlet, RouteObject, useRoutes } from 'react-router-dom';
import PublicRouter from './components/PublicRoute';
import PrivateRouter from './components/PrivateRouter';
import ROUTE_PATH from '@Config/route-config';

const routes = (): RouteObject[] => {
   return [
      /**
       * Route page client Public
       */
      {
         path: '/',
         element: (
            <PrivateRouter>
               <h1 className='text-sm'>Trang Home</h1>,
            </PrivateRouter>
         ),
         children: [
            {
               index: true,
               element: <h1>Trang Home</h1>,
            },
         ],
      },

      /**
       * Route page admin Private
       */
      //   {
      //      path: ROUTE_PATH.ADMIN,
      //      element: (
      //         <PrivateRouter>
      //            <Outlet />
      //         </PrivateRouter>
      //      ),
      //      children: [
      //         {
      //            index: true,
      //            element: <h1>Trang Doashboard</h1>,
      //         },
      //      ],
      //   },

      /**
       * Route Public
       * Route sign-in
       * Route
       */
      {
         path: ROUTE_PATH.SIGN_IN,
         element: (
            <PublicRouter>
               <h1>Trang singin</h1>
            </PublicRouter>
         ),
      },

      /**
       * Nod found route 404
       */

      {
         path: '*',
         element: (
            <h1>
               404 <br />
               Trang web không tồn tại
            </h1>
         ),
      },
   ];
};

export default function Routers() {
   return useRoutes(routes());
}
