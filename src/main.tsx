import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </React.StrictMode>
  </ChakraProvider>
)
