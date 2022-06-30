import {useForm} from "react-hook-form";

export default function PostComment() {

    let {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {userId: '1', title: 'title', body: 'hello, world!'}});
    let submit = (obj) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
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
                <input type="text"{...register('userId', {required: true})}/>
                {errors.userId && <span>userId is required</span>}
                <input type="text"{...register('title', {required: true})}/>
                {errors.title && <span>title is required</span>}
                <input type="text"{...register('body', {required: true})}/>
                {errors.body && <span>post is required</span>}
                <input type="submit"/>
            </form>
        </div>
    )
}