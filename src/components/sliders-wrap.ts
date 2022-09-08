import { SliderItem } from "./slider-item";
import { IFilterData } from "./IFilterData";

export class SlidersWrap {
  el;
  blurSlider;
  hueSlider;
  contrastSlider;
  grayscaleSlider;
  invertSlider;
  brightnessSlider;
  saturateSlider;
  data: IFilterData;
  initial: IFilterData;
  onInputs: (data: IFilterData) => void;
  constructor(parent: HTMLElement, initialData: IFilterData) {
    this.el = document.createElement("div");
    this.el.className = "sliders-wrap";
    parent.append(this.el);
    this.initial = initialData;
    this.data = JSON.parse(JSON.stringify(this.initial));

    this.blurSlider = new SliderItem(this.el, "Blur", initialData.blurValue + '', "100");
    this.hueSlider = new SliderItem(this.el, "Hue", initialData.hueValue + '', "360");
    this.contrastSlider = new SliderItem(this.el, "Contrast", initialData.contrastValue + '', "200");
    this.grayscaleSlider = new SliderItem(this.el, "Grayscale", initialData.grayscaleValue + '', "100");
    this.invertSlider = new SliderItem(this.el, "Invert", initialData.invertValue + '', "100");
    this.brightnessSlider = new SliderItem(this.el, "Brightness", initialData.brightnessValue + '', "200");
    this.saturateSlider = new SliderItem(this.el, "Saturate", initialData.saturateValue + '', "200");
    this.blurSlider.onInput = (value) => {
      this.data.blurValue = value;
      this.onInputs(this.data);
    };
    this.hueSlider.onInput = (value) => {
      this.data.hueValue = value;
      this.onInputs(this.data);
    };
    this.contrastSlider.onInput = (value) => {
      this.data.contrastValue = value;
      this.onInputs(this.data);
    };
    this.grayscaleSlider.onInput = (value) => {
      this.data.grayscaleValue = value;
      this.onInputs(this.data);
    };
    this.invertSlider.onInput = (value) => {
      this.data.invertValue = value;
      this.onInputs(this.data);
    };
    this.brightnessSlider.onInput = (value) => {
      this.data.brightnessValue = value;
      this.onInputs(this.data);
    };
    this.saturateSlider.onInput = (value) => {
      this.data.saturateValue = value;
      this.onInputs(this.data);
    };
  }

  resetValues() {
    this.blurSlider.resetValue();
    this.hueSlider.resetValue();
    this.contrastSlider.resetValue();
    this.grayscaleSlider.resetValue();
    this.invertSlider.resetValue();
    this.brightnessSlider.resetValue();
    this.saturateSlider.resetValue();
    this.data = JSON.parse(JSON.stringify(this.initial));
  }
}