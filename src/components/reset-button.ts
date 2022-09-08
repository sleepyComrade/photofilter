import { Button } from "./button";

export class ResetButton extends Button {
  resetFilter: () => void;
  constructor(parent:HTMLElement, content: string) {
    super(parent, content);
    this.el.onclick = () => {
      this.resetFilter();
    }
  }

  getClick() {
    this.el.click();    
  }
}