import { API } from "../../backend";


//Create post
export const CreateaPost = (userId, token, post) => {
    return fetch(`${API}/post/create/${userId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        },
        body: post
      })
        .then(response => {
          return response.json();
        })
        .catch(err => console.log(err));
}

//Delete POST
export const DeletePost = (postId,userId, token,) => {
    return fetch (`${API}/post/delete/${postId}/${userId}`,{
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(error => console.log(error))
}
//Get a POST

    export const getPost = postId => {
        return fetch(`${API}/post/${postId}`,{
            method: 'GET',
        }).then(response => {
            return response.json()
        }).catch(error => console.log(error))
    }

//Update POST

export const UpdatePost = (postId,userId, token, post) => {
    return fetch (`${API}/post/update/${postId}/${userId}`,{
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: post
    })
    .then(response => {
        return response.json()
    })
    .catch(error => console.log(error))
}

