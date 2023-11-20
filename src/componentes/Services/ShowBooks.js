import React from "react";
import { useSelector } from "react-redux";

const ShowBooks = () => {
  const { books } = useSelector((state) => state.showBooksReducer);
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
            {books.map((book, index) => (
              <tr key={book?.id}>
                <td>{index + 1}</td>
                <td>{book?.title}</td>
                <td>{book?.name}</td>
                <td>
                  <button className="edit_button">Edit</button>
                  <button className="delete_button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBooks;
