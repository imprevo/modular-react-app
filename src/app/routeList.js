const routeList = [
    {
        path: '/',
        title: 'Main',
        getComponent: () => import('modules/main'),
    },
{
    path: '/about',
        title: 'About',
            getComponent: () => import('modules/about'),
    },
];

export default routeList;