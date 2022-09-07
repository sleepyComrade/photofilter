import { Button } from "./button";

export class UploadSender extends Button {
  transmitClick: () => void;
  constructor(parent:HTMLElement, content: string) {
    super(parent, content);
    this.el.onclick = () => {
      this.transmitClick();
    }
  }
}