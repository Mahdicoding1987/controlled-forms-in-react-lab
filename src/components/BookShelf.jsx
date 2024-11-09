import { useState } from "react";

const Bookshelf = (props) => {
  const [books, setBooks] = useState("add a book");

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const addBook = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks(`${newBook.title} By: ${newBook.author}`);
    setNewBook({ title: "", author: "" });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Tile: </label>
          <input id="title" name="title" value={newBook.title} onChange={addBook} />
          <label htmlFor="author">Author: </label>
          <input id="author" name="author" value={newBook.author} onChange={addBook} />
          <button type="submit">Submit your book</button>
        </form>
        <p>{books}</p>
      </div>
      <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
  );
};

export default Bookshelf;
