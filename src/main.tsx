import React,{FC} from 'react'
import ReactDOM from 'react-dom/client'
import UserSearch from './state/UserSearch'

const App = () => {
  return <UserSearch />
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
