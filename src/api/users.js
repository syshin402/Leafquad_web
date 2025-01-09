//const BASE_URL = "https://disc-assignment-5-users-api.onrender.com/api/users";
const BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://leafquad-backend-final.vercel.app/api/users";

// GET /api/users
export async function getAllUsers() {
    const response = await fetch(BASE_URL, { method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
  if (!response.ok) throw new Error("Failed to fetch all users");
  return response.json();
};

// GET /api/users/:id
export async function getUserByID(id) {
    const response = await fetch(`${BASE_URL}/${id}`, { method: "GET",
      headers: {
        "Content-Type": "application/json",
    },
     });
  if (!response.ok) throw new Error("Failed to fetch user by id");
  return response.json();
};


// POST /api/users
export async function createUser(userData) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  
  if (!response.ok) throw new Error("Failed to create user");
  return response.json();
};

// PUT /api/users/:id
export async function updateUser(id, userData) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  
  if (!response.ok) throw new Error("Failed to update user");
  console.log({error: response});
  return response.json();

/*
  if (error) {
    console.error("Supabase error:", error);
    return res.status(500).json({error: error.message});
  }
  if (!data) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.json(data);
}
catch (err) {
  console.error("Failed to update user: ", err);
  return res.status(500).json({ error: "Failed to update users" });
}
})
*/
};

export async function deleteUser(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
  },
  });
  if (!response.ok) throw new Error("Failed to delete user");

  return;
};

