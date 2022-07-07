import {useEffect, useState} from "react";

import ApiService from "../services/api.service";
import CommentComponent from "../components/CommentComponent";

export default function Comments() {

    let apiService = new ApiService('comments');
    let [comments, setComments] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setComments(value))
    }, [])

    return <div>
        <h3>Comments</h3>
        {
            comments.map(value => <CommentComponent key={value.id} item={value}/>)
        }
    </div>
}