import { Layout } from "../js/baseContainerLayouts.js";
import {selectedFontFamily, selectedFontSize, selectedHeight, selectedWidth, selectedBorderStyle, selectedBorderRadius, selectedMargin, selectedPadding, selectedColor, selectedBackgroundColor, selectedImage} from "./controlMain.js";

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
    const clickedElement = event.target;
    const elementId = clickedElement.id;
    // Check if the clicked element's ID includes "LayoutPart"
    if (elementId.includes("LayoutPart")) {
        handleLayoutDragAndDrop(clickedElement);
    }
});






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
    controlEditor.selectElementBackgroundImage.addEventListener('change',function() {
        const reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.addEventListener("load",()=>{
            selectedImage = reader.result;
            // localStorage.setItem('background-image', reader.result);
            // localStorage.setItem('imgSource', reader.result);
        })  
    });
}
 
//LocalStorage deer baiga utgiig style zesend nemeh

    let localStorageStyleFont = selectedFontFamily;
    let localStorageStyleFontSize = selectedFontSize;
    let localStorageStyleHeight = selectedHeight;
    let localStorageStyleWidth = selectedWidth
    let localStorageStyleBorder = selectedBorderStyle;
    let localStorageStyleBorderRadius = selectedBorderRadius;
    let localStorageStyleMargin = selectedMargin;
    let localStorageStylePadding = selectedPadding;
    let localStorageStyleColor = selectedColor;
    let localStorageStyleBackgroundColor = selectedBackgroundColor;
    let localStorageStyleBackgroundImage = selectedImage;
    // let localStorageImg = localStorage.getItem('imgSource');

    controlEditor.selectElementFont.value = localStorageStyleFont;
    controlEditor.selectElementFontSize.value = localStorageStyleFontSize;
    controlEditor.selectElementHeight.value = Math.floor( localStorageStyleHeight.substring(0,localStorageStyleHeight.length-2));
    controlEditor.selectElementWidth.value = Math.floor( localStorageStyleWidth.substring(0,localStorageStyleWidth.length-2));
    controlEditor.selectElementBorder.value = localStorageStyleBorder;
    controlEditor.selectElementBorderRadius.value = Math.floor( localStorageStyleBorderRadius.substring(0,localStorageStyleBorderRadius.length-1));
    controlEditor.selectElementMargin.value = Math.floor( localStorageStyleMargin.substring(0,localStorageStyleMargin.length-2));
    controlEditor.selectElementPadding.value = Math.floor( localStorageStylePadding.substring(0,localStorageStylePadding.length-2)); 
    controlEditor.selectElementColor.value = localStorageStyleColor;
    controlEditor.selectElementBackgroundColor.value = localStorageStyleBackgroundColor; 
    controlEditor.selectElementBackgroundImage.name = localStorageStyleBackgroundImage;
    controlEditor.selectElementBackgroundImage.name = localStorageImg;



selectChange();

export {selectedFontFamily, selectedFontSize, selectedHeight, selectedWidth, selectedBorderStyle, selectedBorderRadius, selectedMargin, selectedPadding, selectedColor, selectedBackgroundColor, selectedImage}