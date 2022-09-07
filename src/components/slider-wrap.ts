export class SliderWrap {
  el
  constructor(parent:HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'slider-wrap';
    parent.append(this.el);
  }
}