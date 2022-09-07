export class SliderName {
  el
  constructor(parent:HTMLElement, content: string) {
    this.el = document.createElement('p');
    this.el.className = 'slider-name';
    this.el.textContent = content;
    parent.append(this.el);
  }
}