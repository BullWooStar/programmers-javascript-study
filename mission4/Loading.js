export default function Loading({ $target }) {
  this.state = false;
  this.$element = document.createElement('div');

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `<div ${
      this.state ? '' : 'style="display: none"'
    }>Loading</div>`;
  };

  this.render();

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
}
