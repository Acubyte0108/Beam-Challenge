import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@workspace/ui/globals.css"
import "./main.css"
import { RouterProvider } from 'react-router';
import { router } from './routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
