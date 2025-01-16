const TodoList = ({todos}) => {
    console.log(todos);
    return todos !== null && todos.map((todo, index) => {
        const {title, completed} = todo;
        return <section key={index}>
            <strong>{title} {completed ? 'V' : 'X'}</strong>
        </section>
    });
};

export default TodoList;