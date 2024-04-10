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
        headerMark.contentWindow.addEventListener('mousemove', (event) => {
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
                    console.log("darsan bna1")
                    selectElement.onmousemove = function () {
                        console.log("hudulj bna1")
                        selectElement.style.width = x - xleftcorner + 'px';
                        selectElement.style.height = y - yleftcorner + 'px';

                    }

                }

                selectElement.onmouseup = function () {
                    console.log("zogsooloo")
                    selectElement.removeEventListener('mousemove', mouseMoveEvent);
                }
            }
            else if (x > xleftcorner + selectedElementWidth - 100 && x < xleftcorner + selectedElementWidth + 100 && yleftcorner + selectedElementHeight - 100 < y && y < yleftcorner + selectedElementHeight + 100) {
                selectElement.style.cursor = 'nwse-resize';
                selectElement.onmousedown = function () {
                    console.log("darsan bna1")
                    selectElement.onmousemove = function () {
                        console.log("hudulj bna1")
                        selectElement.style.height = y - yleftcorner + 'px';
                        selectElement.style.width = x - xleftcorner + 'px';

                    }

                }

                selectElement.onmouseup = function () {
                    console.log("zogsooloo")
                    selectElement.removeEventListener('mousemove', mouseMoveEvent);
                }



                
            }
            else if (x > xleftcorner + selectedElementWidth - 13 && x < xleftcorner + selectedElementWidth + 13 && yleftcorner - 13 < y && y < yleftcorner + 13) {
                selectElement.style.cursor = 'sw-resize';
                selectElement.style.height = y - yleftcorner + 'px';
                selectElement.style.width = x - xleftcorner + 'px';

            }
            else if (x > xleftcorner - 13 && x < xleftcorner + 13 && yleftcorner + selectedElementHeight - 13 < y && y < yleftcorner + selectedElementHeight + 13) {
                selectElement.style.cursor = 'sw-resize';
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

                var selectPart;
                selectElement.onmousedown = function () {
                    console.log("darsan bna55")
                    selectPart = selectElement;


                }
                selectElement.onmousemove = function () {
                    console.log("hudulj bna 55")
                    selectPart.style.left = x - 100 + "px";
                    selectPart.style.top = y - 100 + "px";
                }


                selectElement.onmouseup = function () {
                    console.log("zogsooloo 55")
                    selectPart = null
                }
            }

        })
    }
});