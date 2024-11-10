import { useState } from "react";

const Bookshelf = (props) => {
  const [books, setBooks] = useState([]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const addBook = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
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

        <ul>
          {books.map((book) => {
            return (
              <li key={book.title}>
                {book.title} by {book.author}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
  );
};

export default Bookshelf;
