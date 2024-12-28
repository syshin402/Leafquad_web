const BASE_URL = "https://disc-assignment-5-users-api.onrender.com/api/users";

// GET /api/users
export async function getAllUsers() {
    const response = await fetch(BASE_URL, { method: "GET" });
  if (!response.ok) throw new Error("Failed to fetch all users");
  return response.json();
};

// GET /api/users/:id
export async function getUserByID(id) {
    const response = await fetch(`${BASE_URL}/${id}`, { method: "GET" });
  if (!response.ok) throw new Error("Failed to fetch all users");
  return response.json();
};


// POST /api/users
export async function createUser(formData) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) throw new Error("Failed to create user");
  return response.json();
};

// PUT /api/users/:id
export async function updateUser(id, formData) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (!response.ok) throw new Error("Failed to update user");
  return response.json();
};

export async function deleteUser(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete user");

  return;
};

