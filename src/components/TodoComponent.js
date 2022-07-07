export default function TodoComponent({item: {id, userId, title, completed}}) {
    return <div>
        {id} - {userId} - {title} - {completed.toString()}
    </div>
}