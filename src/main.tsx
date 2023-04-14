import React from 'react'
import ReactDOM from 'react-dom/client'
import UserSearch from './refs/UserSearch'
import EventComponent from './Events/EventComponent'

const App = () => {
  return <UserSearch />
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserSearch />
  </React.StrictMode>,
)
