import App from './App.js';

const initialState = [
  {
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

const $target = document.querySelector('.todo-list');

new App({
  $target,
  initialState,
});
