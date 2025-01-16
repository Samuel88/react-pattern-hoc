import withForm from '../hocs/withForm';

const initialData = {
    task: ''
};

const TodoListAdd = ({handleInputChange, formData, resetInput, onTaskAdd}) => {
    return <form onSubmit={(event) => {
        event.preventDefault();
        onTaskAdd(formData.task);
        resetInput();
    }}>
        <p>{ JSON.stringify(formData) }</p>
        <input type="text" name="task" id="task" value={formData.task} onChange={handleInputChange} />
        <button type="submit">Add</button>
    </form>
};

const withFormTodoListAdd = withForm(TodoListAdd, initialData);
export default withFormTodoListAdd;