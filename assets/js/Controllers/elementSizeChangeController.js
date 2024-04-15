
// document.addEventListener('mousedown', () => {
//     document.addEventListener('mousemove', changePosition);
//     function changePosition() {
//         x = e.pageX;
//         y = e.pageY;
//         console.log(x);
//         selectElement.style.left = x + "px";
//         selectElement.style.top = y + "px";
//     }
// });

// let promise = new Promise(function(resolve, reject){
//     resolve("bolchihloo");
//     reject("bolsongui");
// });
// promise.then(
//     function(value){console.log(value)},
//     function(error){console.log(error)}
// );


const whitePageWay = window.parent.document.getElementById('render');


whitePageWay.contentWindow.addEventListener('click', (event) => {
    var selectElement = event.target;
    
    if (selectElement.className.includes('selectable')) {   
        const insideWhitePage = whitePageWay.contentWindow.document.getElementById("whitePage");
        function changeSizeAndPosition(){
            
            // cursoriin helberjilt bairshilaas hamarch uurchlugduh
            insideWhitePage.onmousemove = function(event) {
                
                
                var coordinate = selectElement.getBoundingClientRect();
                var x = event.pageX;
                var y = event.pageY;
                var selectedElementHeight = coordinate.height;
                var selectedElementWidth = coordinate.width;
                var xleftcorner = coordinate.x;
                var yleftcorner = coordinate.y;
                
                if (x > xleftcorner - 10 && x < xleftcorner + 13 && yleftcorner - 13 < y && y < yleftcorner + 13){
                    insideWhitePage.style.cursor = 'nwse-resize';
                    insideWhitePage.onmousedown = function() {
                        insideWhitePage.onmousemove = function(e) {
                            x = e.pageX;
                            y = e.pageY;
                            selectElement.style.width = x - xleftcorner + 'px';
                            selectElement.style.height = y - yleftcorner + 'px';
                        }
                    }
                    
                    insideWhitePage.onmouseup = function () {
                        insideWhitePage.onmousemove = function(){
                        }
                    }
                    
                    
                }
                else if (x > xleftcorner + selectedElementWidth - 10 && x < xleftcorner + selectedElementWidth + 10 && yleftcorner + selectedElementHeight - 10 < y && y < yleftcorner + selectedElementHeight + 10) {
                insideWhitePage.style.cursor = 'nwse-resize';
                selectElement.style.cursor = 'nwse-resize';
                insideWhitePage.onmousedown = function() {
                    insideWhitePage.onmousemove = function(e) {
                        x = e.pageX;
                        y = e.pageY;
                        selectElement.style.height = y - yleftcorner + 'px';
                        selectElement.style.width = x - xleftcorner + 'px';
                    }
                }
                
                insideWhitePage.onmouseup = function () {
                    insideWhitePage.onmousemove = function(){
                    }
                }
                
            }
            else if (x > xleftcorner + selectedElementWidth - 13 && x < xleftcorner + selectedElementWidth + 13 && yleftcorner - 13 < y && y < yleftcorner + 13) {
                selectElement.style.cursor = 'sw-resize';
                insideWhitePage.onmousedown = function() {
                    insideWhitePage.onmousemove = function(e) {
                        x = e.pageX;
                        y = e.pageY;
                        selectElement.style.height = y - yleftcorner + 'px';
                        selectElement.style.width = x - xleftcorner + 'px';
                    }
                }
                
                insideWhitePage.onmouseup = function () {
                    insideWhitePage.onmousemove = function(){
                        
                    }
                }
            }
            else if (x > xleftcorner - 13 && x < xleftcorner + 13 && yleftcorner + selectedElementHeight - 13 < y && y < yleftcorner + selectedElementHeight + 13) {
                selectElement.style.cursor = 'sw-resize';
                insideWhitePage.onmousedown = function() {
                    insideWhitePage.onmousemove = function(e) {
                        x = e.pageX;
                        y = e.pageY;
                        selectElement.style.height = selectedElementHeight + yleftcorner - y + 'px';
                        selectElement.style.width = selectedElementWidth + xleftcorner - x + 'px';
                    }
                }
                
                insideWhitePage.onmouseup = function () {
                    insideWhitePage.onmousemove = function(){
                        
                    }
                }
            }
            else if (x > xleftcorner + 8 && x < xleftcorner + selectedElementWidth - 8 && yleftcorner - 8 < y && y < yleftcorner + 8) {
                selectElement.style.cursor = 'ns-resize';
                insideWhitePage.onmousedown = function() {
                    insideWhitePage.onmousemove = function(e) {
                        x = e.pageX;
                        y = e.pageY;
                        selectElement.style.height = selectedElementHeight + y - yleftcorner + 'px';
                    }
                }
                
                insideWhitePage.onmouseup = function () {
                    insideWhitePage.onmousemove = function(){
                        

                    }
                }
            }
            else if (x > xleftcorner + 8 && x < xleftcorner + selectedElementWidth - 8 && yleftcorner + selectedElementHeight - 8 < y && y < yleftcorner + selectedElementHeight + 8) {
                selectElement.style.cursor = 'ns-resize';
                insideWhitePage.onmousedown = function() {
                    insideWhitePage.onmousemove = function(e) {
                        x = e.pageX;
                        y = e.pageY;
                        selectElement.style.height = y - yleftcorner + 'px';
                    }
                }
                
                insideWhitePage.onmouseup = function () {
                    insideWhitePage.onmousemove = function(){
                        
                    }
                }
                
            }
            else if (x < xleftcorner + 8 && x > xleftcorner - 8 && yleftcorner + 8 < y && y < yleftcorner + selectedElementHeight - 8) {
                selectElement.style.cursor = 'ew-resize';
                insideWhitePage.onmousedown = function() {
                    insideWhitePage.onmousemove = function(e) {
                        x = e.pageX;
                        y = e.pageY;
                        selectElement.style.width = selectedElementWidth - x + xleftcorner + 'px';
                        
                    }
                }
                
                insideWhitePage.onmouseup = function () {
                    insideWhitePage.onmousemove = function(){
                        
                        
                    }
                }
                
                
            }
            else if (x < xleftcorner + selectedElementWidth + 8 && x > xleftcorner + selectedElementWidth - 8 && yleftcorner + 8 < y && y < yleftcorner + selectedElementHeight - 8) {
                selectElement.style.cursor = 'ew-resize';
                insideWhitePage.onmousedown = function() {
                    insideWhitePage.onmousemove = function(e) {
                        x = e.pageX;
                        y = e.pageY;
                        selectElement.style.width = x - xleftcorner + 'px';
                    }
                }
                
                insideWhitePage.onmouseup = function () {
                    insideWhitePage.onmousemove = function(){
                        
                    }
                }   
                
                
            }else{
                selectElement.style.cursor = 'all-scroll';
                selectElement.style.position = 'absolute';
                selectElement.onmousedown = function () {
                    selectElement.onmousemove = function(e) {
                        x = e.pageX;
                        y = e.pageY;
                        selectElement.style.left = x - selectedElementWidth/2 + "px";
                        selectElement.style.top = y - selectedElementHeight/2 + "px";
                    }
                }
                
                selectElement.onmouseup = function () {
                    selectElement.onmousedown = function(){
                        
                    }
                    selectElement.onmousemove = function(){
                        
                    }
                    changeSizeAndPosition()
                }
                
            }
            
        }
        }
        changeSizeAndPosition()
    }  
});
selectElement=null;
// if (selectElement.classList.contains('selectable')) {
    //     selectElement.style.outline = "5px solid #87CEFA"
    // notSelectDiv = selectElement.tagName.toLowerCase().substring(0, 3);
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