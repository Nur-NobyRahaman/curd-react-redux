import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: new Date().getTime().toString(),
      title: "Bangladesh storey",
      name: "Nur-Noby",
    },
    {
      id: 1 + new Date().getTime().toString(),
      title: "Bangladesh storey",
      name: "Nur-Noby",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    deleteBook: (state, action) => {
      const filteredBooks = state.books.filter(
        (book) => book.id !== action.payload
      );
      state.books = filteredBooks;
    },
  },
});

export const { showBooks, addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
