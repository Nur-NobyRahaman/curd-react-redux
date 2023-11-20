import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: new Date().getTime().toString(),
      title: "Bangladesh storey",
      name: "Nur-Noby",
    },
    {
      id: new Date().getTime().toString(),
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
          state.books= [...state.books,action.payload]
      }
  },
});

export const { showBooks,addBook } = booksSlice.actions;
export default booksSlice.reducer;
