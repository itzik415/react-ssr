import React from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/usersList';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData: loadData,
        path: '/users',
        component: UsersList,
    },
];