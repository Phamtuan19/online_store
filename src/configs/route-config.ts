import * as yup from 'yup';

const ROUTE_PATH = {
   // route path client
   HOME: '/',

   // route path admin
   ADMIN: '/admin',

   // route path sign-in
   SIGN_IN: '/sign-in',
} as const;

export const routePathSchema = yup.string().oneOf(Object.values(ROUTE_PATH)).required();

export type RoutePathPropsType = yup.InferType<typeof routePathSchema>;

export default ROUTE_PATH;
