import { Children } from 'react';
import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorComponents from './components/ErrorComponent';
import Header from './components/Header';
import Root from './Root';
import About from './screens/About';
import Home from './screens/Home';
import List from './screens/list/List';
import ListDetail from './screens/list/ListDetail';
import NotFound from './screens/NotFound';
import Followers from './screens/users/Followers';
import User from './screens/users/User';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Home />,
                errorElement: <ErrorComponents />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'users/:userId',
                element: <User />,
                children: [
                    {
                        path: 'followers',
                        element: <Followers />,
                    },
                ],
            },
            // user 에 보여줄 페이지도 있고 user/:userID 에도 보여줄 페이지가 있으면 이런 식으로
            // {
            //     path: 'users',
            //     element: <User/>,
            //     children: [
            //         {
            //             path: ":userId",
            //             element: <UserDetail/>
            //         }
            //     ]
            // },
            {
                path: 'list',
                element: <List />,
            },
            {
                path: 'list/detail',
                element: <ListDetail />,
            },
        ],
        errorElement: <NotFound />,
    },
]);

export default Router;
