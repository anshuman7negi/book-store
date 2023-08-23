import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
};

export const fetchData = createAsyncThunk('books/fetchData', async () => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XVPKLzU1Xn494BKaBvBq/books');
    return response.data;
  }
  catch (error) {
    throw error;
  }
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled,(state,action)=>{
      state.books = action.payload;
    });
  }
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
