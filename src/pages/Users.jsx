import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete=(id)=>{
    fetch(`http://localhost:5000/user/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        if (data.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        }
        const remaining= users.filter(user=>user._id!==id);
        setUsers(remaining)
    })
  }
  return (
    <div>
      <h2 className="text-2xl font-semibold">
        total users: {users.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Email</th>
                <th>Registration Time</th>
                <th>Last Login Time</th>
                <th>User Id</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover">
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>{user['last logIn']}</td>
                  <td>{user._id}</td>
                  <td><button onClick={()=>handleDelete(user._id)} className="btn">X</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
