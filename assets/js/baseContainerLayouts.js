import { Div } from "./div.js";
import { A_tag } from "./a_tag.js";
import { Images } from "./images.js";
import { P_tag } from "./p.js";
import { Button } from "./button.js";

class Layouts {
  constructor(typeName) {
    this.typeName = typeName;
  }

  createLayout(typeName) {
    if (typeName === "headerSimpleLayoutPart") {
      const aTags = Array.from({ length: 5 }, () => new A_tag('none', 'white', '#', 'Текст оруулах', '14px', '10px').createA());
      const imageObject = new Images([70, 80]);

      const divObjectInner = new Div("50%", "30%", "black");
      const divObject = new Div("100%", "15%", "black");

      const divIn = divObjectInner.createDiv();
      divIn.classList.remove("selectable");
      divIn.style.backgroundColor = "transparent";

      const div = divObject.createDiv();
      const logo = imageObject.createImg();

      div.appendChild(logo);
      aTags.forEach((aTag) => divIn.appendChild(aTag));
      div.appendChild(divIn);

      divIn.style.display = "flex";
      divIn.style.justifyContent = "space-around";
      divIn.style.alignItems = "center";
      div.style.display = "flex";
      div.style.justifyContent = "space-around";
      div.style.alignItems = "center";
      return div;
    }
    if (typeName === "bodySimpleLayoutPart") {
      const pTags = Array.from({ length: 1 }, () => new P_tag("Энд тайлбар мэдээлэл оруулна уу", "16px", "Malgun", "white", "100%", "40px").createP());
      const pTags2 = new P_tag("Гарчиг", "32px", "Malgun", "white", "100%", "auto").createP();
      const imageObject = new Images([250, 250]);

      const divObjectInner = new Div("35%", "auto", "black");
      const divObject = new Div("100%", "50%", "black");
      const buttonIns = new Button('12', 'Malgun', 'grey', 'FirstButton', [30, 100], 5, 3, 10, 'solid');
      const button = buttonIns.createButton();
      const divIn = divObjectInner.createDiv();
      divIn.classList.remove("selectable");
      divIn.style.backgroundColor = "transparent";

      const div = divObject.createDiv();
      const logo = imageObject.createImg();

      div.appendChild(logo);
      divIn.appendChild(pTags2);
      pTags.forEach((pTag) => divIn.appendChild(pTag));
      divIn.appendChild(button);
      div.appendChild(divIn);

      divIn.style.display = "block";
      divIn.style.position = "relative";
      divIn.style.textAlign = "top";
      div.style.display = "flex";
      div.style.justifyContent = "space-around";
      div.style.alignItems = "center";
      return div;
    }
    if (typeName === "footerSimpleLayoutPart") {
      
      const hrefLogo = ["https://i.pinimg.com/736x/2b/a7/17/2ba717ac010d3b9f8d26e9db4da291b8.jpg", "https://static.designboom.com/wp-content/uploads/2023/09/facebook-new-logo-change-designboom-02.jpg", "https://png.pngtree.com/png-vector/20190830/ourmid/pngtree-linked-in-icon-design-vector-png-image_1709815.jpg"];
      const aTags = Array.from({ length: 4 }, () => new A_tag('none', 'white', '#', 'Текст оруулах', '14px', '10px').createA());
      
      const mapingImage = hrefLogo.map(url => {
        const images = new Images([30, 30], '50%').createImg();
        images.src = url;
        return images;
      });
      const mapingA = mapingImage.map(image=>{
        const aTagContainer = new A_tag('none', 'white', '#top', ' ', ' ', '10px').createA();
        aTagContainer.appendChild(image);
        return aTagContainer;
      })
      
      const divObjectInner = new Div("50%", "30%", "black");
      const divObject = new Div("100%", "10%", "black");

      const divIn = divObjectInner.createDiv();
      divIn.classList.remove("selectable");
      divIn.style.backgroundColor = "transparent";

      const div = divObject.createDiv();

      aTags.forEach((aTag) => divIn.appendChild(aTag));
      mapingA.forEach((aLogo) => divIn.appendChild(aLogo));
      div.appendChild(divIn);

      divIn.style.display = "flex";
      divIn.style.justifyContent = "space-around";
      divIn.style.alignItems = "center";
      div.style.display = "flex";
      div.style.justifyContent = "space-around";
      div.style.alignItems = "center";
      return div;
    }
  }
}
export { Layouts };