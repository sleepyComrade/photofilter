export class Wrap {
  el
  constructor(parent:HTMLElement, className: string) {
    this.el = document.createElement('div');
    this.el.className = className;
    parent.append(this.el);
  }

  remove() {
    this.el.remove();
  }
}