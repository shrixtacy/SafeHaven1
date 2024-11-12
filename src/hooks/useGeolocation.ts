import { useState, useEffect } from 'react';
import { getCurrentPosition } from '../utils/geolocation';

interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  loading: boolean;
}

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null,
    loading: true
  });

  useEffect(() => {
    let mounted = true;

    const getLocation = async () => {
      try {
        const position = await getCurrentPosition();
        if (mounted) {
          setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
            loading: false
          });
        }
      } catch (error) {
        if (mounted) {
          setState({
            latitude: null,
            longitude: null,
            error: error instanceof Error ? error.message : 'An error occurred',
            loading: false
          });
        }
      }
    };

    getLocation();

    return () => {
      mounted = false;
    };
  }, []);

  return state;
};