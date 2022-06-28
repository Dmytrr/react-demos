import React, {useEffect, useState} from 'react';
import User from "./User";
import {getUsers, getPosts} from "../services/users.api.service";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState([]);
    let [posts, setPosts] = useState([]);

    const chooseUser = user => setUser(user);

    useEffect(() => {
        getUsers().then(value => setUsers(value));
        getPosts().then(value => setPosts(value));
    }, [])

    return (
        <div>
            {user.id &&
                <div>{posts.filter(value => value.userId === user.id).map(value =><div>{value.title}</div>)}</div>}
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