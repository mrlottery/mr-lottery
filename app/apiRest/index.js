const BASEURL = "https://mrlottery.herokuapp.com/api/";

export const apiAddPost = (post) => {
    const url = BASEURL + "/posts/";
    const request = {
        method:'POST',
        body: JSON.stringify(post),
        headers: {"Content-type":"application/json; charset=UTF-8"}
    };
    return fetch(url, request)
        .then(response => response.json());
};

export const apiGetAllThemes = (post) => {
    const url = BASEURL + "tema/all";
    const request = {
        method:'GET',
        body: JSON.stringify(post),
        headers: {"Content-type":"application/json; charset=UTF-8"}
    };
    
    return fetch(url, request)
        .then(response => response.json());
};

export const apiGetPost = () => {

    const url = BASEURL + "tema/all" ;

    return fetch(url)
        .then(response => response.json());
};
