import {Link} from "react-router-dom";

export default function CommentComponent({item: {id, postId, name, body}}) {
    return <div>
        {id} - {postId} - <Link to={postId.toString()} state={postId}>{name}</Link> - {body}
    </div>
}