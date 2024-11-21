import React, { useEffect, useState } from 'react'
import Post from './Post'
import Sidebar from './Sidebar'
import Header from './Header'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { backend } from '../backend';
const Home = () => {
  const [posts,setposts] = useState([]);
  const {search} = useLocation();
  useEffect( () =>{
     const fetchdata = async () =>{
       const res = await axios.get(`${backend}/posts`+search,{withCredentials:true});
       setposts(res.data);
    }
    fetchdata();
  },[search])
  
  return (
    <div>
      <Header/>
      <div style={{display:"flex"}}>
        {posts.length ===0 ?<h4>Sorry!! No posts found </h4>: <Post posts={posts}/> }
        <Sidebar />
      </div>
    </div>
  )
}

export default Home
