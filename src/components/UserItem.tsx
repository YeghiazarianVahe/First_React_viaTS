import React, {FC} from 'react';
import {IUser} from "./types/types";
import {NavLink, Route, Routes} from "react-router-dom";
import UserPage from "./UserPage";
interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: 15, border: '1px solid gray'}}>
            {user.id}. {user.name} lives in {user.address.city} at {user.address.street} <br/>
            <Routes>
                <Route path={'/user' + user.id} element={<UserPage />}/>
            </Routes>
            <NavLink to={'/user/' + user.id} >Go to User pager</NavLink>
        </div>
    );
};

export default UserItem;