import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./ShowBooksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.showBooksReducer.books.length);
  console.log(books);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const title = e.target.title.value;
    const newBook = {
      id: books + 1,
      title,
      name,
    };
    dispatch(addBook(newBook));
    navigate("/showBooks", { replace: true });
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
