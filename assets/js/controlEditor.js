import { Layout } from "../js/baseContainerLayouts.js";

console.log("bna uu")
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

//Elementuudeed select hiij utgiig local storage ruu yavuulah
var selectElement = null;

//herev element deer darval tuhain elementiig avna
document.addEventListener('mousedown', (event) => {
    localStorage.clear();
    selectElement = event.target;
    const selectableElements = document.querySelectorAll('.selectable')
    //Songoson elementees busdiig todruulahiig zogsooh
    selectableElements.forEach(element => {
        element.style.borderStyle = "";
        element.style.outline = "";
    });

    if (selectElement.classList.contains('selectable')) {
        selectElement.style.outline = "5px solid #87CEFA"
        notSelectDiv = selectElement.tagName.toLowerCase().substring(0, 3);
        // if (notSelectDiv.includes('div')) {
        //     selectElement.style.width="100%"
        // } else {
        //     //Zuuh uyed duudah function
        //     let chooseElement = null;
        //     console.log(chooseElement)
        //         selectElement.style.position = "absolute";
        //         chooseElement = selectElement;
        //         document.onmousemove = (e) => {
        //              x = e.pageX;
        //              y = e.pageY;

        //             chooseElement.style.left = x - 50 + "px";
        //             chooseElement.style.top = y - 10 + "px";
        //         }
        //         document.onmouseup = function (e) {
        //             chooseElement = null;
        //         }
        //     }

        //double darahad utga uurchlugdun
        selectElement.addEventListener('dblclick', (event) => {
            selectElement.contentEditable = selectElement.contentEditable === "true" ? "false" : "true";
        })

        //Delete darahad element ustana
        selectElement.addEventListener('keydown', (event) => {
            const keyPressed = event.key;
            if (keyPressed === "Delete") {
                selectElement.remove();
            }
        });

        var selectedFontFamily;
        var selectedFontSize;
        var selectedHeight;
        var selectedWidth;
        var selectedBorderStyle;
        var selectedBorderRadius;
        var selectedMargin;
        var selectedPadding;
        var selectedColor;
        var selectedBackgroundColor;
        var selectedImage;

        let collectStyle = window.getComputedStyle(selectElement);
        for (let i = 0; i < collectStyle.length; i++) {
            if (collectStyle[i] === 'font-family') {
                selectedFontFamily = collectStyle.getPropertyValue(styleName);
            }
            else if (collectStyle[i] === 'font-size') {
                selectedFontSize = collectStyle.getPropertyValue(styleName);
            }
            else if (collectStyle[i] === 'height') {
                selectedHeight = collectStyle.getPropertyValue(styleName);
            }
            else if (collectStyle[i] === 'width') {
                if (notSelectDiv.includes('div')) {
                } else {
                    selectedWidth = collectStyle.getPropertyValue(styleName);
                }
            }
            else if (collectStyle[i] === 'border-bottom-style') {
                selectedBorderStyle = collectStyle.getPropertyValue(styleName);
            }
            else if (collectStyle[i] === 'border-bottom-left-radius') {
                selectedBorderRadius = collectStyle.getPropertyValue(styleName);
            }
            else if (collectStyle[i] === 'margin-top') {
                selectedMargin = collectStyle.getPropertyValue(styleName);
            }
            else if (collectStyle[i] === 'padding-top') {
                selectedPadding = collectStyle.getPropertyValue(styleName);
            }
            else if (collectStyle[i] === 'color') {
                let styleValue = collectStyle.getPropertyValue(styleName);
                let clearRGB = styleValue.substring(4, styleValue.length - 1)
                let rgbArray = clearRGB.split(',');
                let hexArray = rgbArray.map(function (value) {
                    let hex = parseInt(value).toString(16);
                    return hex.length == 1 ? "0" + hex : hex;
                });
                selectedColor = '#' + hexArray.join('').toUpperCase();
            }
            else if (collectStyle[i] === 'background-color') {
                let styleValue = collectStyle.getPropertyValue(styleName);
                let clearRGB = styleValue.substring(4, styleValue.length - 1)
                let rgbArray = clearRGB.split(',');
                let hexArray = rgbArray.map(function (value) {
                    let hex = parseInt(value).toString(16);
                    return hex.length == 1 ? "0" + hex : hex;
                });
                selectedBackgroundColor = '#' + hexArray.join('').toUpperCase();
            }
            if (notSelectDiv.includes('img')) {
                selectedImage = selectElement.src;
            }
            else {
                if (collectStyle[i] === 'background-image') {
                    selectedImage = collectStyle.getPropertyValue(styleName);
                }
            }
        }

    }
});
//uurchlult oruulsan

