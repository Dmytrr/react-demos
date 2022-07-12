import React, {Component} from 'react';

class Post extends Component {

    render() {
        return (
            <div>
                {this.props.item.id} - {this.props.item.title}
            </div>
        );
    }
}

export default Post;