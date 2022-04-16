import React from "react"
import { connect } from "react-redux";

import { loadPosts, addPosts } from "./actions";

const Main = (props) => {
    
    const onClick = () => {
        props.addPosts("canada")
    }

    return(
        <div>
            <button onClick={onClick}>Click</button>
            {props.posts.map((x, i) => <p key={i}>{x}</p>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        users: state.users,
    }
}

export default connect(mapStateToProps, {
    loadPosts,
    addPosts,
})(Main);