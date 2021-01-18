import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { createaPost } from './helper/userapicalls';
import { isAutheticated } from "../auth/helper/index";
import { Redirect } from "react-router-dom";


const AddPost = () => {

  
    const { user, token } = isAutheticated();
    const [values, setValues] = useState({
        description:"",
        photo:"",
        loading: false,
        error:"",
        createdPost:"",
        getRedirect:false,
        formData:new FormData(),
    });

    const {description, loading, error, createdPost, getRedirect, formData} = values;

    const  onSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error:"", loading:false})
        createaPost(user._id,token,formData).then(data => {
            if (data.error) {
                setValues({...values, error:data.error})
            }else {
                setValues({...values,
                description:"",
                photo:"",
                loading: false,
                getRedirect:true,
                createdPost:data.description
                })
            }
        })
    }

    const handleChange = name =>event =>{
        const value = name === "photo" ? event.target.files[0] : event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})
    }

    const successMessage = () => (
        <div
          className="alert alert-success mt-3"
          style={{ display: createdPost ? "" : "none" }}
        >
          <h4>{createdPost} created successfully</h4>
        </div>
      );

      const errorMessage = () => (
        <div className="alert alert-danger mt-3"
        style={{display: error ? "" : "none"}}
        >
        <h4>{error} Failed to create post</h4>
        </div>
        
    
      )

      const performRedirect = () => {
        if (getRedirect) {
          if (createdPost){
            return <Redirect to="/"/>
          }else{
            return <Redirect to="/user/create/post"/>
          }
        }
      }

    const createPostForm = () => (
        <form >
          <span>Post photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-success">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
   
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success">
            Create Post
          </button>
        </form>
      );
    return (
        <Base title="Add Post" description= "Create a new post" className="container bg-info p-4">
        <Link to="/" className="btn btn-md btn-dark mb-3">
        Home
        </Link>
        <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
        {errorMessage()}
        {successMessage()}
        {createPostForm()}
        {performRedirect()}
        
        </div>
        </div>
        </Base>
    )
}

export default AddPost;