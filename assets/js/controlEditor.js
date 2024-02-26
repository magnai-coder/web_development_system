import { Layout } from "../js/baseContainerLayouts.js";

const headerMark = window.parent.document.getElementById('render')
const selectElementFontMenu = window.parent.document.getElementById('font')
const selectElementFontSizeMenu = window.parent.document.getElementById('font-size')
const selectElementHeightMenu = window.parent.document.getElementById('height')
const selectElementWidthMenu = window.parent.document.getElementById('width')
const selectElementBorderMenu = window.parent.document.getElementById('border')
const selectElementBorderRadiusMenu = window.parent.document.getElementById('border-radius')
const selectElementMarginMenu = window.parent.document.getElementById('margin')
const selectElementPaddingMenu = window.parent.document.getElementById('padding')
const selectElementColorMenu = window.parent.document.getElementById('color')
const selectElementBackgroundColorMenu = window.parent.document.getElementById('backgroundColor')
const selectElementBackgroundImageMenu = window.parent.document.getElementById('backgroundImage')


//uurchlult oruulsan
var selectedFontFamily;
var selectedFontSize;
var selectedHeight = 0;
var selectedWidth;
var selectedBorderStyle;
var selectedBorderRadius;
var selectedMargin;
var selectedPadding;
var selectedColor;
var selectedBackgroundColor;
var selectedImage;


