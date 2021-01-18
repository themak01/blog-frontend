import React from 'react';
import { API } from '../backend';
import Base from './Base';
import ImageHelper from './helper/ImageHelper';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaRegCommentAlt } from 'react-icons/fa';
    const PostCard = ({post}) => {
        return (
          <div className="card text-white bg-dark border border-info  ">
            <div className="card-header lead">A photo from pexels</div>
            <div className="card-body">
              <ImageHelper post = {post}/>
              
              <div className="row">
              <div className="col-12">
              <p className="text-white    btn-sm px-6">Description</p>
              </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <AiOutlineThunderbolt />
                   <p>1</p>
                  
                </div>
                
                
                <div className="row">
                <div className="col-1">
                <FaRegCommentAlt/><p>1</p>
                </div>
                
                </div>
                
              </div>
              
             
              
            </div>
          </div>
        );
      };
   


export default PostCard;