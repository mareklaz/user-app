import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/UserService';

const UserList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(usersData => {
        setUsers(usersData);
      })
  }, [])

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mail</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.mail}</td>
                  <td>{user.password}</td>
                </tr>
              )
            })
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
