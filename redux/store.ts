import { baseApi } from './api/baseApi';
// import { reducer } from './rootReducer';
import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './errorSlice';

export const store = configureStore({

  reducer: {
    errorMessage: errorReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch