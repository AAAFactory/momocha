interface WayPoint {
  position: { lat: number; lng: number; };
  arrivalTime: Date;
  name: string;
}

export interface Point {
  lat: number;
  lng: number;
}

export default interface BestRoute {
  waypoints: WayPoint[],
  segments: Point[][],
}
