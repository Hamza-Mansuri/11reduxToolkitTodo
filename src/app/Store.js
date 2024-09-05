import {configureStore} from '@reduxjs/toolkit';

import todoReducer from '../features/todo/TodoSlice'; //ye pura store ke lie setup kiya.


                                // object pass hoga.
export const store = configureStore({

    reducer: todoReducer,

})