headerMark.onload = function () {




    var frameContent = null;
    frameContent = headerMark.contentWindow.document.getElementById("mainPage");

    // dragAndDrop undsen code
    function handleLayoutDragAndDrop(layoutElement) {
        try {
            const layout = new Layout();
            const layoutMarkup = layout.createLayout(layoutElement.id);

            function dragStart(event) {

            }
            function dragOver(event) {
                event.preventDefault();
            }

            function drop(event) {
                event.preventDefault();
                frameContent.appendChild(layoutMarkup);
            }

            window.parent.document.getElementById(layoutElement.id).addEventListener("dragstart", dragStart);
            frameContent.addEventListener("dragover", dragOver);
            frameContent.addEventListener("drop", drop);
        } catch (error) {
            console.error(error);
        }
    }

    window.parent.document.addEventListener('mousedown', (event) => {
        const clickedElement = event.target;
        const elementId = clickedElement.id;
        if (elementId.includes("LayoutPart")) {
            handleLayoutDragAndDrop(clickedElement);
        }
    });

    //Elementuudeed select hiih uyed elementiig uurtuu hadgalah huvisagch
    var selectElement = null;

    //herev element deer darval tuhain elementiig avna
    headerMark.contentWindow.document.addEventListener('mousedown', (event) => {
        selectElement = event.target;
        const selectableElements = headerMark.contentWindow.document.querySelectorAll('.selectable')

        //Songoson elementees busdiig todruulahiig zogsooh
        selectableElements.forEach(element => {
            element.style.borderStyle = "";
            element.style.outline = "";
        });

        if (selectElement.classList.contains('selectable')) {
            selectElement.style.outline = "5px solid #87CEFA"
            var notSelectDiv = selectElement.tagName.toLowerCase().substring(0, 3);
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



            let collectStyle = window.getComputedStyle(selectElement);
            for (let i = 0; i < collectStyle.length; i++) {
                if (collectStyle[i] === 'font-family') {
                    selectedFontFamily = collectStyle.getPropertyValue('font-family');
                }
                else if (collectStyle[i] === 'font-size') {
                    selectedFontSize = collectStyle.getPropertyValue('font-size');
                }
                else if (collectStyle[i] === 'height') {
                    selectedHeight = collectStyle.getPropertyValue('height');
                }
                else if (collectStyle[i] === 'width') {
                    if (notSelectDiv.includes('div')) {
                    } else {
                        selectedWidth = collectStyle.getPropertyValue('width');
                    }
                }
                else if (collectStyle[i] === 'border-bottom-style') {
                    selectedBorderStyle = collectStyle.getPropertyValue('border-bottom-style');
                }
                else if (collectStyle[i] === 'border-bottom-left-radius') {
                    selectedBorderRadius = collectStyle.getPropertyValue('border-bottom-left-radius');
                }
                else if (collectStyle[i] === 'margin-top') {
                    selectedMargin = collectStyle.getPropertyValue('margin-top');
                }
                else if (collectStyle[i] === 'padding-top') {
                    selectedPadding = collectStyle.getPropertyValue('padding-top');
                }
                else if (collectStyle[i] === 'color') {
                    let styleValue = collectStyle.getPropertyValue('color');
                    let clearRGB = styleValue.substring(4, styleValue.length - 1)
                    let rgbArray = clearRGB.split(',');
                    let hexArray = rgbArray.map(function (value) {
                        let hex = parseInt(value).toString(16);
                        return hex.length == 1 ? "0" + hex : hex;
                    });
                    selectedColor = '#' + hexArray.join('').toUpperCase();
                }
                else if (collectStyle[i] === 'background-color') {
                    let styleValue = collectStyle.getPropertyValue('background-color');
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
                        selectedImage = collectStyle.getPropertyValue('background-image');
                    }
                }
            }

        }
    });
   
    // Object.defineProperty(window, 'selectedHeight', {
    //     get: function () {
    //         return selectedHeight;
    //     },
    //     set: function (value) {
    //         if (value !== selectedHeight) {
    //             selectedHeight = value;
    //             localStorageStyleHeight = selectedHeight; // Update localStorageStyleHeight
    //         }
    //     }
    // });


    selectElementFontMenu.value = selectedFontFamily;
    selectElementFontSizeMenu.value = selectedFontSize;
    setInterval(() => {
           console.log(selectedHeight);
       }, 500);
    selectElementHeightMenu.value = Math.floor(selectedHeight.substring(0, selectedHeight.length - 2));
    selectElementWidthMenu.value = Math.floor(selectedWidth.substring(0, selectedWidth.length - 2));
    selectElementBorderMenu.value = selectedBorderStyle;
    selectElementBorderRadiusMenu.value = Math.floor(selectedBorderRadius.substring(0, selectedBorderRadius.length - 1));
    selectElementMarginMenu.value = Math.floor(selectedMargin.substring(0, selectedMargin.length - 2));
    selectElementPaddingMenu.value = Math.floor(selectedPadding.substring(0, selectedPadding.length - 2));
    selectElementColorMenu.value = selectedColor;
    selectElementBackgroundColorMenu.value = selectedBackgroundColor;
    selectElementBackgroundImageMenu.name = selectedImage;
    // selectElementBackgroundImage.name = localStorageImg;
    //Zagvar tsesnees orj irj bui utga


    selectElementFontMenu.addEventListener('change', () => {
        let selectedOption = selectElementFontMenu.value;
        window.selectedFontFamily = selectedOption;
    });
    selectElementFontSizeMenu.addEventListener('change', () => {
        let selectedOption = selectElementFontSizeMenu.value;
        window.selectedFontSize = selectedOption;

    });
    selectElementHeightMenu.addEventListener('input', () => {
        let selectedOption = selectElementHeightMenu.value;
        window.selectedHeight = selectedOption;
    });
    selectElementWidthMenu.addEventListener('input', () => {
        let selectedOption = selectElementWidthMenu.value;
        window.selectedWidth = selectedOption;

    });
    selectElementBorderMenu.addEventListener('change', () => {
        let selectedOption = selectElementBorderMenu.value;
        window.selectedBorderStyle = selectedOption;

    });
    selectElementBorderRadiusMenu.addEventListener('input', () => {
        let selectedOption = selectElementBorderRadiusMenu.value;
        window.selectedBorderRadius = selectedOption;

    });
    selectElementMarginMenu.addEventListener('input', () => {
        let selectedOption = selectElementMarginMenu.value;
        window.selectedMargin = selectedOption;

    });
    selectElementPaddingMenu.addEventListener('input', () => {
        let selectedOption = selectElementPaddingMenu.value;
        window.selectedPadding = selectedOption;

    });
    selectElementColorMenu.addEventListener('input', () => {
        let selectedOption = selectElementColorMenu.value;
        window.selectedColor = selectedOption;
    });
    selectElementBackgroundColorMenu.addEventListener('input', () => {
        let selectedOption = selectElementBackgroundColorMenu.value;
        window.selectedBackgroundColor = selectedOption;
    });
    selectElementBackgroundImageMenu.addEventListener('change', function () {
        const reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.addEventListener("load", () => {
            window.selectedImage = reader.result;
            // localStorage.setItem('background-image', reader.result);
            // localStorage.setItem('imgSource', reader.result);
        })
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

};