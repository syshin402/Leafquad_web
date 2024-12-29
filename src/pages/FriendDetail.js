import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import '../App.css';
import { getUserByID, deleteUser } from "../api/users"; 

function FriendDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            loadUser(id);
        }
    }, [id]);

    async function loadUser(userId) {
        try {
            const data = await getUserByID(userId);
            setUser(data);
        }
        catch (err) {
            setError("Failed to load user");
        }
        finally{
            setLoading(false);
        }
    }

    async function handleDelete() {
        if (
          !user ||
          !window.confirm("Are you sure you want to delete this user?")
        ) {
          return;
        }
    
        try {
          await deleteUser(user.id);
          navigate("/Friends");
        } catch (err) {
          setError("Failed to delete product");
        }
    }

    if (loading) {
    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <p>Loading user...</p>
        </div>
    );
    }

    if (error) {
    return (
        <div>
        <p>{error}</p>
        <Link to="/">Back to Main</Link>
        </div>
    );
    }

    if (!user) {
    return (
        <div>
        <p>User not found.</p>
        <Link to="/">Back to Main</Link>
        </div>
    );
    }

    return (
    <div className="friend-detail">
        <div className="detail-header">
        <Link to="/" className="back-link">← Back</Link>
        </div>

        <div className="detail-content">
        <img
            src={user.profilePicture}
            alt={`${user.firstName} ${user.lastName}`}
            className="detail-image"
        />
        <h1>{user.firstName} {user.lastName}</h1>
        <p>Email: {user.email}</p>
        <p>Major: {user.major}</p>
        <p>Bio: {user.bio}</p>
        <p>Graduation Year: {user.graduationYear}</p>

        <button onClick={handleDelete} className="button-danger">
            Delete
        </button>
        <Link to={`/friends/${user.id}/edit`} className="button-secondary">
            Edit
        </Link>
        </div>
    </div>
    );
}

export default FriendDetail;