// React
import React from "react";
import ReactDOM from "react-dom";

// Import CSS
import "./index.css";

const booksData = [
  {
    id: 1,
    imgUrl: `https://d2mk45aasx86xg.cloudfront.net/Best_React_Books_Learning_React_by_Alex_Banks_and_Eve_Porcello_2_11zon_98b601256f.webp`,
    title: `Learning React`,
    author: `Alex Banks and Eve Porcello`,
  },
  {
    id: 2,
    imgUrl: `https://m.media-amazon.com/images/P/B0B6XFT4RH.01._SCLZZZZZZZ_SX500_.jpg`,
    title: `Interesting Facts For Curious Minds`,
    author: `Jordan Moore`,
  },
  {
    id: 3,
    imgUrl: `https://m.media-amazon.com/images/P/1951806409.01._SCLZZZZZZZ_SX500_.jpg`,
    title: `Life Skills for Teens: How to Cook, Clean, Manage Money`,
    author: `Karen Harris`,
  },
  {
    id: 4,
    imgUrl: `https://m.media-amazon.com/images/P/1733702253.01._SCLZZZZZZZ_SX500_.jpg`,
    title: `The Screaming Goat`,
    author: `Screaming Goat Press`,
  },
  {
    id: 5,
    imgUrl: `https://m.media-amazon.com/images/P/1733702202.01._SCLZZZZZZZ_SX500_.jpg`,
    title: `Cat Butts In Space (The Feline Frontier!)`,
    author: `Val Brains`,
  },
  {
    id: 6,
    imgUrl: `https://m.media-amazon.com/images/I/51xI1CeUOlL._AC_SY780_.jpg`,
    title: `A World of Curiosities: A Novel`,
    author: `Louise Penny`,
  },
  {
    id: 7,
    imgUrl: `https://m.media-amazon.com/images/I/51wux7NzjJL._AC_SY780_.jpg`,
    title: `Roses, in the Mouth of a Lion`,
    author: `Bushra Rehman`,
  },
];

// Book list component
const BookList = () => (
  <React.Fragment>
    <section className="booklist">
      {booksData.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  </React.Fragment>
);

const Book = ({ imgUrl, title, author }) => {
  return (
    <React.Fragment>
      <article className="book">
        <BookImg url={imgUrl} altName={`${title}CoverImg`} />
        <BookTitle title={title} />
        <BookAuthor author={author} />
      </article>
    </React.Fragment>
  );
};

const BookImg = ({ url, altName }) => (
  <React.Fragment>
    <img src={url} alt={altName} />
  </React.Fragment>
);

const BookTitle = ({ title }) => (
  <React.Fragment>
    <h3>{title}</h3>
  </React.Fragment>
);

const BookAuthor = ({ author }) => (
  <React.Fragment>
    <h4>{author}</h4>
  </React.Fragment>
);

ReactDOM.render(<BookList />, document.getElementById(`root`));

// const author = `Alex Banks and Eve Porcello`;
// const title = `Learning React`;
// const img =
//   "https://d2mk45aasx86xg.cloudfront.net/Best_React_Books_Learning_React_by_Alex_Banks_and_Eve_Porcello_2_11zon_98b601256f.webp";
// const imgName = "ReactBookCover";
