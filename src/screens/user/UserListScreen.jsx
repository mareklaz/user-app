import React from 'react';
import UserList from '../../components/users/UserList';

const UserListScreen = () => {
  return (
    <div>
      <h1 className='my-5 text-4xl'>User List</h1>
      <UserList />
    </div>
  );
}

export default UserListScreen;
