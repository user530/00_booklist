import React from "react";

const Book = ({ imgUrl, title, author }) => (
  <React.Fragment>
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <BookImg url={imgUrl} altName={`${title}CoverImg`} />
      <BookTitle title={title} />
      <BookAuthor author={author} />
      <button
        type="button"
        onClick={(e) => {
          alert(`You clicked the button!`);
          console.log(e);
        }}
      >
        Btn
      </button>
    </article>
  </React.Fragment>
);

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

export default Book;
