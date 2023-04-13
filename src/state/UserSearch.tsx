import {useState, Fragment} from 'react'

const Users = [
    {
        name: 'Tommy',
        age: 40
    },
    {
        name: 'Sarah',
        age: 70
    },
    {
        name: 'Tony',
        age: 20
    }
]


const UserSearch = () => {
    // Type inference to string
    const [name, setName] = useState('');

    // The user can be an object if found and undefined if not found
    const [user, setUser] = useState<{name: string, age: number} | undefined>()

    const clickHandler = () => {
        const userFound = Users.find(user => user.name.toLowerCase() === name.toLowerCase())
        setUser(userFound)
    }

    return <Fragment>
        <h1>User Search</h1>

        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={clickHandler}>Find User</button>
        <br/>
        <br/>
        {user && `Name: ${user.name} and Age: ${user.age}`}
    </Fragment>
}

export default UserSearch;