import { Button } from "./button";

export class DownloadButton extends Button {
  downloadImg: () => void;
  constructor(parent:HTMLElement, content: string) {
    super(parent, content);
    this.el.classList.add('disabled-button');
    this.el.onclick = () => {
      this.downloadImg();
    }
  }
}