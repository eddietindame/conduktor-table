import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { PersonSheetProvider } from '@/components/person-sheet'
import { App } from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PersonSheetProvider>
      <App />
    </PersonSheetProvider>
  </StrictMode>,
)
