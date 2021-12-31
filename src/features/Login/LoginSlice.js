const { createSlice } = require('@reduxjs/toolkit');

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: [],
    reducers: {
        setMessageErr: (state, action) => {
            return { message: action.payload };
        },
        clearMessage: () => {
            return { message: '' };
        },
    },
});

const { reducer, actions } = loginSlice;
export const { loginAccount, setMessageErr, clearMessage } = actions;
export default reducer;
