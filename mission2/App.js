import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';

export default function App({ $target, initialState }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(this.state);
    todoCount.setState(this.state);
  };

  const todoInput = new TodoInput({
    $target,
    onAddTodo: (text) => {
      this.setState([...this.state, { text, isCompleted: false }]);
    },
    onRemoveAllClick: () => {
      this.setState([]);
    },
  });
  const todoList = new TodoList({
    $target,
    initialState: this.state,
    onClick: (index) => {
      const nextState = [...this.state];
      nextState[index].isCompleted = !nextState[index].isCompleted;

      this.setState(nextState);
    },
    onRemoveClick: (index) => {
      const nextState = [...this.state];
      nextState.splice(index, 1);

      this.setState(nextState);
    },
  });

  const todoCount = new TodoCount({ $target, initialState: this.state });

  // window.addEventListener('removeAll', () => {
  //   this.setState([]);
  // });
}
