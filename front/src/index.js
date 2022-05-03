import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import App from './App'
import { AuthContextProvider } from './contexts/AuthContext'
import './index.scss'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider >
          <App />
        </AuthContextProvider>
        {/* <ReactQueryDevtoolsPanel initialisopen="false" /> */}
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
)

reportWebVitals()
