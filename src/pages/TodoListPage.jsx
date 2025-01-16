import TodoList from '../components/TodoList';
import TodoListAdd from '../components/TodoListAdd'
import withTodos from "../hocs/withTodos";

const TodoListPage = ({todos, addTodo}) => {
    return <div>
        <TodoListAdd onTaskAdd={addTodo} />
        <TodoList todos={todos} />
    </div>
};

const HocedTodoListPage = withTodos(TodoListPage, 'https://jsonplaceholder.typicode.com/todos');
export default HocedTodoListPage;
