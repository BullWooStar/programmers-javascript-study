import { readTodoList, deleteTodo, toggleTodo } from './api.js';

export default function TodoList({
  $target,
  initialState,
  setState,
  setLoadingState,
}) {
  this.$element = document.createElement('ul');
  $target.appendChild(this.$element);

  this.state = initialState;

  this.render = function () {
    this.$element.innerHTML = this.state
      .map(
        ({ isCompleted, content, _id }) =>
          `<li data-id="${_id}">${
            isCompleted ? '[완료]' : ''
          }${content}<button>X</button></li>`
      )
      .join('');
  };

  this.$element.addEventListener('click', async (e) => {
    const $li = e.target.closest('li');
    if (!$li) {
      return;
    }

    const id = $li.dataset.id;
    if (e.target.tagName === 'LI') {
      setLoadingState(true);
      await toggleTodo(id);
      setState(await readTodoList('bullwoo'));
      setLoadingState(false);
    } else if (e.target.tagName === 'BUTTON') {
      setLoadingState(true);
      await deleteTodo(id);
      setState(await readTodoList('bullwoo'));
      setLoadingState(false);
    }
  });

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();
}
