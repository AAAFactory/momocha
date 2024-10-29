import { useCallback, useState } from 'react';

import passengers from './data/passengers';

import requestBestRoute from './service/requestBestRoute';

interface Passenger {
  name: string;
  location: string;
  coordinates: number[];
}

interface Route {
  passenger: Passenger,
  arrivalTime: string;
}

export default function useBestRoute() {
  const [route, setRoute] = useState<Route[]>([]);

  const loadBestRoute = useCallback(async () => {
    const bestRoute = await requestBestRoute(passengers);
    setRoute(bestRoute);
  }, []);

  return { route, loadBestRoute };
}
