import React, {useState,useEffect} from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "../core/Base";
import PostCard from "../core/PostCard";
import { getPosts } from "../core/helper/coreapicalls";


export default function UserDashBoard() {
  const {posts, setPosts} = useState([])

  const {error, setError} = useState(false)

  const loadAllPosts = () => {
    getPosts().then(data => {
      if (data.error) {
        setError(data.error);
      }else {
        console.log(data);
        setPosts(data);
      }
    })
  }

  useEffect(() =>{
    loadAllPosts()
  },[])
  return (
    <Base title=" UserDash Board Page" description="Welcome to the Tshirt Store">
      <div className="row">
        {posts.map((post, index) =>{
          return (
            <div key={index}className="col-4 mb-4">
            <PostCard post = {post}/>
            </div>
          )
        })}
        
        
      </div>
    </Base>
  );
}
