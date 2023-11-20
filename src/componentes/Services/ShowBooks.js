import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./ShowBooksSlice";
import { Link } from "react-router-dom";

const ShowBooks = () => {
  const { books } = useSelector((state) => state.showBooksReducer);
  console.log(books)
  const dispatch = useDispatch();
  return (
    <div className="showBooks_container">
      <div>
        <h1>List of Books</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return (
                <tr key={book?.id}>
                  <td>{book?.id}</td>
                  <td>{book?.title}</td>
                  <td>{book?.name}</td>
                  <td>
                    <Link to={"/editBook"} state={{ id: book?.id, title:book?.title, name:book?.name }}>
                      <button className="edit_button">Edit</button>
                    </Link>
                    <button
                      onClick={() => dispatch(deleteBook(book?.id))}
                      className="delete_button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBooks;
