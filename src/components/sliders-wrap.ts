import { SliderItem } from "./slider-item";

export class SlidersWrap {
  el
  blurSlider
  hueSlider
  contrastSlider
  grayscaleSlider
  invertSlider
  brightnessSlider
  saturateSlider
  constructor(parent: HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'sliders-wrap';
    parent.append(this.el);

    this.blurSlider = new SliderItem(this.el, 'Blur', '0', '100');
    this.hueSlider = new SliderItem(this.el, 'Hue', '0', '360');
    this.contrastSlider = new SliderItem(this.el, 'Contrast', '100', '200');
    this.grayscaleSlider = new SliderItem(this.el, 'Grayscale', '0', '100');
    this.invertSlider = new SliderItem(this.el, 'Invert', '0', '100');
    this.brightnessSlider = new SliderItem(this.el, 'Brightness', '100', '200');
    this.saturateSlider = new SliderItem(this.el, 'Saturate', '100', '200');
  }

  resetValues () {
    this.blurSlider.resetValue();
    this.hueSlider.resetValue();
    this.contrastSlider.resetValue();
    this.grayscaleSlider.resetValue();
    this.invertSlider.resetValue();
    this.brightnessSlider.resetValue();
    this.saturateSlider.resetValue();
  }
}