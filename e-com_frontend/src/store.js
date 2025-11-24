import { configureStore } from '@reduxjs/toolkit'
import { userInfo } from './slices/userSlices'

export const store = configureStore({
  reducer: {
    userInfo
  },
})