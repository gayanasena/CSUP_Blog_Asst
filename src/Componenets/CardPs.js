import React from "react";
import { Link } from "react-router-dom";

function CardPs({ data }) {

  return (
    <div className="posts-tile">
      <div className="top">
        <img src="https://picsum.photos/300/200" alt="header img"></img>
      </div>
      <div className="title">
        <span>{data?.title}</span>
      </div>
      <div className="writer">
        <span>by :{data?.userId}</span>
      </div>
      <Link to={`/posts/${data.id}`}>
      <button>Read More</button>
      </Link>
      
    </div>
  );
}

export default CardPs;
