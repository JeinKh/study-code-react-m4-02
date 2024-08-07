const UsersList = ({ users = [] }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.fistName} {user.LastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
