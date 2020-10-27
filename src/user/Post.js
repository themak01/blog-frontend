import React, {useState} from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { CreateaPost } from "./helper/userapicalls";

const Post = () => {

  const {user, token} = isAutheticated()

  const [values, setValues] = useState({
    postedby: "",
    description: "",
    photo: "",
    loading: false,
    error: "",
    createdPost: "",
    getaRedirect: false,
    formData: ""
  });

  const {
    postedby,
    description,
    loading,
    error,
    createdPost,
    getaRedirect,
    formData
  } = values;


  const onSubmit = (event) =>{
    event.preventDefault();
    setValues({...values, error:"", loading: true})
    CreateaPost(user._id,token,formData)
    .then(data => {
      if (data.error){
        setValues({...values, error: data.error})
      }else{
        setValues({
          ...values,
          postedby: "",
          description: "",
          photo: "", 
          loading: false,
          createdPost: data.post
        })
      }
    })
  }

  const handleChange = postedby => event => {
    const value = postedby === "photo" ? event.target.files[0] : event.target.value;
    FormData.set(postedby, value)
    setValues({ ...values, [postedby]: value });
  };

  const successMessage = () => (
    <div className="alert alert-success mt-3"
    style = {{display: createdPost ? "" : "none"}}
    >
    
    </div>
  )

  const warningMessage = () => {
    if(error) {
      
        return <h4 className="alert alert-danger mt-3">Post could not be created</h4>
        console.log(error);
    }
}
    const AddPost = () =>{
      return (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <form>
              <div className="form-group">
                <label className="text-light">Hi</label>
                <input
                placeholder="Add Product"
                  className="form-control"
                  type="text"
                  onChange={handleChange("description")}
                />
              </div>
              
              <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
              
              <button className="tweetBox__tweetButton"
              onClick = {onSubmit}
              >
                Realease
              </button>
            </form>
          </div>
          
        </div>
        
      );
    }
    
  return (
    <Base title="Add new post">
      {AddPost()}
      {successMessage()}
      {warningMessage()}
    </Base>
  );
};

export default Post;
