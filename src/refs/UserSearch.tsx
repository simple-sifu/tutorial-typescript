import {useState, Fragment, useRef, useEffect} from 'react'

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
    // TS doesnt know if you are gonna assign to any element
    const inputRef = useRef<HTMLInputElement | null>(null);
    // Type inference to string
    const [name, setName] = useState('');

    // The user can be an object if found and undefined if not found
    const [user, setUser] = useState<{name: string, age: number} | undefined>()

    useEffect(() => {
        if (!inputRef.current){
            return
        }
        inputRef.current.focus()
    },[])

    const clickHandler = () => {
        const userFound = Users.find(user => user.name.toLowerCase() === name.toLowerCase())
        setUser(userFound)
    }

    return <Fragment>
        <h1>User Search</h1>

        <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={clickHandler}>Find User</button>
        <br/>
        <br/>
        <div>
        {user && `Name: ${user.name} and Age: ${user.age}`}
        </div>
    </Fragment>
}

export default UserSearch;