import { Layouts } from "../Containers/baseContainerLayouts.js";
import { Elements } from "../Containers/baseContainerElements.js";



const headerMark = window.parent.document.getElementById('render');
headerMark.onload = function () {
const frameContent = headerMark.contentWindow.document.getElementById("whitePage");




var constuctedPart;
var hoverElement;
// dragAndDrop undsen code
function handleDragAndDrop(chosenElement) {
    try {
        const layout = new Layouts();
        const elements = new Elements();

        if (chosenElement.id.includes("Layout")) {
            constuctedPart = layout.createLayout(chosenElement.id);
        } else if (chosenElement.id.includes("Tag")) {
            constuctedPart = elements.createElement(chosenElement.id);
        }
        var x;
        var y;
        function dragOver(event) {
            event.preventDefault();
            hoverElement = event.target;
            x = event.pageX;
            y = event.pageY;
            console.log("bna")
            
        }

        function drop() {
            // constuctedPart.style.position = "absolute";
            
            constuctedPart.style.top = y + 'px';
            constuctedPart.style.left = x + 'px';
            headerMark.contentWindow.document.getElementById(hoverElement.id).appendChild(constuctedPart);
           
            frameContent.removeEventListener("dragover", dragOver);
            frameContent.removeEventListener("drop", drop);
        }

        frameContent.addEventListener("dragover", dragOver);
        frameContent.addEventListener("drop", drop);
        
    } catch (error) {
        console.error(error);
    }
}

// songoson zuuh elementiig shalgaj bna
window.parent.document.getElementById("accordionLeft").addEventListener('mousedown', (event) => {
    const clickedElement = event.target;
    const elementId = clickedElement.id;
   
    if (elementId.includes("Part")) {
        handleDragAndDrop(clickedElement);
    }

});
}