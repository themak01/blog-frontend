import { API } from "../../backend";

//Create a Post
export const createaPost = (userId,token,post) => {
    return fetch(`${API}/post/create/${userId}`,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: post
    }).then(response =>{
        return response.json()
    })
    .catch(err =>console.log(err))
}

//Update a Post 

export const updatePost = (userId,postId,token,post) => {
    return fetch(`${API}/post/update/${postId}/${userId}`,{
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: post
    }).then(response =>{
        return response.json()
    })
    .catch(err =>console.log(err))
}

//Delete a post 

export const deletePost = (userId,postId,token,post) => {
    return fetch(`${API}/post/delete/${postId}/${userId}`,{
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: post
    }).then(response =>{
        return response.json()
    })
    .catch(err =>console.log(err))
}