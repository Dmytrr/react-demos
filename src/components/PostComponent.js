export default function PostComponent({item: {userId, id, title, body}}) {
    return <div>
        {userId} - {id} - {title} - {body}
    </div>
}