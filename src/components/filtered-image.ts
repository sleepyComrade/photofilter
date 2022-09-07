export class FilteredImage {
  canvas
  context
  constructor (image: HTMLImageElement) {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    image.onload = () => {
      this.canvas.width = image.naturalWidth;
      this.canvas.height = image.naturalHeight;
    }
  }

  remove () {
    this.canvas.remove();
  }
}