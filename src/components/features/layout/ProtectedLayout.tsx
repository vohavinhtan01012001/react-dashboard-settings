import { DefaultLayout } from '@/layouts/DefaultLayout';
import { GuestLayout } from '@/layouts/GuestLayout';
import { useAuthStore } from '@/store/useAuthStore';
import { Navigate, Outlet } from 'react-router';

interface ProtectedLayoutProps {
  layout: 'admin' | 'public';
}

export const ProtectedLayout = ({ layout }: ProtectedLayoutProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (layout === 'admin' && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const LayoutComponent = layout === 'admin' && isAuthenticated ? DefaultLayout : GuestLayout;

  return (
    <LayoutComponent>
      <Outlet />
    </LayoutComponent>
  );
};
