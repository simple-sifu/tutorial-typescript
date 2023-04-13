import React,{FC} from 'react'
import ReactDOM from 'react-dom/client'
import UserSearch from './state/UserSearch'

const Users = [
  { 
    name: 'Tommy',
    age: 40
  },
  {
    name: "Sarah",
    age: 70
  },
  {
    name: "Carol",
    age: 30
  }
]

const App = () => {

  // const [name, setName] = useState('');
  // const [user, setUser] = useState<{name: string, age: number} | undefined>();

  // const clickHandler = () => {
  //   const foundUser = Users.find(user => user.name.toLowerCase() === name.toLowerCase())
  //   setUser(foundUser);
  // }
  // return (
  //   <Fragment>
  //       <UserSearch />

  //       <input value={name} onChange={(e) => setName(e.target.value)}/>
  //       <button onClick = {clickHandler}>Find User</button>
  //       <div>{user && `name: ${user.name},  age: ${user.age}` }</div>
  //   </Fragment>
  // )
  return <UserSearch />

}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
