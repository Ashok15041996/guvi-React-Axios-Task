import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleSave = () => {
    setSelectedUser(null); // Clear selected user after save
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm selectedUser={selectedUser} onSave={handleSave} />
      <UserList onEdit={handleEdit} />
    </div>
  );
};

export default App;
