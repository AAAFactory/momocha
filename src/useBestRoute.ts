import { useCallback, useState } from 'react';

import passengers from './data/passengers';

import requestBestRoute from './service/requestBestRoute';
import BestRoute from './types/BestRoute';

export default function useBestRoute() {
  const [route, setRoute] = useState<BestRoute | null>(null);

  const loadBestRoute = useCallback(async (baseCoordinates: number[]) => {
    const bestRoute = await requestBestRoute(baseCoordinates, passengers);
    setRoute(bestRoute);
  }, []);

  return { route, loadBestRoute };
}
