import React, { useState, useEffect } from 'react';
import { addUser, updateUser } from '../services/api';

const UserForm = ({ selectedUser, onSave }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedUser) {
      await updateUser(selectedUser.id, user);
    } else {
      await addUser(user);
    }
    onSave(); // Callback to refresh the user list
    setUser({ name: '', email: '', phone: '' }); // Clear the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={user.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" />
      <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" />
      <button type="submit">{selectedUser ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
