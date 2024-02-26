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
var selectedHeight;
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
                    window.selectedFontFamily = collectStyle.getPropertyValue('font-family');
                }
                else if (collectStyle[i] === 'font-size') {
                    window.selectedFontSize = collectStyle.getPropertyValue('font-size');
                }
                else if (collectStyle[i] === 'height') {
                    window.selectedHeight = collectStyle.getPropertyValue('height');
                }
                else if (collectStyle[i] === 'width') {
                    if (notSelectDiv.includes('div')) {
                    } else {
                        window.selectedWidth = collectStyle.getPropertyValue('width');
                    }
                }
                else if (collectStyle[i] === 'border-bottom-style') {
                    window.selectedBorderStyle = collectStyle.getPropertyValue('border-bottom-style');
                }
                else if (collectStyle[i] === 'border-bottom-left-radius') {
                    window.selectedBorderRadius = collectStyle.getPropertyValue('border-bottom-left-radius');
                }
                else if (collectStyle[i] === 'margin-top') {
                    window.selectedMargin = collectStyle.getPropertyValue('margin-top');
                }
                else if (collectStyle[i] === 'padding-top') {
                    window.selectedPadding = collectStyle.getPropertyValue('padding-top');
                }
                else if (collectStyle[i] === 'color') {
                    let styleValue = collectStyle.getPropertyValue('color');
                    let clearRGB = styleValue.substring(4, styleValue.length - 1)
                    let rgbArray = clearRGB.split(',');
                    let hexArray = rgbArray.map(function (value) {
                        let hex = parseInt(value).toString(16);
                        return hex.length == 1 ? "0" + hex : hex;
                    });
                    window.selectedColor = '#' + hexArray.join('').toUpperCase();
                }
                else if (collectStyle[i] === 'background-color') {
                    let styleValue = collectStyle.getPropertyValue('background-color');
                    let clearRGB = styleValue.substring(4, styleValue.length - 1)
                    let rgbArray = clearRGB.split(',');
                    let hexArray = rgbArray.map(function (value) {
                        let hex = parseInt(value).toString(16);
                        return hex.length == 1 ? "0" + hex : hex;
                    });
                    window.selectedBackgroundColor = '#' + hexArray.join('').toUpperCase();
                }
                if (notSelectDiv.includes('img')) {
                    window.selectedImage = selectElement.src;
                }
                else {
                    if (collectStyle[i] === 'background-image') {
                        window.selectedImage = collectStyle.getPropertyValue('background-image');
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
    //             localStorageStyleHeight = selectedHeight; 
    //         }
    //     }
    // });


    Object.defineProperty(window, 'selectedFontFamily', {
        get: function () {
            return selectedFontFamily;
        },
        set: function (value) {
            if (value !== selectedFontFamily) {
                selectedFontFamily = value;
                selectElementFontMenu.value = selectedFontFamily;
            }
        }
    });
     Object.defineProperty(window, 'selectedFontSize', {
        get: function () {
            return selectedFontSize;
        },
        set: function (value) {
            if (value !== selectedFontSize) {
                selectedFontSize = value;
                selectElementFontSizeMenu.value = selectedFontSize;
            }
        }
    }); 
    Object.defineProperty(window, 'selectedHeight', {
        get: function () {
            return selectedHeight;
        },
        set: function (value) {
            if (value !== selectedHeight) {
                selectedHeight = value;
                selectElementHeightMenu.value = Math.floor(selectedHeight.substring(0, selectedHeight.length - 2));
            }
        }
    });
    Object.defineProperty(window, 'selectedWidth', {
        get: function () {
            return selectedWidth;
        },
        set: function (value) {
            if (value !== selectedWidth) {
                selectedWidth = value;
                selectElementWidthMenu.value = Math.floor(selectedWidth.substring(0, selectedWidth.length - 2));
            }
        }
    });
    Object.defineProperty(window, 'selectedBorderStyle', {
        get: function () {
            return selectedBorderStyle;
        },
        set: function (value) {
            if (value !== selectedBorderStyle) {
                selectedBorderStyle = value;
                selectElementBorderMenu.value = selectedBorderStyle;
            }
        }
    });
    Object.defineProperty(window, 'selectedBorderRadius', {
        get: function () {
            return selectedBorderRadius;
        },
        set: function (value) {
            if (value !== selectedBorderRadius) {
                selectedBorderRadius = value;
                selectElementBorderRadiusMenu.value = Math.floor(selectedBorderRadius.substring(0, selectedBorderRadius.length - 1));
            }
        }
    });
    Object.defineProperty(window, 'selectedMargin', {
        get: function () {
            return selectedMargin;
        },
        set: function (value) {
            if (value !== selectedMargin) {
                selectedMargin = value;
                selectElementMarginMenu.value = Math.floor(selectedMargin.substring(0, selectedMargin.length - 2));
            }
        }
    });
    Object.defineProperty(window, 'selectedPadding', {
        get: function () {
            return selectedPadding;
        },
        set: function (value) {
            if (value !== selectedPadding) {
                selectedPadding = value;
                selectElementPaddingMenu.value = Math.floor(selectedPadding.substring(0, selectedPadding.length - 2));
            }
        }
    });
    Object.defineProperty(window, 'selectedColor', {
        get: function () {
            return selectedColor;
        },
        set: function (value) {
            if (value !== selectedColor) {
                selectedColor = value;
                selectElementColorMenu.value = selectedColor;
            }
        }
    });
    Object.defineProperty(window, 'selectedBackgroundColor', {
        get: function () {
            return selectedBackgroundColor;
        },
        set: function (value) {
            if (value !== selectedBackgroundColor) {
                selectedBackgroundColor = value;
                selectElementBackgroundColorMenu.value = selectedBackgroundColor;
            }
        }
    });
    Object.defineProperty(window, 'selectedImage', {
        get: function () {
            return selectedImage;
        },
        set: function (value) {
            if (value !== selectedImage) {
                selectedImage = value;
                selectElementBackgroundImageMenu.name = selectedImage;
            }
        }
    });
    
   
    
    
   
    // selectElementBackgroundImage.name = localStorageImg;
    //Zagvar tsesnees orj irj bui utga

   
    selectElementFontMenu.addEventListener('change', () => {
        selectElement.style.fontFamily = selectElementFontMenu.value.trim();
   
    });
    selectElementFontSizeMenu.addEventListener('change', () => {
        selectElement.style.fontSize = selectElementFontSizeMenu.value.trim();
       

    });
    selectElementHeightMenu.addEventListener('change', (event) => {
            selectElement.style.height = selectElementHeightMenu.value.trim()+"px";
    });
    selectElementWidthMenu.addEventListener('change', () => {
        selectElement.style.width = selectElementWidthMenu.value.trim()+"px";
  
    });
    selectElementBorderMenu.addEventListener('change', () => {
        selectElement.style.border = selectElementBorderMenu.value.trim();
         

    });
    selectElementBorderRadiusMenu.addEventListener('change', () => {
        selectElement.style.borderRadius  = selectElementBorderRadiusMenu.value.trim()+"%";
       

    });
    selectElementMarginMenu.addEventListener('change', () => {
        selectElement.style.margin = selectElementMarginMenu.value.trim()+"px";
   

    });
    selectElementPaddingMenu.addEventListener('input', () => {
        selectElement.style.padding  = selectElementPaddingMenu.value.trim()+"px";

    });
    selectElementColorMenu.addEventListener('input', () => {
        selectElement.style.color = selectElementColorMenu.value.trim();
    
    });
    selectElementBackgroundColorMenu.addEventListener('input', () => {
        selectElement.style.backgroundColor = selectElementBackgroundColorMenu.value.trim();
   
    });
    selectElementBackgroundImageMenu.addEventListener('change', function () {
        const reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.addEventListener("load", () => {
            selectElement.style.backgroundImage = reader.result;
            // localStorage.setItem('background-image', reader.result);
            // localStorage.setItem('imgSource', reader.result);
        })
    });


   

};