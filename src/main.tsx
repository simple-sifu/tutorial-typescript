import React from 'react'
import ReactDOM from 'react-dom/client'
import GuestList from './state/GuestList'

const App = () => {
  return <GuestList />
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
