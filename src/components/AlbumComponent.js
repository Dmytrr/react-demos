export default function AlbumComponent({item: {id, userId, title}}) {
    return <div>
        {id} - {userId} - {title}
    </div>
}