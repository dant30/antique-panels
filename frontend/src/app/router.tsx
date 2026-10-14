import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { HomePage } from '@/features/home/pages/HomePage';
import { AboutPage } from '@/features/about/pages/AboutPage';
import { ServicesPage } from '@/features/services/pages/ServicesPage';
import { ServiceDetailsPage } from '@/features/services/pages/ServiceDetailsPage';
import { VehiclesPage } from '@/features/vehicles/pages/VehiclesPage';
import { VehicleDetailsPage } from '@/features/vehicles/pages/VehicleDetailsPage';
import { GalleryPage } from '@/features/gallery/pages/GalleryPage';
import { BookingPage } from '@/features/booking/pages/BookingPage';
import { ContactPage } from '@/features/contact/pages/ContactPage';
import { NotFoundPage } from '@/components/common/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'services/:slug',
        element: <ServiceDetailsPage />,
      },
      {
        path: 'vehicles',
        element: <VehiclesPage />,
      },
      {
        path: 'vehicles/:slug',
        element: <VehicleDetailsPage />,
      },
      {
        path: 'gallery',
        element: <GalleryPage />,
      },
      {
        path: 'book-service',
        element: <BookingPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: '404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
