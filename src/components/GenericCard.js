import React from "react";
import staricon from '../images/star-icon.png';
import starcolor from '../images/star-color.png';
import { useNavigate } from "react-router-dom";
import { deleteUser, updateUser } from "../api/users";
import { useAuth } from "../context/AuthContext";


function GenericCard({title, imageSrc, body, onClickFavorite, isFavorited, u}) {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth(); 


       async function handleDelete(userId) {
          if (!isLoggedIn) {
            alert("You need to log in to delete users");
            return;
          }
          if (window.confirm("Are you sure you want to delete?")) {
            try {
              await deleteUser(userId);
              navigate("/");
            } catch (err) {
              alert(err.message);
            }
          }
        }
    
        async function handleEdit(userId) {
          if (!isLoggedIn) {
            alert("You need to log in to edit users");
            return;
          }
          if (window.confirm("Are you sure you want to edit?")) {
            try {
              await updateUser(userId);
            } catch (err) {
              alert(err.message);
            }
          }
        }
    let imageElement = null;

    if (imageSrc) {
        imageElement = (
            <img 
                src={imageSrc}
                alt={title || "Generic card"}
                className="card-image"
            />
        );
    }

    let favoriteElement = null; 
    if (onClickFavorite) {
        favoriteElement = (
            <img    
                src={isFavorited ? starcolor : staricon}
                alt="Favorite icon"
                className="star-icon"
                onClick={onClickFavorite}
            />
        );
    }

    return (
        <div className="card">
            {imageElement}
            <div className="card-content">
                <h3 className="card-name">{title}</h3>
                <p className="card-interests">{body}</p>
            </div>
            {favoriteElement}
            <button onClick={() => handleEdit(u.id)}>
            Edit
            </button>
            <button onClick={() => handleDelete(u.id)}>
            Delete
            </button>

        </div>
        
        
    );
}

export default GenericCard;