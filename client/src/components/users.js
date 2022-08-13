import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    try {
      axios.get("/api/users").then(function (response) {
        setUsers(response.data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  function addfriends(id) {
    axios.post("/api/users/addfriends", { id }).then(function (res) {
      if (res.data.status === "success") {
        alert(res.data.message);
        window.location.href = "/api/users";
      } else {
        alert(res.data.message);
      }
    });
  }

  return users ? (
    <>
      {users.map((user) => (
        <div key={user.email} to={`${user._id}`}>
          <ul className="collection with-header">
            <li className="collection-item">
              <div>
                {user.email}
                <i className="secondary-content">
                  <button className="mr-3" onClick={() => addfriends(user._id)}>
                    Add friend
                  </button>
                </i>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  ) : null;
};
export default Users;
