import React from 'react';

const User = ({user, chooseUser}) => {
    return (
        <div>
            {user.id}
            {user.name}
            <button onClick={() => {
                chooseUser(user);
            }}>Details</button>
        </div>
    );
};

export default User;