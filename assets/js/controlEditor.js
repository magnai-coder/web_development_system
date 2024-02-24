import { Layout } from "../js/baseContainerLayouts.js";
import { selectedFontFamily, selectedFontSize, selectedHeight, selectedWidth, selectedBorderStyle, selectedBorderRadius, selectedMargin, selectedPadding, selectedColor, selectedBackgroundColor, selectedBackgroundImage, imgSource } from "../js/controlMain.js";

// Todorhoilson objectuud
const controlEditor = {
    headerMark: document.getElementById('mainPage'),
    selectElementFont: window.parent.document.getElementById('font'),
    selectElementFontSize: window.parent.document.getElementById('font-size'),
    selectElementHeight: window.parent.document.getElementById('height'),
    selectElementWidth: window.parent.document.getElementById('width'),
    selectElementBorder: window.parent.document.getElementById('border'),
    selectElementBorderRadius: window.parent.document.getElementById('border-radius'),
    selectElementMargin: window.parent.document.getElementById('margin'),
    selectElementPadding: window.parent.document.getElementById('padding'),
    selectElementColor: window.parent.document.getElementById('color'),
    selectElementBackgroundColor: window.parent.document.getElementById('backgroundColor'),
    selectElementBackgroundImage: window.parent.document.getElementById('backgroundImage'),
}
// dragAndDrop undsen code
// Function to handle layout creation and drag-and-drop setup
function handleLayoutDragAndDrop(layoutElement) {
    try {
        const layout = new Layout(layoutElement.id);
        const layoutMarkup = layout.createLayout(layoutElement.id);

        function dragStart(event) {
            
        }

        function dragOver(event) {
            event.preventDefault();
        }

        function drop(event) {
            event.preventDefault();
            console.log(event.dataTransfer.getData("text/html"));
            controlEditor.headerMark.appendChild(layoutMarkup);
        }
        window.parent.document.getElementById(layoutElement.id).parentElement.addEventListener("dragstart", dragStart);
        controlEditor.headerMark.addEventListener("dragover", dragOver);
        controlEditor.headerMark.addEventListener("drop", drop);
    } catch (error) {
        console.error(error);
    }
}
// Event listener for 'mousedown' on the entire document
window.parent.document.addEventListener('mousedown', (event) => {
    let clickedElement = event.target;
    let elementId = clickedElement.id;
    // Check if the clicked element's ID includes "LayoutPart"
    if (elementId.includes("LayoutPart")) {
        handleLayoutDragAndDrop(clickedElement);
    }
});

consol

//Style dahi utga uurchlugdsuniig localstorage ruu hadgalah
function selectChange() {
    controlEditor.selectElementFont.addEventListener('change', () => {
        let selectedOption = controlEditor.selectElementFont.value;
        selectedFontFamily = selectedOption;
    });
    controlEditor.selectElementFontSize.addEventListener('change', () => {
        let selectedOption = controlEditor.selectElementFontSize.value;
        selectedFontSize = selectedOption;
    });
    controlEditor.selectElementHeight.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementHeight.value;
        selectedHeight = selectedOption;
    });
    controlEditor.selectElementWidth.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementWidth.value;
        selectedWidth = selectedOption;

    });
    controlEditor.selectElementBorder.addEventListener('change', () => {
        let selectedOption = controlEditor.selectElementBorder.value;
        selectedBorderStyle = selectedOption;

    });
    controlEditor.selectElementBorderRadius.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementBorderRadius.value;
        selectedBorderRadius = selectedOption;

    });
    controlEditor.selectElementMargin.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementMargin.value;
        selectedMargin = selectedOption;

    });
    controlEditor.selectElementPadding.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementPadding.value;
        selectedPadding = selectedOption;

    });
    controlEditor.selectElementColor.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementColor.value;
        selectedColor = selectedOption;
    });
    controlEditor.selectElementBackgroundColor.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementBackgroundColor.value;
        selectedBackgroundColor = selectedOption;
    });
    controlEditor.selectElementBackgroundImage.addEventListener('change', function () {
        const reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.addEventListener("load", () => {
            selectedBackgroundImage = reader.result;
        })
    });
}
selectChange();
//LocalStorage deer baiga utgiig style zesend nemeh
controlEditor.selectElementFont.value = oninput.selectedFontFamily;
controlEditor.selectElementFontSize.value = oninput.selectedFontSize;
if (oninput.selectedHeight) {
    controlEditor.selectElementHeight.value = Math.floor(selectedHeight.substring(0, selectedHeight.length - 2));
}
if (oninput.selectedWidth) {
    controlEditor.selectElementWidth.value = Math.floor(selectedWidth.substring(0, selectedWidth.length - 2));
}
controlEditor.selectElementBorder.value = oninput.selectedBorderStyle;
if (oninput.selectedBorderRadius) {
    controlEditor.selectElementBorderRadius.value = Math.floor(selectedBorderRadius.substring(0, selectedBorderRadius.length - 1));
}
if (oninput.selectedMargin) {
    controlEditor.selectElementMargin.value = Math.floor(selectedMargin.substring(0, selectedMargin.length - 2));
}
if (oninput.selectedPadding) {
    controlEditor.selectElementPadding.value = Math.floor(localStorageStylePadding.substring(0, localStorageStylePadding.length - 2));
}
controlEditor.selectElementColor.value = oninput.selectedColor;
controlEditor.selectElementBackgroundColor.value = oninput.selectedBackgroundColor;
controlEditor.selectElementBackgroundImage.name = oninput.selectedBackgroundImage;



