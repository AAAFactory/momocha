import axios from 'axios';

import dayjs from 'dayjs';

interface Passenger {
  name: string;
  location: string;
  coordinates: number[];
}

export default async function requestBestRoute(passengers: Passenger[]) {
  const baseCoordinates = ['37.479973', '126.952925'];

  // TODO: 서버에서는 Timezone 이 고려된 시간이어야함.
  const startTime = dayjs().format('YYYYMMDDHHmm');

  const { data } = await axios.post('https://apis.openapi.sk.com/tmap/routes/routeOptimization10?version=1', {
    startName: 'start',
    startX: baseCoordinates[1],
    startY: baseCoordinates[0],
    startTime,
    endName: 'end',
    endX: baseCoordinates[1],
    endY: baseCoordinates[0],
    viaPoints: passengers.map((p) => ({
      viaPointId: p.name,
      viaPointName: p.name,
      viaX: p.coordinates[1].toString(),
      viaY: p.coordinates[0].toString(),
    })),
  }, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      appKey: process.env.TMAP_KEY,
    },
  });

  //

  // 도착 예상 시간 가공
  const filtered = data.features
    .filter((i: {
      geometry: { type: string; }
    }) => i.geometry.type === 'Point')
    .slice(1, -1)
    .map((i: {
      properties: {
        viaPointId: string;
        arriveTime: string;
      }
    }) => ({
      name: i.properties.viaPointId,
      arriveTime: i.properties.arriveTime,
    }));

  return filtered.map((i: {
    name: string;
    arriveTime: string;
  }) => {
    const hour = i.arriveTime.slice(8, 10);
    const minute = i.arriveTime.slice(10, 12);
    return ({
      passenger: passengers.find((p) => p.name === i.name),
      arrivalTime: `${hour}시${minute}분`,
    });
  });
}
