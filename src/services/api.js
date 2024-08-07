import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios.get("https://dummyjson.com/users");
  return response.data.users;
};

export const fetchUserById = async (id) => {
  const response = await axios.get(`https://dummyjson.com/users/${id}`);
  return response.data;
};
