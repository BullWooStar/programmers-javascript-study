export default function TodoList({
  $target,
  initialState,
  onClick,
  onRemoveClick,
}) {
  this.$element = document.createElement('ul');
  $target.appendChild(this.$element);

  this.state = initialState;

  this.render = function () {
    this.$element.innerHTML = this.state
      .map(
        ({ isCompleted, text }, index) =>
          `<li data-index="${index}">${
            isCompleted ? '[완료]' : ''
          }${text}<button>X</button></li>`
      )
      .join('');

    //normal eventlistener
    // this.$element.querySelectorAll('li').forEach(($li, index) => {
    //   $li.addEventListener('click', () => {
    //     onClick(index);
    //   });
    //   $li.querySelector('button').addEventListener('click', (e) => {
    //     e.stopPropagation();
    //     onRemoveClick(index);
    //   });
    // });
  };

  //event delegation
  this.$element.addEventListener('click', (e) => {
    const $li = e.target.closest('li');
    if (!$li) {
      return;
    }

    const index = $li.dataset.index;
    if (e.target.tagName === 'LI') {
      onClick(index);
    } else if (e.target.tagName === 'BUTTON') {
      onRemoveClick(index);
    }
  });

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();
}
