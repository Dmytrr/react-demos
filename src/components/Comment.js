import React, {Component} from 'react';

class Comment extends Component {
    render() {
        return (
            <div>
                {this.props.item.id} - {this.props.item.postId} - {this.props.item.name}
            </div>
        );
    }
}

export default Comment;