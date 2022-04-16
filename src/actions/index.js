const LOAD_POSTS = 'LOAD_POSTS';
const ADD_POSTS = 'ADD_POSTS';


export const loadPosts = (value) => {
    return {
        type: LOAD_POSTS,
        payload: value
    }
}

export const addPosts = (value) => {
    return {
        type: ADD_POSTS,
        payload: value
    }
}