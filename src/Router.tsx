import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Root from './Root';
import About from './screens/About';
import Home from './screens/Home';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
        ],
    },
]);

export default Router;
