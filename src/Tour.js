import React, { useState } from "react";

const Tour = (props) => {
  const [longText, setLongText] = useState(false);

  console.log(props);

  return (
    <article className="tour">
      <img src={props.image} alt={props.name}></img>
      <div className="header">
        <h3>{props.name}</h3>
        <p className="price low">${props.price}</p>
      </div>
      <div className="content">
        <p>
          {longText ? props.info : props.info.substring(0, 200) + "..."}
          <button
            className="btn toggle-text"
            onClick={() => setLongText(!longText)}
          >
            {longText ? "Show Less" : "Show More"}
          </button>
        </p>
      </div>
      <div className="options">
        <button
          className="btn danger"
          onClick={() => props.deleteTour(props.id)}
        >
          Dismiss
        </button>
      </div>
    </article>
  );
};

export default Tour;
