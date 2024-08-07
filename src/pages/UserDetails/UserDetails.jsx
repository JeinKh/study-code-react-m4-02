import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchUserById } from "../../services/api";

const UserDetails = () => {
  const params = useParams();
  console.log(params);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location?.state || "/users");
  console.log(location);

  useEffect(() => {
    fetchUserById(params.userId).then((data) => setUser(data));
  }, [params.userId]);
  if (!user) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Link to={goBackRef.current}>Go back to users</Link>
      <p>User Details #{params.userId}</p>
      <img src={user.image} alt="user" />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>

      <div className="flex">
        <NavLink to="address">Address</NavLink>
        <NavLink to="posts">Posts</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default UserDetails;
