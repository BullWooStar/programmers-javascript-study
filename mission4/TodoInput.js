import { readTodoList, addTodo, deleteAllTodo } from './api.js';

export default function TodoInput({ $target, setState, setLoadingState }) {
  this.$element = document.createElement('form');
  this.$element.setAttribute('action', '/post');

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
    <input type='text' placeholder='할일을 입력하세요!'/>
    <button type='submit'>추가하기</button>   
    <button class='remove-all' style='margin-left:50px'> 모두 지우기</button>`;
  };

  this.$element.addEventListener('submit', async (e) => {
    e.preventDefault();
    const $input = this.$element.querySelector('input');
    const { value } = $input;
    if (value.length > 0) {
      setLoadingState(true);
      await addTodo(value);
      setState(await readTodoList('bullwoo'));
      setLoadingState(false);
      $input.value = '';
    }
  });

  this.$element.addEventListener('click', async (e) => {
    if (e.target.className === 'remove-all') {
      setLoadingState(true);
      await deleteAllTodo();
      setState(await readTodoList('bullwoo'));
      setLoadingState(false);
    }
  });

  this.render();
}
