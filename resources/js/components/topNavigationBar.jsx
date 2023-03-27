import React,{useState,useEffect, Fragment} from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';

export default function(){
const [users, setUsers] = useState([]);

 const fetchUsers = async () => {
    const res = await axios.get('data');
     if(res.ok){
        setUsers(res.data.data)
     }else{
        setUsers (['error']);
     }
   };

    useEffect(()=> {
     fetchUsers();
    },[]);

    return (
    <Fragment>
    <Typography variant="h1">users</Typography>
    <hr/>
    {users.map((aUser, aUserIndex) => {
        return <p key={aUserIndex}>{aUser.id}</p>
    })}
    </Fragment>)
}