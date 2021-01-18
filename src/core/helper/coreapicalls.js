import { API } from "../../backend";

export const getPosts = () => {
    return fetch(`${API}/all/users/posts`,{ 
        method: 'GET',

    })
    .then (response => { 
        return response.json();
    })
    .catch (err => console.log(err))
}