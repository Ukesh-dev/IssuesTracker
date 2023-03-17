import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'

const queryClinet = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClinet}>
      <BrowserRouter>
        <div className='container'>
          <App />
        </div>
      </BrowserRouter>
      {/* <ReactQueryDevtoo /> */}
    </QueryClientProvider>
  </React.StrictMode>
)
