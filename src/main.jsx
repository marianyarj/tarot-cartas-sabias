import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routerTarot from '../src/router/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerTarot} />
  </StrictMode>,
)
