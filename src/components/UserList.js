import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/api';
import UserCard from './UserCard';

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers(); // Refresh the user list after deletion
  };

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onEdit={onEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default UserList;
