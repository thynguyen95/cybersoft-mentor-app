const { createSlice } = require('@reduxjs/toolkit');

const users = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        getAllUser: (state, action) => {
            return (state = action.payload);
        },
    },
});

const { reducer, actions } = users;
export const { getAllUser } = actions;
export default reducer;
