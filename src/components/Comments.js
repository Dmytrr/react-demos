import React, {Component} from 'react';

import ApiService from "../services/api.service";
import Comment from "./Comment";


class Comments extends Component {

    state = {comments: []}

    constructor(props, context) {
        super(props, context);
        this.commentsApiService = new ApiService();
        this.commentsApiService.getComments().then(value => this.setState({...this.state, comments: value}))
    }

    render() {
        return (
            <div>
                <h2>Comments</h2>
                {
                    this.state.comments.map(value => <Comment key={value.id} item={value}/>)
                }
            </div>
        );
    }
}

export default Comments;