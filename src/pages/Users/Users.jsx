import { useEffect, useState } from "react";
import UsersList from "../../components/UsersList/UsersList";
import { fetchUsers } from "../../services/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  //   const [filterValue, setFilterValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("query") ?? "";

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
  const handleChangeFilter = (newValue) => {
    if (!newValue) {
      return setSearchParams({});
    }
    // setFilterValue(newValue);
    //----------------------------------------------------------------------------------
    searchParams.set("query", newValue);
    setSearchParams(searchParams);
  };
  const filteredData = users.filter(
    (item) =>
      item.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.lastName.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <div>
      <SearchBar
        handleChangeFilter={handleChangeFilter}
        filterValue={filterValue}
      />
      <UsersList users={filteredData} />
    </div>
  );
};

export default Users;
