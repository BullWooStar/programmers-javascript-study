export default function SearchHistory({
  $target,
  searchHistoryList,
  searchGig,
}) {
  this.state = searchHistoryList;

  this.$element = document.createElement('ul');

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `<lavel>검색기록</label>
      ${this.state
        .map((el) => `<li style='cursor:pointer'>${el}</li>`)
        .join('')}`;
    this.$element.querySelectorAll('li').forEach(($li, index) => {
      $li.addEventListener('click', () => {
        searchGig(this.state[index]);
      });
    });
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render();
}
