import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./posts.css"
export const Posts = () => {
  const { data, page } = useLoaderData();
   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
     setLoading(true);
    navigate(`/posts/${page + 1}`);
  }
  const handlePrev = () =>{ 
    setLoading(true)
    navigate(`/posts/${page - 1}`);
  }
   useEffect(() => {
    setLoading(false);
  }, [data]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading&&data.map((post) => (
        <div key={post.id} className="post-card">
          <h3 >{post.title}</h3>
          <p >{post.body}</p>
        </div>
      ))}

      <div className="post-button">
        <button onClick={handlePrev} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={handleNext} disabled={data.length < 10}>
          Next
        </button>
      </div>
    </>
  );
};
