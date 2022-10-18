export default function GigList({ $target, initialState, searchGig }) {
  this.$element = document.createElement('ul');
  $target.appendChild(this.$element);

  this.state = initialState;

  this.render = function () {
    if (this.state.length > 0) {
      this.$element.innerHTML = this.state
        .map(
          (gig) =>
            `<li style="display: flex; margin-bottom: 50px">
              <img src="${gig.poster}" style=" width: 33%;">
              <div style="margin-left: 30px">
                  <p>공연제목 : ${gig.title}</p>
                  <p>공연날짜 : ${gig.startDate}</p>
                  <label>참여뮤지션</label>
                  <ul>${gig.musicians
                    .map(
                      (el) =>
                        `<li class='musicians' style='cursor:pointer'>${el}</li>`
                    )
                    .join('')}</ul>
          
              </div>
            </li>`
        )
        .join('');

      this.$element.querySelectorAll('.musicians').forEach(($li, index) => {
        $li.addEventListener('click', () => {
          searchGig($li.childNodes[0].data);
        });
      });
    }
  };

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();
}
