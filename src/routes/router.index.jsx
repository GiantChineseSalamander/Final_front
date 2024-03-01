import {createBrowserRouter} from 'react-router-dom'

import Home from '../pages/home/home'
import Login from '../pages/login/login'
import HeaderPreview from '/home/reboot/code/Final_front/src/pages/test/headerpreview.jsx'

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
        element: <HeaderPreview/>
    }
])

export default router