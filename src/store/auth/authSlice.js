import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import * as url from '../../helpers/url_helper';
import axiosApi from '../../helpers/api_helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = createAsyncThunk('auth/loginUser', async payload => {
  return await axiosApi
    .post(url.POST_LOGIN, payload, {addAuth: false})
    .then(async response => {
      console.log(JSON.stringify(response) + ' dhfudh');
      if (response.status >= 200 || response.status <= 299) {
        await AsyncStorage.setItem('authToken', response.data.token);
        return response.data.token;
      } else {
        console.log('coming in error');
        return rejectWithValue(response.data);
      }
    })
    .catch(err => {
      console.log(err);
      return rejectWithValue(response.data);
    });
});

export const forgotPasswordAction = createAsyncThunk(
  'auth/forgotPassword',
  async payload => {
    console.log(payload + ' here is the paylaod');
    return await axiosApi
      .post(url.POST_FORGOT_PASSWORD + '?email=' + payload.username, payload, {
        addAuth: false,
      })
      .then(async response => {
        if (response.status >= 200 || response.status <= 299) {
          console.log(response.data);
          return response.data;
        }
        throw response.data;
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  },
);

export const resetPasswordAction = createAsyncThunk(
  'auth/resetPassword',
  async payload => {
    console.log(payload + ' here is the paylaod');
    return await axiosApi
      .put(
        `${url.POST_RESET_PASSWORD}?token=9ab69bf6-df15-4ba6-9a24-e2f143ce1f2ac44d58c1-bf1b-489a-84cf-08a8ad63cfaa&password=${payload.password}`,
        {
          addAuth: false,
        },
      )
      .then(async response => {
        console.log(JSON.stringify(response) + ' dhfjdshfjdhfjdafdjkshf');
        if (response.status >= 200 || response.status <= 299) {
          return response.data;
        } else {
          console.log('coming in error');
          return rejectWithValue(response.data);
        }
      })
      .catch(err => {
        return rejectWithValue(response.data);
      });
  },
);

const initialState = {
  loading: false,
  isAuthenticated: false,
  authToken: '',
  email: '',
  resetToken: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state, {payload}) => {
      return {...state, loading: true};
    },
    [loginUser.rejected]: (state, {payload}) => {
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    },
    [loginUser.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        authToken: payload,
      };
    },
  },
});

export default authSlice.reducer;
