import {useForm} from "react-hook-form";

export default function PostComment() {

    let {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {postId: '1', name: 'Maria', body: 'hello, world!'}});
    let submit = (obj) => {
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text"{...register('postId', {required: true})}/>
                {errors.postId && <span>userId is required</span>}
                <input type="text"{...register('name', {required: true})}/>
                {errors.name && <span>name is required</span>}
                <input type="text"{...register('body', {required: true})}/>
                {errors.body && <span>post is required</span>}
                <input type="submit"/>
            </form>
        </div>
    )
}