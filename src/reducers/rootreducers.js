// import {combineReducers} from 'redux';
import sandwichReducer from './sandwichreducer';
import riceReducer from './ricereducer';
import { configureStore } from '@reduxjs/toolkit'


// Automatically adds the thunk middleware and the Redux DevTools extension
export const store = configureStore({
    // Automatically calls `combineReducers`
    reducer: {
      sandwich: sandwichReducer, //get state from usersreducer
      rice: riceReducer   //get state from usersreducer
    }
  })