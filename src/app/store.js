import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './../features/Users/UserSlice';
import loginReducer from '../features/Login/LoginSlice';

const rootReducer = {
    users: usersReducer,
    login: loginReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
