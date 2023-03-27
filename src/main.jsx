import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux"
import store from './redux/store'
import { ProSidebarProvider } from 'react-pro-sidebar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode > 
    <Provider store={store}>
    <ProSidebarProvider>
    <App />
    </ProSidebarProvider>
    </Provider>
  </React.StrictMode>
)
