import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider as Authentication } from './context/Authentication'

const queryClient = new QueryClient()

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Authentication>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </Authentication>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
