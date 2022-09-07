import { Wrap } from "./wrap";
import { Img } from "./img";
import { SliderWrap } from "./slider-wrap";
import { SliderName } from "./slider-name";
import { Slider } from "./slider";
import { ResetButton } from "./reset-button";
import { UploadSender } from "./upload-sender";
import { UploadButton } from "./upload-button";
import { DownloadButton } from "./download-button";
import { FilteredImage } from "./filtered-image";

export class App extends Wrap {
  constructor(parent:HTMLElement, className: string) {
    super(parent, className);
    const settingWrap = new Wrap(this.el, 'setting-wrap');
    const settingLayout = new Wrap(settingWrap.el, 'setting-disabled');

    const blurSliderWrap = new SliderWrap(settingWrap.el);
    const blurSliderName = new SliderName(blurSliderWrap.el, 'Blur');
    const blurSlider = new Slider(blurSliderWrap.el, '0', '100');

    const hueSliderWrap = new SliderWrap(settingWrap.el)
    const hueSliderName = new SliderName(hueSliderWrap.el, 'Hue');
    const hueSlider = new Slider(hueSliderWrap.el, '0', '360');

    const contrastSliderWrap = new SliderWrap(settingWrap.el);
    const contrastSliderName = new SliderName(contrastSliderWrap.el, 'Contrast');
    const contrastSlider = new Slider(contrastSliderWrap.el, '100', '200');

    const grayscaleSliderWrap = new SliderWrap(settingWrap.el);
    const grayscaleSliderName = new SliderName(grayscaleSliderWrap.el, 'Grayscale');
    const grayscaleSlider = new Slider(grayscaleSliderWrap.el, '0', '100');

    const invertSliderWrap = new SliderWrap(settingWrap.el);
    const invertSliderName = new SliderName(invertSliderWrap.el, 'Invert');
    const invertSlider = new Slider(invertSliderWrap.el, '0', '100');

    const brightnessSliderWrap = new SliderWrap(settingWrap.el);
    const brightnessSliderName = new SliderName(brightnessSliderWrap.el, 'Brightness');
    const brightnessSlider = new Slider(brightnessSliderWrap.el, '100', '200');

    const saturateSliderWrap = new SliderWrap(settingWrap.el);
    const saturateSliderName = new SliderName(saturateSliderWrap.el, 'Saturate');
    const saturateSlider = new Slider(saturateSliderWrap.el, '100', '200');

    const resetButton = new ResetButton(settingWrap.el, 'Reset to default');
    
    const imageAreaWrap = new Wrap(this.el, 'image-area-wrap');
    const buttonsWrap = new Wrap(imageAreaWrap.el, 'buttons-wrap');
    const uploadBtn = new UploadButton(buttonsWrap.el);
    const uploadSender = new UploadSender(buttonsWrap.el, 'Upload image');
    const downloadBtn = new DownloadButton(buttonsWrap.el, 'Download image');
    const image = new Img(imageAreaWrap.el);
    
    resetButton.resetFilter = () => {
      blurSlider.resetValue();
      hueSlider.resetValue();
      contrastSlider.resetValue();
      grayscaleSlider.resetValue();
      invertSlider.resetValue();
      brightnessSlider.resetValue();
      saturateSlider.resetValue();
      image.resetFilter();
      image.setFilter();
    }

    blurSlider.onInput = (num) => {
      image.setBlur(num);
      image.setFilter();
    }

    hueSlider.onInput = (num) => {
      image.setHue(num);
      image.setFilter();
    }

    contrastSlider.onInput = (num) => {
      image.setContrast(num);
      image.setFilter();
    }

    grayscaleSlider.onInput = (num) => {
      image.setGrayscale(num);
      image.setFilter();
    }

    invertSlider.onInput = (num) => {
      image.setInvert(num);
      image.setFilter();
    }

    brightnessSlider.onInput = (num) => {
      image.setBrightness(num);
      image.setFilter();
    }

    saturateSlider.onInput = (num) => {
      image.setSaturate(num);
      image.setFilter();
    }

    uploadSender.transmitClick = () => {
      uploadBtn.getClick();
    }

    uploadBtn.onChange = (str) => {
      image.setImage(str);
      const img = new Image();
      if (typeof str === 'string') {
          img.src = str;
        }
      const filteredImage = new FilteredImage(img);
      downloadBtn.downloadImg = () => {
          filteredImage.context.filter = image.setFilter();
          filteredImage.context.drawImage(img, 0, 0, filteredImage.canvas.width, filteredImage.canvas.height);
          const link = document.createElement('a');
          link.download = uploadBtn.el.files[0].name;
          link.href = filteredImage.canvas.toDataURL();
          link.click();
          filteredImage.remove();
      }
      settingLayout.remove();
      downloadBtn.el.classList.remove('disabled-button');
      resetButton.getClick();
    }
  }
}