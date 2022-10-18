import { readUserList, readTodoList } from './api.js';

const userList = await readUserList();

export default function Users({ $target }) {
  this.$element = document.createElement('div');
  this.$element.setAttribute(
    'style',
    'display: flex; margin-top: 50px; border: 1px solid black '
  );
  $target.appendChild(this.$element);

  this.ul = document.createElement('ul');
  this.$element.appendChild(this.ul);

  this.userTodoList = document.createElement('div');
  this.$element.appendChild(this.userTodoList);

  this.state = userList;

  this.usersTodos = { name: '', todos: [] };

  this.checkedStatus = null;

  this.render = function () {
    //userlist
    this.ul.innerHTML = `
    <p>모든 유저 리스트 </p>  
    <p> 즐겨찾기 보기 <input class='checkbox' type="checkbox" ${
      this.checkedStatus
    }></p>
        ${this.state
          .map(
            (user) =>
              `<div style='display: flex; margin-right: 140px'>
                <span style='margin-right: 20px'> ${
                  JSON.parse(localStorage.getItem(user)) ? '❤️' : ''
                }</span>
                <li data-user="${user}" class='users' style='cursor:pointer; margin-right: 20px'>${user}</li>
                <button data-user="${user}" class='button' style=${
                this.checkedStatus ? 'display:none' : ''
              }>${
                JSON.parse(localStorage.getItem(user))
                  ? '즐겨찾기 해제'
                  : '즐겨찾기 등록'
              }</button>
                </div>`
          )
          .join('')}
      `;

    this.$element.querySelectorAll('.users').forEach(($li) => {
      const user = $li.dataset.user;
      $li.addEventListener('click', async () => {
        this.usersTodos.name = user;
        this.usersTodos.todos = await readTodoList(`${user}`);
        this.render();
      });
    });

    this.$element.querySelectorAll('.button').forEach(($button) => {
      const user = $button.dataset.user;
      $button.addEventListener('click', async () => {
        if (localStorage.getItem(user) === null) {
          localStorage.setItem(`${user}`, true);
        } else {
          localStorage.setItem(
            `${user}`,
            !JSON.parse(localStorage.getItem(user))
          );
        }
        this.render();
      });
    });

    this.$element
      .querySelector('.checkbox')
      .addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
          this.state = userList.filter(
            (user) => JSON.parse(localStorage.getItem(user)) === true
          );
          this.checkedStatus = 'checked';
          this.render();
        } else {
          this.checkedStatus = null;
          this.state = userList;
          this.render();
        }
      });

    //user's Todolist
    this.userTodoList.innerHTML = `
    <div>${this.usersTodos.name}의 todolist</div>
    <ul>${this.usersTodos.todos
      .map(
        ({ isCompleted, content }) =>
          `<li>${isCompleted ? '[완료]' : ''}${content}</li>`
      )
      .join('')}</ul>`;
  };

  this.render();
}
