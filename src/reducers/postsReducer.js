export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_POSTS':
            return [...state, action.payload];
        case 'LOAD_POSTS':
            return state
        default:
            return state
    }
}