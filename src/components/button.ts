export class Button {
  el
  constructor(parent:HTMLElement, content: string) {
    this.el = document.createElement('button');
    this.el.className = 'button';
    this.el.textContent = content;
    parent.append(this.el);
  }
}