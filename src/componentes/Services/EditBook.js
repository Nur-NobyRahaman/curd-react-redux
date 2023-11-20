import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addBook, editBook } from "./ShowBooksSlice";

const EditBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState(location.state.title);
  const [name, setName] = useState(location.state.name);
  const [id, setId] = useState(location.state.id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const title = e.target.title.value;
    const updateBook = {
      id,
      title,
      name,
    };
    dispatch(editBook(updateBook));
    navigate("/showBooks", { replace: true });
    e.target.reset();
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Edit Book</h1>
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
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            name="name"
            id="authorName"
          />
          <br /> <br />
          <label
            style={{ fontSize: "large", fontWeight: "bold" }}
            htmlFor="bookTitle"
          >
            Book Title :{" "}
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            type="text"
            name="title"
            id="bookTitle"
          />
          <br />
          <br />
          <button style={{ fontSize: "medium" }} type="submit">
            Edit Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
