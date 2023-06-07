import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authSlice from './auth/authSlice';

const reducers = combineReducers({
  auth: authSlice,
});

export const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});
