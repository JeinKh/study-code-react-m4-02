import { Link, useLocation } from "react-router-dom";

const UsersList = ({ users = [] }) => {
  const location = useLocation();
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id.toString()} state={location}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
