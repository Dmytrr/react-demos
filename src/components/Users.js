import React, {useEffect, useState} from 'react';
import User from "./User";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState([]);

    const chooseUser = user => setUser(user);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value));
    }, [])

    return (
        <div>
            {user.id && <div>{user.username}{user.email}{user.phone}</div>}
            <h2>Users</h2>
            {users.map((user, index) =>
                <User
                key={index}
                user={user}
                chooseUser={chooseUser}
                />)}
        </div>
    );
};

export default Users;