import React from 'react';
import './UserItem.scss';

const UserItem = ({ user }) => {
    return (
        <div>
            <img className='user-avatar' src={user.avatar_url} alt=''/>
        </div>
    );
}

export default UserItem;