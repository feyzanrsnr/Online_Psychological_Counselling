import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './routes/router'

import './scss/main.scss'
import "react-datepicker/dist/react-datepicker.css";


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
