import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@workspace/ui/globals.css"
import App from './App.tsx'
import { ThemesProvider } from '@workspace/ui/components/customs/themes-provider'
import { Container } from '@workspace/ui/components/customs/container'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemesProvider>
      <Container>
        <App />
      </Container>
    </ThemesProvider>
  </StrictMode>,
)
