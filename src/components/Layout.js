import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
