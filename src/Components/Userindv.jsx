import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Userindv.css";

export const Userindv = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (loading) return <h2 className="loading-text">Loading user details...</h2>;
  if (error) return <h3 className="error-text">{error}</h3>;

  return (
    <div className="indv-container">
      <div className="card">
        <h2 className="title">👤 User Profile</h2>

        <div className="userindv-info">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company?.name}</p>
        </div>

        <div className="back">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back to Users
          </button>
        </div>
      </div>
    </div>
  );
};
