import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../services/api";

const UserDetails = () => {
  const params = useParams();
  console.log(params);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserById(params.userId).then((data) => setUser(data));
  }, [params.userId]);
  if (!user) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <p>User Details #{params.userId}</p>
      <img src={user.image} alt="user" />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserDetails;
