import withFetch from "../hocs/withFetch";

const TodoList = ({data}) => {
    console.log(data);
    return data !== null && data.map(todo => {
        const {id, title, completed} = todo;
        return <section key={id}>
            <strong>{title} {completed ? 'V' : 'X'}</strong>
        </section>
    });
};

export default withFetch(TodoList, 'https://jsonplaceholder.typicode.com/todos');