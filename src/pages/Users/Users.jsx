import { useEffect, useState } from "react";
import UsersList from "../../components/UsersList/UsersList";
import { fetchUsers } from "../../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // try {
    //   const getData = async () => {
    //     const data = await fetchUsers();
    //     setUsers(data);
    //   };
    //   getData();
    // } catch (error) {
    //   console.log(error);
    // }
    fetchUsers().then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <UsersList users={users} />
    </div>
  );
};

export default Users;
