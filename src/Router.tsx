import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import SchedulesPage from './SchedulesPage';
import SchedulePage from './SchedulePage';
import BestRoutePage from './BestRoutePage';
import LocationPage from './LocationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SchedulesPage />,
  },
  {
    path: '/schedule',
    element: <SchedulePage />,
  },
  {
    path: '/route',
    element: <BestRoutePage />,
  },
  {
    path: '/location',
    element: <LocationPage />,
  },
]);

export default function Router() {
  return (
    <RouterProvider router={router} />
  );
}