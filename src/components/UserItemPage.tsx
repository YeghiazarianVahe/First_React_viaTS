import React, {FC, useEffect, useState} from 'react';
import {IUser} from "./types/types";
import axios from "axios";
import {useParams, Routes, Route, NavLink} from "react-router-dom";
import UserPage from "./UserPage";

const UserItemPage: FC = () => {
        const [user, setUser] = useState<IUser | null>(null);
        const params = useParams()
        useEffect(() => {
            fetchUser()
        })
        async function fetchUser(){
            try {
                const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
                setUser(response.data)
            } catch (e){
                alert(e);
            }
        }
    return (
        <div>
            <h1>Page user {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city}
            </div>
            <Routes>
                <Route path={'/users'} element={<UserPage />}/>
            </Routes>
            <NavLink to={'/users'} >Back to users</NavLink>
        </div>
    );
};

export default UserItemPage;