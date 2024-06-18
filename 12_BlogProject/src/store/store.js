import {configureStore} from "@reduxjs/toolkit"
import Reducer from './authSlice'


export const store = configureStore({
  reducer: {auth: Reducer}
})