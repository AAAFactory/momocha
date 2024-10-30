import { useState } from 'react';

import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';

import { useInterval } from 'usehooks-ts';

export default function MapPage() {
  const [position, setPosition] = useState({ lat: 37.467400, lng: 126.938128 });

  useInterval(() => {
    setPosition({
      ...position,
      lat: position.lat + 0.0001,
    });
  }, 1000);

  return (
    <Map
      center={{ lat: 37.467400, lng: 126.938128 }}
      style={{ width: '100%', height: '20em' }}
    >
      <MapMarker
        position={position}
        image={{
          src: 'https://thumbs.dreamstime.com/b/school-bus-yellow-color-classic-design-right-side-projection-arched-roof-black-line-board-cartoon-159722703.jpg',
          size: {
            width: 50,
            height: 50,
          },
        }}
      />
      <Polyline
        strokeWeight={3}
        strokeColor="#000"
        path={[[{ lat: 37.467400, lng: 126.938128 }, { lat: 37.967400, lng: 126.938128 }]]}
      />
    </Map>
  );
}