//Local storage baigaa uurchlugdsun utgiig tuhain elemented nemj ogoh
let currentFontValue = null;
let currentFontSizeValue = null;
let currentHeight = null;
let currentWidth = null;
let currentBorder = null;
let currentBorderRadius = null;
let currentMargin = null;
let currentPadding = null;
let currentColor = null;
let currentBackgroundColor = null;
let currentBackgroundImage = null;
let currentImgSource = null;

let localValueFont = selectedFontFamily;
let localValueFontSize = selectedFontSize;
let localValueHeight = selectedHeight;
let localValueWidth = selectedWidth;
let localValueBorder = selectedBorderStyle
let localValueBorderRadius = selectedBorderRadius
let localValueMargin = selectedMargin
let localValuePadding = selectedPadding
let localValueColor = selectedColor
let localValueBackgroundColor = selectedBackgroundColor
let localValueBackgroundImage = selectedImage

if (currentFontValue !== localValueFont) {
    currentFontValue = localValueFont;
    selectElement.style.fontFamily = localValueFont;
}
if (currentFontSizeValue !== localValueFontSize) {
    currentFontSizeValue = localValueFontSize;
    selectElement.style.fontSize = localValueFontSize;
}
if (currentHeight !== localValueHeight) {
    currentHeight = localValueHeight;
    selectElement.style.height = localValueHeight;
}
if (currentWidth !== localValueWidth) {
    if (notSelectDiv.includes('div')) {
    } else {
        currentWidth = localValueWidth;
        selectElement.style.width = localValueWidth;
    }
}
if (currentBorder !== localValueBorder) {
    currentBorder = localValueBorder;
    selectElement.style.border = localValueBorder;
}
if (currentBorderRadius !== localValueBorderRadius) {
    currentBorderRadius = localValueBorderRadius;
    selectElement.style.borderRadius = localValueBorderRadius;
}
if (currentMargin !== localValueMargin) {
    currentMargin = localValueMargin;
    selectElement.style.margin = localValueMargin;
}
if (currentPadding !== localValuePadding) {
    currentPadding = localValuePadding;
    selectElement.style.padding = localValuePadding;
}
if (currentColor !== localValueColor) {
    currentColor = localValueColor;
    selectElement.style.color = localValueColor;
}
if (currentBackgroundColor !== localValueBackgroundColor) {
    currentBackgroundColor = localValueBackgroundColor;
    selectElement.style.backgroundColor = localValueBackgroundColor;
}
if (currentBackgroundImage !== localValueBackgroundImage) {
    currentBackgroundImage = localValueBackgroundImage;
    selectElement.style.backgroundImage = `url(${localValueBackgroundImage})`;
}
if (currentImgSource !== localValueImgSource) {
    currentImgSource = localValueImgSource;
    selectElement.src = localValueImgSource;
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
    controlEditor.selectElementBackgroundImage.addEventListener('change', function () {
        const reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.addEventListener("load", () => {
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
controlEditor.selectElementHeight.value = Math.floor(localStorageStyleHeight.substring(0, localStorageStyleHeight.length - 2));
controlEditor.selectElementWidth.value = Math.floor(localStorageStyleWidth.substring(0, localStorageStyleWidth.length - 2));
controlEditor.selectElementBorder.value = localStorageStyleBorder;
controlEditor.selectElementBorderRadius.value = Math.floor(localStorageStyleBorderRadius.substring(0, localStorageStyleBorderRadius.length - 1));
controlEditor.selectElementMargin.value = Math.floor(localStorageStyleMargin.substring(0, localStorageStyleMargin.length - 2));
controlEditor.selectElementPadding.value = Math.floor(localStorageStylePadding.substring(0, localStorageStylePadding.length - 2));
controlEditor.selectElementColor.value = localStorageStyleColor;
controlEditor.selectElementBackgroundColor.value = localStorageStyleBackgroundColor;
controlEditor.selectElementBackgroundImage.name = localStorageStyleBackgroundImage;
controlEditor.selectElementBackgroundImage.name = localStorageImg;



selectChange();

