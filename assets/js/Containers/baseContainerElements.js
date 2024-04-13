import { Div } from "../Elements/div.js";
import { A_tag } from "../Elements/a_tag.js";
import { Images } from "../Elements/images.js";
import { P_tag } from "../Elements/p.js";
import { Button } from "../Elements/button.js";

class Elements {
  constructor(typeName) {
    this.typeName = typeName;
  }

  createElement(typeName) {
   
    if (typeName === "buttonTagPart") {
        const button = new Button('12', 'Malgun', 'grey', 'FirstButton', [30, 100], 5, 3, 10, 'solid').createButton();
      return button;
    }
    if (typeName === "aTagPart") {
        const aTag = new A_tag('none', 'black', '#', 'Текст оруулах', '14px', '10px').createA();
        return aTag;
    }
    if (typeName === "divTagPart"){
        const divTag = new Div("40vh", "20vw", "grey").createDiv();
    return divTag;
    }
    if (typeName === "pTagPart"){
        const pTag = new P_tag("Гарчиг", "32px", "Malgun", "black", "100%", "auto").createP();
        return pTag
    }
    if (typeName === "imageTagPart"){
        const image = new Images([250, 250]).createImg();
        return image;
    }
  }
}
export {Elements};