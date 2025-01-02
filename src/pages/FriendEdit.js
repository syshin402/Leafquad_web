import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserByID, updateUser, deleteUser } from "../api/users";

function EditFriend() {
  const { id } = useParams();     
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("");
  const [graduationYear, setGradYear] = useState("");
  const [profilepicture, setProfilepicture] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      loadExistingUser(id);
    }
  }, [id]);

  async function loadExistingUser(userId) {
    try {
      setLoading(true);
      const user = await getUserByID(userId);

      setFirstName(user.first_name || "");
      setLastName(user.last_name || "");
      setEmail(user.email || "");
      setMajor(user.major || "");
      setGradYear(user.graduationYear || "");
      setProfilepicture(user.profilepicture || "");
    } catch (err) {
      setError("Failed to load user");
    } finally {
      setLoading(false);
    }
  }
  async function handleUpdate(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const updatedUser = {
        first_name: firstName,
        last_name: lastName,
        email,
        major,
        graduationYear,
        profilepicture
      };
      await updateUser(id, updatedUser);
      navigate("/");  // after updating, maybe go back to main
    } catch (err) {
      setError(err.message || "Failed to update user");
    } finally {
      setLoading(false);
    }
  }

  // user clicks “Delete” -> confirm -> then delete
  async function handleDelete() {
    const confirmDel = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDel) return; // user canceled

    try {
      setLoading(true);
      await deleteUser(id);
      navigate("/");  // or reload user list, etc.
    } catch (err) {
      setError(err.message || "Failed to delete user");
    } finally {
      setLoading(false);
    }
  }

  if (!id) {
    return <p>No ID found. Did you navigate to /edit without an ID?</p>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Edit User #{id}</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}

      <form onSubmit={handleUpdate} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", gap: "1rem" }}>
        <div>
          <label>First Name</label>
          <input
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Major</label>
          <input
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </div>
        <div>
          <label>Graduation Year</label>
          <input
            value={graduationYear}
            onChange={(e) => setGradYear(e.target.value)}
          />
        </div>
        <div>
          <label>Profile Picture URL</label>
          <input
            value={profilepicture}
            onChange={(e) => setProfilepicture(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </button>
          
          <button type="button" onClick={handleDelete} style={{ background: "red", color: "white" }}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditFriend;
