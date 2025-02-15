import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import App from './App';
import Home from './pages/home';
import NotFound from './pages/not-found';
import NewsRoom from './pages/news-room';
import AboutUs from './pages/about-us'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="news" element={<NewsRoom />} />
      <Route path="about" element={<AboutUs />} />
    </Route>
  )
);