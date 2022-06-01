import React,{useState,useEffect} from 'react'
import axios from 'axios'


function Users() {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users")       
        .then((res)=>setUsers(res.data))
        
},[]);

// useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>res.json())
//     .then((data)=>setUsers(data))    
// },[]);

//Not: Yukarıda useEffect kod parçaları biri axios ile diğeri fetch ile json data çekiyor ve aynı işleri yapıyorlar.


  return (
    <div>
        <h1>Users</h1>
        {
           users.map((user)=>(<div key={user.id}>{user.name}</div>))
        }

    </div>
  )
}

export default Users