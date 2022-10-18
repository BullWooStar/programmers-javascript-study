export default function GigInput({ $target, searchGig, setSearchHistoryList }) {
  this.$element = document.createElement('form');

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
    <input type='text' placeholder='밴드 이름을 입력하세요!'/>
    <button type='submit'>검색하기</button>`;
  };

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault();
    const $input = this.$element.querySelector('input');
    const { value } = $input;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(function () {
      if (value.length > 0) {
        searchGig(value);
        setSearchHistoryList(value);
        $input.value = '';
      }
    }, 200);
  });

  this.render();
}
