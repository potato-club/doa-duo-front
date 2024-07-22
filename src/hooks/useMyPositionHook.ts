import { useEffect, useState } from 'react';

export const useMyPositonHook = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number }>();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log('Geolocation is not available in your browser.');
    }
  }, []);

  return location;
};
