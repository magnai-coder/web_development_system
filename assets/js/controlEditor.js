import { Layout } from "../js/baseContainerLayouts.js";

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
        localStorage.setItem('font-family', selectedOption);
    });
    controlEditor.selectElementFontSize.addEventListener('change', () => {
        let selectedOption = controlEditor.selectElementFontSize.value;
        localStorage.setItem('font-size', selectedOption);
    });
    controlEditor.selectElementHeight.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementHeight.value;
        localStorage.setItem('height', selectedOption +'px');
    });
    controlEditor.selectElementWidth.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementWidth.value;
        localStorage.setItem('width', selectedOption +'px');

    });
    controlEditor.selectElementBorder.addEventListener('change', () => {
        let selectedOption = controlEditor.selectElementBorder.value;
        localStorage.setItem('border-bottom-style', selectedOption);

    });
    controlEditor.selectElementBorderRadius.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementBorderRadius.value;
        localStorage.setItem('border-bottom-left-radius', selectedOption +'%');

    });
    controlEditor.selectElementMargin.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementMargin.value;
        localStorage.setItem('margin-top', selectedOption +'px');

    });
    controlEditor.selectElementPadding.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementPadding.value;
        localStorage.setItem('padding-top', selectedOption +'px');

    });
    controlEditor.selectElementColor.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementColor.value;
        localStorage.setItem('color', selectedOption);
    });
    controlEditor.selectElementBackgroundColor.addEventListener('input', () => {
        let selectedOption = controlEditor.selectElementBackgroundColor.value;
        localStorage.setItem('background-color', selectedOption);
    });
    controlEditor.selectElementBackgroundImage.addEventListener('change',function() {
        const reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.addEventListener("load",()=>{
            localStorage.setItem('background-image', reader.result);
            localStorage.setItem('imgSource', reader.result);
        })  
    });
}
 
//LocalStorage deer baiga utgiig style zesend nemeh
setInterval(function(){
    let localStorageStyleFont = localStorage.getItem('font-family');
    let localStorageStyleFontSize = localStorage.getItem('font-size');
    let localStorageStyleHeight = localStorage.getItem('height');
    let localStorageStyleWidth = localStorage.getItem('width');
    let localStorageStyleBorder = localStorage.getItem('border-bottom-style');
    let localStorageStyleBorderRadius = localStorage.getItem('border-bottom-left-radius');
    let localStorageStyleMargin = localStorage.getItem('margin-top');
    let localStorageStylePadding = localStorage.getItem('padding-top');
    let localStorageStyleColor = localStorage.getItem('color');
    let localStorageStyleBackgroundColor = localStorage.getItem('background-color');
    let localStorageStyleBackgroundImage = localStorage.getItem('background-image');
    let localStorageImg = localStorage.getItem('imgSource');

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
}, 1000);    
    


selectChange();

