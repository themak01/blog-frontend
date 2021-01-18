import { API } from "../../backend";

// All Users
export const AllUsers = (userId,token,user) => {
    return fetch(`${API}/all/users/${userId}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body:user
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err))

}

// All Posts
export const AllPosts = (userId,token,post) => {
    return fetch(`${API}/all/users/${userId}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body:post
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err))

}