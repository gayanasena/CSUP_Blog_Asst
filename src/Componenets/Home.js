import React from "react";
import CardPs from "./CardPs";
import useFetch from "./useFetch";


function Home() {
    const {data: posts} = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className="posts-list">
      <div className="posts-container">
          {posts?.map((post) => (
              <CardPs data={post} key={post.id}/>
          ))}
          </div>
    </div>
  );
}

export default Home;
