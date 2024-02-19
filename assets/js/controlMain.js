import {selectedFontFamily, selectedFontSize, selectedHeight, selectedWidth, selectedBorderStyle, selectedBorderRadius, selectedMargin, selectedPadding, selectedColor, selectedBackgroundColor, selectedImage} from "./controlMain.js";



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
                    if (notSelectDiv.includes('div')){
                    }else{
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
                if (notSelectDiv.includes('img')){
                    selectedImage = selectElement.src;
                    }
                else{
                    if(collectStyle[i] === 'background-image'){
                        selectedImage = collectStyle.getPropertyValue(styleName);
                    }
                }
            }
            
    }
});

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
        if (notSelectDiv.includes('div')){
        }else{
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
        selectElement.src= localValueImgSource;
    }


//Bairshil uurchluh function

export {selectedFontFamily, selectedFontSize, selectedHeight, selectedWidth, selectedBorderStyle, selectedBorderRadius, selectedMargin, selectedPadding, selectedColor, selectedBackgroundColor, selectedImage}
