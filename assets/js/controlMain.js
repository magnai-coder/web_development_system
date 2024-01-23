
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

            localStorage.clear();

            let collectStyle = window.getComputedStyle(selectElement);
            for (let i = 0; i < collectStyle.length; i++) {
                let styleName;
                let styleValue;
                if (collectStyle[i] === 'font-family') {
                    styleName = collectStyle[i];
                    styleValue = collectStyle.getPropertyValue(styleName);
                    localStorage.setItem(styleName, styleValue);
                }
                else if (collectStyle[i] === 'font-size') {
                    styleName = collectStyle[i];
                    styleValue = collectStyle.getPropertyValue(styleName);
                    localStorage.setItem(styleName, styleValue);
                }
                else if (collectStyle[i] === 'height') {
                    styleName = collectStyle[i];
                    styleValue = collectStyle.getPropertyValue(styleName);
                    localStorage.setItem(styleName, styleValue);
                }
                else if (collectStyle[i] === 'width') {
                    if (notSelectDiv.includes('div')){
                    }else{
                        styleName = collectStyle[i];
                        styleValue = collectStyle.getPropertyValue(styleName);
                        localStorage.setItem(styleName, styleValue);
                    }
                }
                else if (collectStyle[i] === 'border-bottom-style') {
                    styleName = collectStyle[i];
                    styleValue = collectStyle.getPropertyValue(styleName);
                    localStorage.setItem(styleName, styleValue);
                }
                else if (collectStyle[i] === 'border-bottom-left-radius') {
                    styleName = collectStyle[i];
                    styleValue = collectStyle.getPropertyValue(styleName);
                    localStorage.setItem(styleName, styleValue);
                }
                else if (collectStyle[i] === 'margin-top') {
                    styleName = collectStyle[i];
                    styleValue = collectStyle.getPropertyValue(styleName);
                    localStorage.setItem(styleName, styleValue);
                }
                else if (collectStyle[i] === 'padding-top') {
                    styleName = collectStyle[i];
                    styleValue = collectStyle.getPropertyValue(styleName);
                    localStorage.setItem(styleName, styleValue);
                }
                else if (collectStyle[i] === 'color') {
                    styleName = collectStyle[i];
                    styleValue = collectStyle.getPropertyValue(styleName);
                    let clearRGB = styleValue.substring(4, styleValue.length - 1)
                    let rgbArray = clearRGB.split(',');
                    let hexArray = rgbArray.map(function (value) {
                        let hex = parseInt(value).toString(16);
                        return hex.length == 1 ? "0" + hex : hex;
                    });
                    localStorage.setItem(styleName, '#' + hexArray.join('').toUpperCase());
                }
                else if (collectStyle[i] === 'background-color') {
                    styleName = collectStyle[i];
                    styleValue = collectStyle.getPropertyValue(styleName);
                    let clearRGB = styleValue.substring(4, styleValue.length - 1)
                    let rgbArray = clearRGB.split(',');
                    let hexArray = rgbArray.map(function (value) {
                        let hex = parseInt(value).toString(16);
                        return hex.length == 1 ? "0" + hex : hex;
                    });
                    localStorage.setItem(styleName, '#' + hexArray.join('').toUpperCase());
                }
                if (notSelectDiv.includes('img')){
                   localStorage.setItem('imgSource', selectElement.src);
                    }
                else{
                    if(collectStyle[i] === 'background-image'){
                        styleName = collectStyle[i];
                        styleValue = collectStyle.getPropertyValue(styleName);
                        localStorage.setItem(styleName, styleValue);
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
setInterval(function () {
    let localValueFont = localStorage.getItem('font-family')
    let localValueFontSize = localStorage.getItem('font-size')
    let localValueHeight = localStorage.getItem('height')
    let localValueWidth = localStorage.getItem('width')
    let localValueBorder = localStorage.getItem('border-bottom-style')
    let localValueBorderRadius = localStorage.getItem('border-bottom-left-radius')
    let localValueMargin = localStorage.getItem('margin-top')
    let localValuePadding = localStorage.getItem('padding-top')
    let localValueColor = localStorage.getItem('color')
    let localValueBackgroundColor = localStorage.getItem('background-color')
    let localValueBackgroundImage = localStorage.getItem('background-image')
    let localValueImgSource = localStorage.getItem('imgSource')
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
}, 2000);


//Bairshil uurchluh function


