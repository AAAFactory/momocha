import { useEffect } from 'react';

import dayjs from 'dayjs';

import useBestRoute from './useBestRoute';

import BestRoute from './types/BestRoute';
import BestRouteMap from './BestRouteMap';

function ArrivalTime({ route }: {
  route: BestRoute;
}) {
  return (
    <section>
      <h2>도착 예상 시간</h2>
      <ul>
        {route.waypoints.map((waypoint) => (
          <li>
            <span>{waypoint.name}</span>
            <span>
              :
              {dayjs(waypoint.arrivalTime).format('H시m분 도착예정')}
            </span>
          </li>
        ))}
      </ul>
    </section>

  );
}

export default function BestRoutePage() {
  const { route, loadBestRoute } = useBestRoute();

  const baseCoordinates = [37.479973, 126.952925];

  useEffect(() => {
    loadBestRoute(baseCoordinates);
  }, []);

  if (!route) {
    return (
      <div>
        loading...
      </div>
    );
  }

  return (
    <div>
      <h1>최적 경로</h1>
      <ArrivalTime route={route} />
      <BestRouteMap baseCoordinates={baseCoordinates} route={route} />
    </div>
  );
}
