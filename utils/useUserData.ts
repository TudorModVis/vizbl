import { useState, useEffect } from 'react';

interface UserData{
  authMethod: string;
  email: string;
  freeze: number;
  id: string;
  image: string;
  name: string;
  username: string;

}

const useUserData = () => {
    const [userData, setUserData] = useState<UserData | null>(null);

    const fetchUser = async () => {
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
          setUserData(null);
      }
  };

  useEffect(() => {
      fetchUser();
  }, []);

  const refetch = () => {
      fetchUser();
  };

  return { userData, refetch }

}

export default useUserData