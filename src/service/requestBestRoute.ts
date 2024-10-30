import axios from 'axios';

import dayjs from 'dayjs';

import Passenger from '../types/Passenger';
import BestRoute, { Point } from '../types/BestRoute';

interface Geometry {
  type: 'Point' | 'LineString';
  coordinates: number[] | number[][];
}

interface Feature {
  geometry: Geometry;
  properties: {
    viaPointId?: string;
    arriveTime?: string;
  };
}

interface TMapResponse {
  features: Feature[];
}

export default async function requestBestRoute(
  baseCoordinates: number[],
  passengers: Passenger[],
): Promise<BestRoute> {
  const startTime = dayjs().format('YYYYMMDDHHmm');

  const { data } = await axios.post<TMapResponse>(
    'https://apis.openapi.sk.com/tmap/routes/routeOptimization10?version=1',
    {
      startName: 'start',
      startX: baseCoordinates[1].toString(),
      startY: baseCoordinates[0].toString(),
      startTime,
      endName: 'end',
      endX: baseCoordinates[1].toString(),
      endY: baseCoordinates[0].toString(),
      viaPoints: passengers.map((p) => ({
        viaPointId: p.name,
        viaPointName: p.name,
        viaX: p.coordinates[1].toString(),
        viaY: p.coordinates[0].toString(),
      })),
    },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        appKey: process.env.TMAP_KEY,
      },
    },
  );

  const segments = data.features.reduce((prev: Point[][], curr: Feature) => {
    if (curr.geometry.type === 'Point') {
      return prev;
    }

    return [...prev, (curr.geometry.coordinates as number[][]).map((c: number[]) => ({
      lat: c[1],
      lng: c[0],
    }))];
  }, []);

  const waypoints = data.features
    .filter((i) => i.geometry.type === 'Point')
    .slice(1, -1)
    .map((i) => ({
      position: {
        lat: (i.geometry.coordinates as number[])[1],
        lng: (i.geometry.coordinates as number[])[0],
      },
      name: i.properties.viaPointId!,
      arrivalTime: dayjs(i.properties.arriveTime!).toDate(),
    }));

  return {
    segments,
    waypoints,
  };
}
