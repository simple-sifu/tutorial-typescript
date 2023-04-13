import {useState} from 'react';

const GuestList: React.FC = () => {

    // TS is using Type Inferences for primitive string
    const [name, setName] = useState('');
    
    // TS is trying to use Type Inferences but sees an empty array
    // it will assume that the only value of guest will be an empty array so
    // it will define it as never[] !!!
    const [guests, setGuests] = useState<string[]>([]);

    const clickHandler = () => {
        setName('');
        setGuests([...guests, name]);
    }
    return (<div>
        <h3>Guest List</h3>
        <ul>
            {guests.map((guest) =>(
                <li key={guest} >{guest}</li>
            ))}
        </ul>

        <input value={name} onChange={(e) => {setName(e.target.value)}}/>
        <button onClick={clickHandler}>Add Guest</button>

    
    </div>);
}

export default GuestList