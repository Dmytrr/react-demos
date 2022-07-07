import {useEffect, useState} from "react";

import ApiService from "../services/api.service";
import TodoComponent from "../components/TodoComponent";

export default function Todos() {

    let apiService = new ApiService('todos');
    let [todos, setTodos] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setTodos(value))
    }, [])

    return <div>
        <h3>Todos</h3>
        {
            todos.map(value => <TodoComponent key={value.id} item={value}/>)
        }
    </div>
}