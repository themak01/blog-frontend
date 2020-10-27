import { API } from "../../backend";


export const getAllPosts = () => {
    return fetch(`${API}/all/users/posts`, {
        method: 'GET',

    }).then((response) =>{ 
        return response.json();
    })
    .catch(error => console.log(error))
}