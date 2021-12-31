import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMessageErr, clearMessage } from '../features/Login/LoginSlice';
import LoginDataService from './login.service';
import UserDataService from './users.service';
import { toast } from 'react-toastify';

export const login = createAsyncThunk(
    'auth/login',
    async (account, thunkAPI) => {
        try {
            thunkAPI.dispatch(clearMessage());
            const result = await LoginDataService.login(account);
            //Đăng nhập thành công
            localStorage.setItem('user', JSON.stringify(result.data.content));
            localStorage.setItem(
                'tokenAccess',
                result.data.content.accessToken
            );
            return result.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessageErr(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const addUser = createAsyncThunk(
    'users/create',
    async (account, thunkAPI) => {
        try {
            const result = await UserDataService.addUser(account);

            return result.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            toast.error(message);

            return thunkAPI.rejectWithValue();
        }
    }
);
