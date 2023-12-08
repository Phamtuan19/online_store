import ROUTE_PATH, { type RoutePathPropsType } from '@Config/route-config';

interface SettingConfigProps {
   SIGN_IN_REDIRECT_URL: RoutePathPropsType;
   SIGN_OUT_REDIRECT_URL: RoutePathPropsType;
   UNAUTHORIZED_REDIRECT_URL: RoutePathPropsType;
   ACCESS_TOKEN_KEY: string;
   REFRESH_TOKEN_KEY: string;
}

const SETTINGS_CONFIG: SettingConfigProps = {
   /**
    * The URL to redirect to after a successful sign-in.
    */
   SIGN_IN_REDIRECT_URL: ROUTE_PATH.HOME,

   /**
    * The URL to redirect to after a successful sign-out.
    */
   SIGN_OUT_REDIRECT_URL: ROUTE_PATH.HOME,

   /**
    * The URL to redirect to when a user is not authorized
    */
   UNAUTHORIZED_REDIRECT_URL: ROUTE_PATH.HOME,

   /**
    * The key used to store the access token in local storage.
    */
   ACCESS_TOKEN_KEY: 'access-token',

   /**
    * The key used to store the refresh token in local storage.
    */
   REFRESH_TOKEN_KEY: 'refresh-token',
};

export default SETTINGS_CONFIG;
