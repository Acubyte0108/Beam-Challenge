import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from './App';
import Home from './pages/home';
import NotFound from './pages/not-found';
// import DashboardLayout from './pages/dashboard/DashboardLayout';
// import DashboardHome from './pages/dashboard/DashboardHome';
// import DashboardSettings from './pages/dashboard/DashboardSettings';
// import DashboardType from './pages/dashboard/DashboardType';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
    //   {
    //     path: 'dashboard',
    //     element: <DashboardLayout />,
    //     children: [
    //       { index: true, element: <DashboardHome /> },
    //       { path: 'settings', element: <DashboardSettings /> },
    //       { path: ':type', element: <DashboardType /> },
    //     ],
    //   },
    ],
  },
]);