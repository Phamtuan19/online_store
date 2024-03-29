import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import authService from '@Page/auth/service';

const actionRefreshToken = createAsyncThunk('auth/refreshToken', async () => {
   console.log('refresh token');
});

const actionGetUser = createAsyncThunk('auth/getUser', async () => {
   try {
      const res = await authService.getUser();
      console.log(res);
      return res.data;
   } catch (error: any) {
      throw new Error(error);
   }
});

interface InitialState<U> {
   user: Array<U> | null;
   isAuhthentication: boolean;
   isInitialized: boolean;
   userPermission: any | null;
   loading: boolean;
}

const initialState: InitialState<any> = {
   user: null,
   isAuhthentication: false,
   isInitialized: false,
   userPermission: null,
   loading: false,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      actionLoginReducer: (state, action) => {
         const { role, ...user } = action.payload;
         state.user = user;
         state.userPermission = null;
         state.isInitialized = true;
         state.isAuhthentication = true;
      },

      actionLogoutReducer: (state) => {
         state.user = null;
         state.userPermission = null;
         state.isAuhthentication = false;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(actionGetUser.fulfilled, (state, action) => {
            const { role, ...user } = action.payload;
            state.user = user;
            state.userPermission = null;
            state.isInitialized = true;
            state.isAuhthentication = true;
         })
         .addCase(actionGetUser.rejected, (state, _) => {
            state.isInitialized = true;
            state.isAuhthentication = false;
         });
   },
});

const { actionLoginReducer, actionLogoutReducer } = authSlice.actions;

export const useAuth = () => {
   const dispatch: any = useDispatch();
   const auth = useSelector((state: RootState) => state.auth);

   const authRefreshToken = () => {
      return dispatch(actionRefreshToken());
   };

   const authLogin = (data: any) => {
      dispatch(actionLoginReducer(data));
   };

   const authGetUser = () => {
      dispatch(actionGetUser());
   };

   const authLogout = () => {
      localStorage.removeItem(import.meta.env.VITE_AUTH_TOKEN);
      dispatch(actionLogoutReducer());
   };

   return { ...auth, authRefreshToken, authLogin, authGetUser, authLogout };
};

export default authSlice;
