const routeList = [
    {
        path: '/',
        getComponent: () => import('modules/main'),
    },
{
    path: '/about',
        getComponent: () => import('modules/about'),
    },
];

export default routeList;