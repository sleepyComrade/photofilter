import { IFilterData } from "./IFilterData";

export class Img {
  el
  blurValue: string;
  hueValue: string;
  contrastValue: string;
  grayscaleValue: string;
  invertValue: string;
  brightnessValue: string;
  saturateValue: string;
  constructor(parent:HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'image';
    parent.append(this.el);
  }

  setImage (str: string | ArrayBuffer) {
    this.el.style.backgroundImage = `url(${str})`;
    this.el.style.width = '90%';
  }

  setFilter (filter: IFilterData) {
    const blurValue = `blur(${filter.blurValue / 10}px)`;
    const hueValue = `hue-rotate(${filter.hueValue}deg)`;
    const contrastValue = `contrast(${filter.contrastValue}%)`;
    const grayscaleValue = `grayscale(${filter.grayscaleValue}%)`;
    const invertValue = `invert(${filter.invertValue}%)`;
    const brightnessValue = `brightness(${filter.brightnessValue}%)`;
    const saturateValue = `saturate(${filter.saturateValue}%)`;
    this.el.style.filter = `${blurValue} ${hueValue} ${contrastValue} ${grayscaleValue} ${invertValue} ${brightnessValue} ${saturateValue}`;
    return this.el.style.filter;
  }
}