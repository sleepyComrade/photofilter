export class Slider {
  el
  defaultValue
  onInput: (value: number) => void;
  constructor(parent:HTMLElement, val: string, max: string) {
    this.el = document.createElement('input');
    this.el.className = 'slider';
    this.defaultValue = val;
    this.el.setAttribute('type', 'range');
    this.el.setAttribute('min', '0');
    this.el.setAttribute('max', max);
    this.el.setAttribute('value', this.defaultValue);
    parent.append(this.el);
    this.el.oninput = () => {
      const value = +(this.el.value);
      this.onInput(value);
    };
  }

  resetValue () {
    this.el.value = this.defaultValue;
  }
}