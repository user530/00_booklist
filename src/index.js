// React
import React from "react";
import ReactDOM from "react-dom";

// Import CSS
import "./index.css";

// Book list component
const BookList = () => (
  <React.Fragment>
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  </React.Fragment>
);

const Book = () => (
  <React.Fragment>
    <article className="book">
      <BookImg />
      <BookTitle />
      <BookAuthor />
    </article>
  </React.Fragment>
);

const BookImg = () => (
  <React.Fragment>
    <img
      src="https://d2mk45aasx86xg.cloudfront.net/Best_React_Books_Learning_React_by_Alex_Banks_and_Eve_Porcello_2_11zon_98b601256f.webp"
      alt="ReactBookCover"
      width={300}
      height={400}
    />
  </React.Fragment>
);

const BookTitle = () => (
  <React.Fragment>
    <h3>Learning React</h3>
  </React.Fragment>
);

const BookAuthor = () => (
  <React.Fragment>
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      Alex Banks and Eve Porcello
    </h4>
  </React.Fragment>
);

ReactDOM.render(<BookList />, document.getElementById(`root`));
