export class SliderItem {
  el
  name
  slider
  defaultValue
  onInput: (value: number) => void;
  constructor(parent:HTMLElement, content: string, val: string, max: string) {
    this.el = document.createElement('div');
    this.el.className = 'slider-wrap';
    parent.append(this.el);

    this.name = document.createElement('p');
    this.name.className = 'slider-name';
    this.name.textContent = content;
    this.el.append(this.name);

    this.slider = document.createElement('input');
    this.slider.className = 'slider';
    this.defaultValue = val;
    this.slider.setAttribute('type', 'range');
    this.slider.setAttribute('min', '0');
    this.slider.setAttribute('max', max);
    this.slider.setAttribute('value', this.defaultValue);
    this.el.append(this.slider);
    this.slider.oninput = () => {
      const value = +(this.slider.value);
      this.onInput(value);
    };
  }

  resetValue () {
    this.slider.value = this.defaultValue;
  }
}