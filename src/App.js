import React, { useEffect, useState } from 'react';

import Users from './components/Users';

const App = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchUsers();
  }, []);
  

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p className='loading'>Loading users...</p>}
      {error && <p className='error'>{error.message}</p>}
      {/* step3 : pass the users data to Users component  */}
      {users && <Users users={users} />}
    </div>
  );
};

export default App;
