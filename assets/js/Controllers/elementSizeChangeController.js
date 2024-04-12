const headerMark = window.parent.document.getElementById('render')
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

headerMark.contentWindow.addEventListener('mousedown', (event) => {
    var selectElement = event.target;
    if (selectElement.className.includes('selectable')) {
        // cursoriin helberjilt bairshilaas hamarch uurchlugduh
        headerMark.contentWindow.onmousemove = function(event) {
            var coordinate = selectElement.getBoundingClientRect();
            var x = event.pageX;
            var y = event.pageY;
            var selectedElementHeight = coordinate.height;
            var selectedElementWidth = coordinate.width;
            var xleftcorner = coordinate.x;
            var yleftcorner = coordinate.y;

            // frameContent.addEventListener('mouseover', stretching);

            if (x > xleftcorner - 10 && x < xleftcorner + 13 && yleftcorner - 13 < y && y < yleftcorner + 13) {
                selectElement.style.cursor = 'nwse-resize';
                
                selectElement.onmousedown = function () {
                    selectElement.onmousemove = function(e) {
                        x = e.pageX;
                        y = e.pageY;
                        selectElement.style.width = x - xleftcorner + 'px';
                        selectElement.style.height = y - yleftcorner + 'px';
                    }
                }

                selectElement.onmouseup = function () {
                   selectElement.onmousemove = function(){
                   }
                }
                
                       
            }
            else if (x > xleftcorner + selectedElementWidth - 10 && x < xleftcorner + selectedElementWidth + 10 && yleftcorner + selectedElementHeight - 10 < y && y < yleftcorner + selectedElementHeight + 100) {
                selectElement.style.cursor = 'nwse-resize';
                headerMark.style.cursor = 'nwse-resize';
                selectElement.onmousedown = function () {
                    selectElement.onmousemove = function(e) {
                        x = e.pageX;
                        y = e.pageY;
                        selectElement.style.height = y - yleftcorner + 'px';
                        selectElement.style.width = x - xleftcorner + 'px';
                        console.log(selectElement.style.height)
                        console.log(selectElement.style.width)

                    }
                }

                selectElement.onmouseup = function () {
                   selectElement.onmousemove = function(){
                   }
                }
                
            }
            else if (x > xleftcorner + selectedElementWidth - 13 && x < xleftcorner + selectedElementWidth + 13 && yleftcorner - 13 < y && y < yleftcorner + 13) {
                selectElement.style.cursor = 'sw-resize';
                headerMark.style.cursor = 'sw-resize';
                selectElement.style.height = y - yleftcorner + 'px';
                selectElement.style.width = x - xleftcorner + 'px';

            }
            else if (x > xleftcorner - 13 && x < xleftcorner + 13 && yleftcorner + selectedElementHeight - 13 < y && y < yleftcorner + selectedElementHeight + 13) {
                selectElement.style.cursor = 'sw-resize';
                headerMark.style.cursor = 'sw-resize';
                selectElement.onmousedown = function () {
                    selectElement.style.height = selectedElementHeight + yleftcorner - y + 'px';
                    selectElement.style.width = selectedElementWidth + xleftcorner - x + 'px';
                }
            }
            else if (x > xleftcorner + 8 && x < xleftcorner + selectedElementWidth - 8 && yleftcorner - 8 < y && y < yleftcorner + 8) {
                selectElement.style.cursor = 'ns-resize';
                selectElement.onmousedown = function () {
                    selectElement.style.height = selectedElementHeight + y - yleftcorner + 'px';
                }
            }
            else if (x > xleftcorner + 8 && x < xleftcorner + selectedElementWidth - 8 && yleftcorner + selectedElementHeight - 8 < y && y < yleftcorner + selectedElementHeight + 8) {
                selectElement.style.cursor = 'ns-resize';
                selectElement.onmousedown = function () {
                    selectElement.style.height = y - yleftcorner + 'px';
                }
            }
            else if (x < xleftcorner + 8 && x > xleftcorner - 8 && yleftcorner + 8 < y && y < yleftcorner + selectedElementHeight - 8) {
                selectElement.style.cursor = 'ew-resize';
                selectElement.onmousedown = function () {
                    selectElement.style.width = selectedElementWidth - x + xleftcorner + 'px';
                }
            }
            else if (x < xleftcorner + selectedElementWidth + 8 && x > xleftcorner + selectedElementWidth - 8 && yleftcorner + 8 < y && y < yleftcorner + selectedElementHeight - 8) {
                selectElement.style.cursor = 'ew-resize';
                selectElement.onmousedown = function () {
                    selectElement.style.width = x - xleftcorner + 'px';
                }

            }
            else {

                selectElement.style.cursor = 'all-scroll';
                selectElement.style.position = 'absolute';
                selectElement.onmousedown = function () {
                    selectElement.onmousemove = function(e) {
                        x = e.pageX;
                        y = e.pageY;
                        console.log("hudulj bna 55")
                        selectElement.style.left = x - 100 + "px";
                        selectElement.style.top = y - 100 + "px";
                    }
                }

                selectElement.onmouseup = function () {
                   selectElement.onmousemove = function(){
                   }
                }
            }

        }
    }
});
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