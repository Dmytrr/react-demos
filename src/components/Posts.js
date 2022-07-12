import React, {Component} from 'react';

import ApiService from "../services/api.service";
import Post from "./Post";


class Posts extends Component {

    state = {posts: []}

    constructor(props, context) {
        super(props, context);
        this.postsApiService = new ApiService();
        this.postsApiService.getPosts().then(value => this.setState({...this.state, posts: value}));
    }

    render() {
        return (
            <div>
                <h2>Posts</h2>
                {
                    this.state.posts.map(value => <Post key={value.id} item={value}/>)
                }
            </div>
        );
    }
}

export default Posts;