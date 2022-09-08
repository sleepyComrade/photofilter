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
    this.resetFilter();
  }

  resetFilter () {
    this.blurValue = 'blur(0px)';
    this.hueValue = 'hue-rotate(0deg)';
    this.contrastValue = 'contrast(100%)';
    this.grayscaleValue = 'grayscale(0%)';
    this.invertValue = 'invert(0%)';
    this.brightnessValue = 'brightness(100%)';
    this.saturateValue = 'saturate(100%)';
  }

  setImage (str: string | ArrayBuffer) {
    this.el.style.backgroundImage = `url(${str})`;
    this.el.style.width = '90%';
  }

  setFilter () {
    this.el.style.filter = `${this.blurValue} ${this.hueValue} ${this.contrastValue} ${this.grayscaleValue} ${this.invertValue} ${this.brightnessValue} ${this.saturateValue}`;    
    return this.el.style.filter;
  }

  setValues(value: number, property: string) {
    switch (property) {
      case 'Blur':
      this.blurValue = `blur(${value / 10}px)`;
        break;
      case 'Hue':
      this.hueValue = `hue-rotate(${value}deg)`;
        break;
        case 'Contrast':
        this.contrastValue = `contrast(${value}%)`;
      break;
      case 'Grayscale':
      this.grayscaleValue = `grayscale(${value}%)`;
      break;
      case 'Invert':
      this.invertValue = `invert(${value}%)`;
      break;
      case 'Brightness':
      this.brightnessValue = `brightness(${value}%)`;
      break;
      case 'Saturate':
      this.saturateValue = `saturate(${value}%)`;
      break;
      default:
        return;
        break;
    }
  }

  // setContrast(value: number) {
  //   this.contrastValue = `contrast(${value}%)`;
  // }

  // setHue(value: number) {
  //   this.hueValue = `hue-rotate(${value}deg)`;
  // }

  // setBlur(value: number) {
  //   this.blurValue = `blur(${value / 10}px)`;
  // }

  // setGrayscale(value: number) {
  //   this.grayscaleValue = `grayscale(${value}%)`;
  // }

  // setInvert(value: number) {
  //   this.invertValue = `invert(${value}%)`;
  // }

  // setBrightness(value: number) {
  //   this.brightnessValue = `brightness(${value}%)`;
  // }

  // setSaturate(value: number) {
  //   this.saturateValue = `saturate(${value}%)`;
  // }
}