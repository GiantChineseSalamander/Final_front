import {createBrowserRouter} from 'react-router-dom'

import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Header from '../pages/test/headerpreview'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/test',
        element: <Header/>
    }
])

export default router