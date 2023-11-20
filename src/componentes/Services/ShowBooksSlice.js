import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "Bangladesh storey",
      name: "Nur-Noby",
    },
    {
      id: 2,
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
    editBook: (state, action) => {
      const editBook = state.books.map((book) => {
        if (book.id === action.payload.id) {
          return {
            ...book,
            name: action.payload.name,
            title: action.payload.title,
          };
        }
        return book;
      });
      state.books = editBook;
    },
  },
});

export const { showBooks, addBook, deleteBook, editBook } = booksSlice.actions;
export default booksSlice.reducer;
