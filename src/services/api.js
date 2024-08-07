import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios.get("https://dummyjson.com/users");
  return response.data.users;
};
