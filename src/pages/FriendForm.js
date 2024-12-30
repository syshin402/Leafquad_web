// FriendForm.tsx 

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createUser, updateUser, getUserByID } from "../api/users"; 
import "../App.css";
function FriendForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [major, setMajor] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      loadUser(id);
    }
  }, [id]);

  async function loadUser(userId) {
    try {
      const user = await getUserByID(userId);
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
      setBio(user.bio);
      setMajor(user.major);
      setGraduationYear(user.graduationYear);
    } catch {
      setError("Failed to load user");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("bio", bio);
      formData.append("major", major);
      formData.append("graduationYear", graduationYear);
      if (image) {
        formData.append("image", image);
      }

      if (id) {
        await updateUser(id, formData);
      } else {
        const newUser = await createUser(formData);
        console.log("created user: ", newUser);
        //await createUser(formData);
      }
      navigate("/");
    } catch (error) {
      console.error("Create user error: ", error);
      setError("Failed to save user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-container">
      <h1>{id ? "Edit User" : "Create User"}</h1>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First Name</label>
        <input 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          required
        />
        </div>

        <div className="form-group">
        <label>Last Name</label>
        <input 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          required
        />
        </div>

        <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>

        <div className="form-group">
        <label>Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        </div>

        <div className="form-group">
        <label>Major</label>
        <input
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          required
        />
        </div>
        
        <div className="form-group">
        <label>Graduation Year</label>
        <input
          value={graduationYear}
          onChange={(e) => setGraduationYear(e.target.value)}
          required
        />
        </div>

        <div className="form-group">
        <label>Profile Picture</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          accept="image/*"
          //required={!id} 
        />
        </div>


        <div className="button-group">
          <button type="submit" 
          className="button-primary" 
          disabled={loading}
          onClick={() => navigate("/")}>
            {loading ? "Saving..." : id ? "Update" : "Create"}
            
          </button>
          <button type="button" 
          lassName="button-secondary" 
          onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default FriendForm;
