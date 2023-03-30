import React, { useState, useEffect, Fragment } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';

export default function () {
    const [users, setUsers] = useState([]);
    console.log('aasd', users)

    const fetchUsers = async () => {
        console.log('asd')
        const res = await axios.get('/data');

        if (res.status === 200) {
            console.log('result', res)
            setUsers(res.data.data)
        } else {
            console.log(res);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Fragment>
            <Typography variant="h4">users</Typography>
            <hr />
            {users.map((aUser, aUserIndex) => {
                return <p key={aUserIndex}>{aUser.id}</p>
            })}
        </Fragment>)
}