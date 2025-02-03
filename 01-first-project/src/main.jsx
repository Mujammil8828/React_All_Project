import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import './index.css'
import { Lal } from './zaki'

import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Lal/> */}
    <App />

  </StrictMode>,
)
