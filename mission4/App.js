import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import Loading from './Loading.js';
import Users from './Users.js';

export default function App({ $target, initialState }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(this.state);
    todoCount.setState(this.state);
  };

  this.setLoadingState = (status) => {
    loading.setState(status);
  };

  const todoInput = new TodoInput({
    $target,
    setState: this.setState,
    setLoadingState: this.setLoadingState,
  });

  const loading = new Loading({ $target });
  const todoList = new TodoList({
    $target,
    initialState: this.state,
    setState: this.setState,
    setLoadingState: this.setLoadingState,
  });

  const todoCount = new TodoCount({ $target, initialState: this.state });

  const users = new Users({ $target });
}
