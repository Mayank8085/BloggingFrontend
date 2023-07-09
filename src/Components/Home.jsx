import React, { useEffect, useState } from 'react'
import Post from './Post'
import Sidebar from './Sidebar'
import Header from './Header'
import axios from 'axios';

const Home = () => {
  const [posts,setposts] = useState([]);
  useEffect( () =>{
     const fetchdata = async () =>{
       const res = await axios.get("https://blogspot-api-p0n5.onrender.com/api/posts",{withCredentials:true});
       setposts(res.data);
    }
    fetchdata();
  },[])
  
  return (
    <div>
      <Header/>
      <div style={{display:"flex"}}>
        <Post posts={posts}/>
        <Sidebar />
      </div>
    </div>
  )
}

export default Home
