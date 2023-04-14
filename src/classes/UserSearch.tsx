import { Component, Fragment } from 'react';

interface User {
    name: string;
    age: number;
}

// to associate Props with a React Component we can create the same type of interface we did
// for functional components. Then when we define our class based components we can add our props interface right there.

interface UserSearchProps {
    users: User[]
}

// For state we can rely on type inference, we need to be more precise we can
// include it right after state and provide our initial state.
interface UserSearchState {
    name: string;
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined
    }

    clickHandler = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name
        });

        this.setState({user: foundUser})
    }
    render() {
        const { name, user } = this.state;
        return (
          <Fragment>
            <h1>User Search</h1>

            <input 
              value={this.state.name} 
              onChange={(e) => this.setState({name: e.target.value})}
            />
            <button onClick={this.clickHandler}>Find User</button>
            <br/>
            <div>{user && `Name: ${user.name} and Age: ${user.age}`}</div>
    </Fragment>
        )
    }
}

export default UserSearch;