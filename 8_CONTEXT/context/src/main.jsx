import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleContextProvider } from './context/TitleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContextProvider>
      <TitleContextProvider>
        <App />
      </TitleContextProvider>
    </CounterContextProvider>
  </StrictMode>,
)
