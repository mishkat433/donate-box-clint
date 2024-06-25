import { createSlice } from "@reduxjs/toolkit";


type companyType = {
    errorMessage: string;
};

const initialDataState: companyType = {
    errorMessage: ""
};

const errorSlice = createSlice({
    name: "errorSlice",
    initialState: initialDataState,
    reducers: {
        setError: (state, action) => {
            state.errorMessage = action.payload;
        }
    }
});
export const { setError } = errorSlice.actions

export default errorSlice.reducer;