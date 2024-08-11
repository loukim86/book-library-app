import { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkFunction } from "../../redux/books/bookSlice";
import { addBook } from "../../redux/books/actionCreators";
import booksData from "../../data/books.json";
import createBookWithID from "../../utils/createBookWithID";
import "./BookForm.css";

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  function handleAddRandomBook() {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    dispatch(addBook(createBookWithID(randomBook, "random")));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author }, "manual")));
      setTitle("");
      setAuthor("");
    }
  }

  function handleAddRandomViaAPI() {
    dispatch(thunkFunction);
  }

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
        <button type="button" onClick={handleAddRandomViaAPI}>
          Add Random via API
        </button>
      </form>
    </div>
  );
}

export default BookForm;
