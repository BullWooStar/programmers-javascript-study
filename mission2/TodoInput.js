export default function TodoInput({ $target, onAddTodo, onRemoveAllClick }) {
  this.$element = document.createElement('form');
  this.$element.setAttribute('action', '/post');

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
    <input type='text' placeholder='할일을 입력하세요!'/>
    <button type='submit'>추가하기</button>   
    <button class='remove-all' style='margin-left:50px'> 모두 지우기</button>`;
  };

  this.render();

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault();
    const $input = this.$element.querySelector('input');
    const { value } = $input;
    if (value.length > 0) {
      onAddTodo(value);
      $input.value = '';
    }
  });

  this.$element.addEventListener('click', (e) => {
    if (e.target.className === 'remove-all') {
      onRemoveAllClick();
      // window.dispatchEvent(new Event('removeAll'))
    }
  });

  this.render();
}
