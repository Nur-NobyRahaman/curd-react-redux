import React from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./ShowBooksSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const title = e.target.title.value;
    const newBook = {
      id: new Date().getTime().toString(),
      title,
      name,
    };
    dispatch(addBook(newBook));
    e.target.reset();
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Please add books</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
      >
        <div>
          <label
            htmlFor="authorName"
            style={{ fontSize: "large", fontWeight: "bold" }}
          >
            Author Name :{" "}
          </label>
          <input required type="text" name="name" id="authorName" />
          <br /> <br />
          <label
            style={{ fontSize: "large", fontWeight: "bold" }}
            htmlFor="bookTitle"
          >
            Book Title :{" "}
          </label>
          <input required type="text" name="title" id="bookTitle" />
          <br />
          <br />
          <button style={{ fontSize: "medium" }} type="submit">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
