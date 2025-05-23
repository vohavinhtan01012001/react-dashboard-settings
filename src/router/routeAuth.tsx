import type { RouteObject } from 'react-router';
import { ProtectedLayout } from '@/components/features/layout/ProtectedLayout';
import { routes, type Route } from './routes';

const createRouteObject = (route: Route): RouteObject => ({
    path: route.path,
    element: route.element,
    children: route.children?.map(createRouteObject),
});

const getRoutesByLayout = (layout: Route['layout']) =>
    routes.filter((r) => r.layout === layout).map(createRouteObject);

export const routeAuth: RouteObject[] = [
    {
        path: '/admin',
        element: <ProtectedLayout layout="admin" />,
        children: getRoutesByLayout('admin'),
    },
    {
        path: '/',
        element: <ProtectedLayout layout="public" />,
        children: getRoutesByLayout('public'),
    },
];
