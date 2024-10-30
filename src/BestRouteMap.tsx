import { Map, Polyline, MapMarker } from 'react-kakao-maps-sdk';

import BestRoute from './types/BestRoute';

const strokeColors = ['red', 'blue', 'green'];

export default function BestRouteMap({ baseCoordinates, route }: {
  baseCoordinates: number[];
  route: BestRoute;
}) {
  return (
    <section>
      <Map
        center={{ lat: baseCoordinates[0], lng: baseCoordinates[1] }}
        style={{ width: '100%', height: '20em' }}
      >
        <MapMarker position={{
          lat: baseCoordinates[0], lng: baseCoordinates[1],
        }}
        >
          <div>학원</div>
        </MapMarker>
        {route.waypoints.map((waypoint) => (
          <MapMarker
            position={waypoint.position}
          >
            <div>{waypoint.name}</div>
          </MapMarker>
        ))}
        {route.segments.map((segment, i) => (
          <Polyline
            strokeWeight={3}
            strokeColor={strokeColors[i % 3]}
            path={segment}
          />
        ))}
      </Map>
    </section>
  );
}
