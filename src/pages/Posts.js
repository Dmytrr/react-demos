import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import ApiService from "../services/api.service";
import PostComponent from "../components/PostComponent";

export default function Posts() {

    let apiService = new ApiService('posts');
    let [posts, setPosts] = useState([]);
    let location = useLocation();
    let {state} = location;

    useEffect(() => {
        apiService.getSingleData(state).then(value => setPosts(value))
    }, [])

    return <div>
        <h3>Post {state}</h3>
        <PostComponent item={posts}/>
    </div>
}