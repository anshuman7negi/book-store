import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
};

export const fetchData = createAsyncThunk('books/fetchData', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XVPKLzU1Xn494BKaBvBq/books');
  return response.data;
});

export const addBookToApi = createAsyncThunk('books/addBookToApi', async (newBookData) => {
  const response = await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XVPKLzU1Xn494BKaBvBq/books',
    newBookData,
  );
  return response.data;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (itemId) => {
  const response = await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XVPKLzU1Xn494BKaBvBq/books/${itemId}`,
  );
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.books = action.payload || [];
      });
  },

});

export default booksSlice.reducer;
