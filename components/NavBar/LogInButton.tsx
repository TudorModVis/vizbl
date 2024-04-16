import React from 'react'
import { useEffect, useState } from 'react';

const LogInButton = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch('https://api.myvizbl.com/api/get-user', {
        credentials: 'include',
      });
      const userData = await res.json();
      setUserData(userData);
    }

    fetchUser();
  }, []);

  console.log(userData)

  return (
    <div>LogInButton</div>
  )
}

export default LogInButton