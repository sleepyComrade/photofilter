import { Wrap } from "./wrap";
import { Img } from "./img";
import { ResetButton } from "./reset-button";
import { UploadSender } from "./upload-sender";
import { UploadButton } from "./upload-button";
import { DownloadButton } from "./download-button";
import { FilteredImage } from "./filtered-image";
import { SlidersWrap } from "./sliders-wrap";
import { IFilterData } from "./IFilterData";

const initialData: IFilterData = {
  blurValue: 0,
  hueValue: 0,
  contrastValue: 100,
  grayscaleValue: 0,
  invertValue: 0,
  brightnessValue: 100,
  saturateValue: 100
}

export class App extends Wrap {
  constructor(parent:HTMLElement, className: string) {
    super(parent, className);
    const settingWrap = new Wrap(this.el, 'setting-wrap');
    const settingLayout = new Wrap(settingWrap.el, 'setting-disabled');

    const slidersWrap = new SlidersWrap(settingWrap.el, initialData);
    const resetButton = new ResetButton(settingWrap.el, 'Reset to default');
    
    const imageAreaWrap = new Wrap(this.el, 'image-area-wrap');
    const buttonsWrap = new Wrap(imageAreaWrap.el, 'buttons-wrap');
    const uploadBtn = new UploadButton(buttonsWrap.el);
    const uploadSender = new UploadSender(buttonsWrap.el, 'Upload image');
    const downloadBtn = new DownloadButton(buttonsWrap.el, 'Download image');
    const image = new Img(imageAreaWrap.el);
    
    resetButton.resetFilter = () => {
      image.setFilter(initialData);
      slidersWrap.resetValues();
    }

    slidersWrap.onInputs = (data) => {
      image.setFilter(data);
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
          filteredImage.context.filter = image.setFilter(slidersWrap.data);
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