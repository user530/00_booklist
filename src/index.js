// Import React
import React from "react";
import { createRoot } from "react-dom/client";

// Import CSS
import "./index.css";

// Import Data
import { booksData } from "./data";

// Import book component
import BookComponent from "./Book";

// Book list component
const BookList = () => (
  <React.Fragment>
    <section className="booklist">
      {booksData.map((book) => (
        <BookComponent key={book.id} {...book} />
      ))}
    </section>
  </React.Fragment>
);

// Render Component
const container = document.getElementById(`root`);
const root = createRoot(container);
root.render(<BookList />);
