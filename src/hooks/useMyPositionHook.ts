import { useEffect, useState } from 'react';
import { Position } from '../types';

export const watchPosition = (
  successCallback: (position: Position) => void,
  errorCallback?: PositionErrorCallback
): number => {
  return navigator.geolocation.watchPosition((position) => {
    successCallback({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }, errorCallback);
};

export const clearWatch = (watchId: number) => {
  navigator.geolocation.clearWatch(watchId);
};


export const useMyPositionHook = () => {
  const [position, setPosition] = useState<Position>();

  useEffect(() => {
    const watchId = watchPosition(
      (position) => {
        setPosition(position);
      },
      (error) => {
        throw error;
      }
    );

    return () => {
      clearWatch(watchId);
    };
  }, []);

  return position;
};
