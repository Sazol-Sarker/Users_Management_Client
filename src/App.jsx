import { useEffect, useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import AddUser from "./AddUser";

function App() {
  const [users, setUsers] = useState([]);

  console.log("users=> ", users);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <h1 className="font-semibold text-xl text-teal-500">
        Users Data fetch using Express server app
      </h1>
      {/* <Link to={'/addUser'}> */}
      <button>Add User</button>
      {/* </Link> */}
      <h2 className="font-semibold text-xl text-teal-500">
        All Useres: {users.length}
      </h2>
     <AddUser users={users} setUsers={setUsers}></AddUser>

      {users.map((user) => {
       return <div className="w-1/2 mx-auto flex text-lg border-2 border-teal-500 rounded-sm m-4 p-4" key={user.id}>
          <div className="w-1/2 p-2 flex flex-col  justify-end font-semibold">
          <h3>user id:</h3>
          <h3>user name:</h3>
          <h3>user email:</h3>
          </div>
          <div className="w-1/2 p-2 ml-4 flex flex-col justify-start"><h3>{user.id}</h3>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3></div>
        </div>;
      })}
    </>
  );
}

export default App;
