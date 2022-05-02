import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools, ReactQueryDevtoolsPanel } from 'react-query/devtools';
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import App from './App'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtoolsPanel initialisopen='false' />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
)

reportWebVitals()
