import {useEffect, useState} from "react";

import ApiService from "../services/api.service";
import AlbumComponent from "../components/AlbumComponent";

export default function Albums() {

    let apiService = new ApiService('albums');
    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setAlbums(value))
    }, [])

    return <div>
        <h3>Albums</h3>
        {
            albums.map(value => <AlbumComponent key={value.id} item={value}/>)
        }
    </div>
}