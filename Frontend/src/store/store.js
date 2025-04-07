import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './feature/cart/cartSlice'
import booksApi from './feature/books/booksApi'
import orderApi from './feature/order/orderApi'

export default configureStore({
  reducer: {
    "cart": cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware,orderApi.middleware),
})