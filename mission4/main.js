import App from './App.js';
import { readTodoList } from './api.js';

const initialState = await readTodoList('bullwoo');

const $target = document.querySelector('.todo-list');

new App({
  $target,
  initialState,
});
