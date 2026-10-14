import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './app/router';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { QueryProvider } from './app/providers/QueryProvider';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <QueryProvider>
          <RouterProvider router={router} />
        </QueryProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
