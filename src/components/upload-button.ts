export class UploadButton {
  el
  onChange: (data: string | ArrayBuffer | null) => void;
  constructor(parent:HTMLElement) {
    this.el = document.createElement('input');
    this.el.className = 'upload-btn';
    this.el.setAttribute('type', 'file');
    this.el.setAttribute('accept', 'image/png, image/jpg, image/jpeg');
    parent.append(this.el);
    this.el.onchange = () => {
      this._loadImage();
    }
  }

  private _loadImage() {
    const reader = new FileReader();
      reader.onload = () => {
        const img = reader.result;
        this.onChange(img);
      }
    if (this.el.files[0] && this.el.files[0].type.match('image.*')) {
      reader.readAsDataURL(this.el.files[0]);
    }
  }

  getClick() {
    this.el.click();
  }
}