import { useState, useEffect } from "react";

import "./App.css";
const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => setError("Data Fetching Failed"));
  }, []);

  return (
    <div>
      <h1> Blog Posts</h1>
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        posts.map((post, index) => (
          <div key={post.id}>
            <h2>
              {index + 1}. {post.title}
            </h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogPosts;
