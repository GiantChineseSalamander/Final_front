import React from 'react'
import ReactDOM from 'react-dom/client'
import  {RouterProvider} from 'react-router-dom'
import router from './routes/router.index.jsx'
import './index.css'
import 'typeface-roboto';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
