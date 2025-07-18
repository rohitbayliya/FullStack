import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdatePost from "./UpdatePost";

function GetAllPosts() {
  const [posts, setPosts] = useState([]);
  const [change, setChange] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [id,setId] = useState(null)
  useEffect(() => {
    async function getData(params) {
      let res = await axios.get("http://localhost:3000/posts");
      console.log(res.data);
      setPosts(res.data);
    }
    getData();
  }, [change]);
  async function deletePost(id) {
    let res = await axios.delete("http://localhost:3000/posts/" + id);
    setChange(id);
  }
  function updateTask(id){
    setIsEdit(true)
    setId(id)
  }
  return (
    <div>
      {isEdit ? (
        <UpdatePost id={id} setIsEdit={setIsEdit} />
      ) : (
        <>
          {posts.map((post, index) => {
            return (
              <div className="container border border-1" key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <button onClick={()=>updateTask(post.id)}>Update Task</button>
                <button onClick={() => deletePost(post.id)}>delete</button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default GetAllPosts;