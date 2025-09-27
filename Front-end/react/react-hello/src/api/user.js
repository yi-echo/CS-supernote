import instance from "../utils/ApiUtils";

export const fetchUsers = () => {
  return instance.get("/users");
}

export const fetchUserById = (id) => {
  return instance.get(`/users/${id}`);
}

export const createUser = (userData) => {
  return instance.post("/users", userData);
}

export const updateUser = (id, userData) => {
  return instance.put(`/users/${id}`, userData);
}

export const deleteUser = (id) => {
  return instance.delete(`/users/${id}`);
}