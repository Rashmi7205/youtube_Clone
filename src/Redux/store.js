import {configureStore} from '@reduxjs/toolkit';
import contentSlice from './Slices/contentSlice';

const store = configureStore({
    reducer:{
        contents:contentSlice
    }
})


export default store;