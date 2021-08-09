import React, { useContext,useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function Artical() {
  const { id } = useParams();
  const history = useHistory();
  const { data: posts } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );

  const deletePost = ()=> {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id,{
    method:'delete',
    }).then(()=> {
      alert('Deleted');
      history.push('/');
    });
  } 
  
  return (
    <div className="content">
      <img src="https://picsum.photos/600/400" />
      <div className="header-text">
        <h1>{posts?.title}</h1>
      </div>
      <div className="text-content">
        <p>{posts?.body}</p>
      </div>
      <center>
        <button className="delete" onClick={deletePost}>Delete</button>
      </center>
    </div>
  );
}

export default Artical;
