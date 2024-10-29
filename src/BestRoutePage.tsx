import { useEffect } from 'react';

import useBestRoute from './useBestRoute';

export default function BestRoutePage() {
  const { route, loadBestRoute } = useBestRoute();

  useEffect(() => {
    loadBestRoute();
  }, []);

  return (
    <div>
      <h1>최적 경로</h1>
      <ul>
        {route.map(({ passenger, arrivalTime }) => (
          <li>
            <h2>{passenger.name}</h2>
            <p>
              {arrivalTime}
              {' '}
              도착예정
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
