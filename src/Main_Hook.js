import React from "react"
import { useSelector, useDispatch } from "react-redux";

import { loadPosts, addPosts } from "./actions";

const Main_Hook = (props) => {

    const _posts = useSelector((state) => state.posts);
    const _users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    
    const onClick = () => {
        dispatch(addPosts("canada"))
        // props.addPosts("canada")
    }

    return(
        <div>
            <button onClick={onClick}>Click</button>
            {_posts.map((x, i) => <p key={i}>{x}</p>)}
        </div>
    )
}

export default Main_Hook;

// const mapStateToProps = (state) => {
//     return {
//         posts: state.posts,
//         users: state.users,
//     }
// }

// export default connect(mapStateToProps, {
//     loadPosts,
//     addPosts,
// })(Main);