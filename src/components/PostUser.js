import {useForm} from "react-hook-form";

export default function PostUser() {

    let {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {name: 'name', username: 'username'}});
    let submit = (obj) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
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
                <input type="text"{...register('name', {required: true})}/>
                {errors.name && <span>name is required</span>}
                <input type="text"{...register('username', {required: true})}/>
                {errors.username && <span>username is required</span>}
                <input type="submit"/>
            </form>
        </div>
    )
}