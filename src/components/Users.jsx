import { useState,useEffect } from "react";
let Users=()=>
{
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').
        then(response => response.json()).
        then(data => {setUsers(data); console.log(data)})
      },[]);
      /*data is array of objects [{},{},{}]
      hence react can not directly display objects as child*/
    return(
        <>
        <h2>Users Names</h2>
        <ul>{users.map(user=><li>{user.name}</li>)}
        </ul>
        </>
    )
}

export default Users;