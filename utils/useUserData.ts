import { useState, useEffect } from 'react';

const useUserData = () => {
    const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch('https://api.myvizbl.com/api/get-user', {
          credentials: 'include',
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const userData = await res.json();
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUserData(null)
      }
    }

    fetchUser();
    console.log(userData)
  }, []);

  return { userData }

}

export default useUserData