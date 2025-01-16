import { useEffect, useState } from "react";
import withFetch from './withFetch';

const withTodos = (WrapperComponent) => {
    return withFetch(({data, ...other}) => {
        console.log(data);

        const [todos, setTodos] = useState(data);

        useEffect(() => {
            setTodos(data);
        }, [data])

        const addTodo = (task) => {
            setTodos(todos => [...todos, {
                title: task,
                completed: false,
            }]);
        }

        return <WrapperComponent todos={todos} addTodo={addTodo} {...other} />
    }, 'https://jsonplaceholder.typicode.com/todos');
};

export default withTodos;