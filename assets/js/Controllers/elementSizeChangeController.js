
// document.addEventListener('mousedown', () => {
//     document.addEventListener('mousemove', changePosition);
//     function changePosition() {
//         x = e.clientX;
//         y = e.clientY;
//         console.log(x);
//         selectedElementToChange.style.left = x + "px";
//         selectedElementToChange.style.top = y + "px";
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
    var selectedElementToChange = event.target; 
    if (selectedElementToChange.className.includes('selectable') && selectedElementToChange !== " "){   
        const insideWhitePage = whitePageWay.contentWindow.document.getElementById("whitePage");
            // cursoriin helberjilt bairshilaas hamarch uurchlugduh
            insideWhitePage.addEventListener('mousemove', (event) => {
                var coordinate = selectedElementToChange.getBoundingClientRect();
                var x = event.clientX;
                var y = event.clientY;
                var selectedElementHeight = coordinate.height;
                var selectedElementWidth = coordinate.width;
                var xleftcorner = coordinate.x;
                var yleftcorner = coordinate.y;
                

                
                //Zuun deed untsuguus tataj urgun bolon unduriig nemj hasah 
                if (x > xleftcorner - 20 && x < xleftcorner + 2 && yleftcorner - 13 < y && y < yleftcorner + 2){
                    insideWhitePage.style.cursor = 'nwse-resize';
                    selectedElementToChange.style.cursor = 'nwse-resize';

                    
                    insideWhitePage.onmousedown = function() {
                        insideWhitePage.onmousemove = function(e) {

                            x = e.clientX;
                            y = e.clientY;
                            selectedElementToChange.style.top = y + 'px';
                            selectedElementToChange.style.left = x + 'px';


                            selectedElementToChange.style.width = xleftcorner-x+selectedElementWidth + 'px';
                            selectedElementToChange.style.height = yleftcorner-y+selectedElementHeight + 'px';
                        }
                    }
                    
                    insideWhitePage.onmouseup = function () {
                        insideWhitePage.onmousedown = function(){
                        
                        }
                        insideWhitePage.onmousemove = function(){
                        }
                    
                         
                        
                    }
                    
                    
                }
                // Elementiin baruun dood hesgees chirch undur bolon urgunii hemjeeg ihesgeh
                else if (x > xleftcorner + selectedElementWidth - 2 && x < xleftcorner + selectedElementWidth + 10 && yleftcorner + selectedElementHeight - 2 < y && y < yleftcorner + selectedElementHeight + 10) {
                insideWhitePage.style.cursor = 'nwse-resize';
                selectedElementToChange.style.cursor = 'nwse-resize';
                insideWhitePage.onmousedown = function() {
                    insideWhitePage.onmousemove = function(e) {
                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.height = y - yleftcorner + 'px';
                        selectedElementToChange.style.width = x - xleftcorner + 'px';
                    }
                }
                insideWhitePage.onmouseup = function () {
                    
                    insideWhitePage.onmousedown = function(){
                    }
                    insideWhitePage.onmousemove = function(){
                    }

                    

                }
                
            }
            //Baruun deed untsuguus sungaj undur urguniig uurchluh bolomjtoi 
            else if (x > xleftcorner + selectedElementWidth - 2 && x < xleftcorner + selectedElementWidth + 13 && yleftcorner - 13 < y && y < yleftcorner + 2) {
                selectedElementToChange.style.cursor = 'sw-resize';
                insideWhitePage.style.cursor = 'sw-resize';
                insideWhitePage.onmousedown = function() {
                    insideWhitePage.onmousemove = function(e) {
                console.log("tatah")

                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.top = y + 'px';
                        selectedElementToChange.style.left = xleftcorner + 'px';


                        selectedElementToChange.style.width = x-xleftcorner + 'px';
                        selectedElementToChange.style.height = yleftcorner-y+selectedElementWidth + 'px';
                    }
                }
                
                insideWhitePage.onmouseup = function () {
                    insideWhitePage.onmousedown = function(){
                        
                    }
                    insideWhitePage.onmousemove = function(){
                        
                    }
                    
                }
            }
            // zuun dood bulangaas tataj sungan urgun bolon unduriig uurchluh bolomjtoi boloh
            else if (x > xleftcorner - 13 && x < xleftcorner + 2 && yleftcorner + selectedElementHeight - 2 < y && y < yleftcorner + selectedElementHeight + 13) {
                selectedElementToChange.style.cursor = 'sw-resize';
                insideWhitePage.style.cursor = 'sw-resize';

                insideWhitePage.onmousedown = function() {
                    insideWhitePage.onmousemove = function(e) {

                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.top = yleftcorner+ 'px';
                        selectedElementToChange.style.left = x + 'px';


                            selectedElementToChange.style.width = xleftcorner+selectedElementWidth-x + 'px';
                            selectedElementToChange.style.height = y - yleftcorner + 'px';
                    }
                }
                
                insideWhitePage.onmouseup = function () {
                    insideWhitePage.onmousedown = function(){
                        
                    }
                    insideWhitePage.onmousemove = function(){
                        
                    }
                }

                ;
            }
            //Deed talaas tataj unduriig uurchluh bolomjtoi bolgoson
            else if (x > xleftcorner + 8 && x < xleftcorner + selectedElementWidth - 8 && yleftcorner - 8 < y && y < yleftcorner + 4) {
                selectedElementToChange.style.cursor = 'ns-resize';
                insideWhitePage.style.cursor = 'ns-resize';

                insideWhitePage.onmousedown = function() {
                    insideWhitePage.onmousemove = function(e) {
                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.top = y + 'px';

                        selectedElementToChange.style.height = selectedElementHeight + yleftcorner - y + 'px';
                    }
                }
                
                insideWhitePage.onmouseup = function () {
                    insideWhitePage.onmousedown = function(){
                        
                    }
                    insideWhitePage.onmousemove = function(){
                        

                    }

                }
            }
            //Dood talaas tataj sungan unduriig uurchilj boloh bolomjtoi bolson
            else if (x > xleftcorner + 8 && x < xleftcorner + selectedElementWidth - 4 && yleftcorner + selectedElementHeight - 4 < y && y < yleftcorner + selectedElementHeight + 8) {
                selectedElementToChange.style.cursor = 'ns-resize';
                insideWhitePage.style.cursor = 'ns-resize';
                insideWhitePage.onmousedown = function() {
                    insideWhitePage.onmousemove = function(e) {
                console.log("dooshoo sungah")

                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.height = y - yleftcorner + 'px';
                    }
                }
                
                insideWhitePage.onmouseup = function () {
                    insideWhitePage.onmousedown = function(){
                        
                    }
                    insideWhitePage.onmousemove = function(){
                        
                    }


                

                }
                
            }
            //Zuun talaas sunguj elementiin urguniig uurchluh bolomjtoi bolgoson
            else if (x < xleftcorner + 4 && x > xleftcorner - 8 && yleftcorner + 8 < y && y < yleftcorner + selectedElementHeight - 8) {
                selectedElementToChange.style.cursor = 'ew-resize';
                insideWhitePage.style.cursor = 'ew-resize';

                insideWhitePage.onmousedown = function() {
                    insideWhitePage.onmousemove = function(e) {
                console.log("Zuuneer sungah")

                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.left = x + 'px';

                        selectedElementToChange.style.width = selectedElementWidth + xleftcorner - x + 'px';
                        
                    }
                }
                
                insideWhitePage.onmouseup = function () {
                    insideWhitePage.onmousedown = function(){
                        
                    }
                    insideWhitePage.onmousemove = function(){
                        
                        
                    }


                

                }
                
            }
            //Baruun talaas sungaj elementiiin urguniig uurchluh bolomjtoi bolgoh
            else if (x < xleftcorner + selectedElementWidth + 8 && x > xleftcorner + selectedElementWidth - 4  && yleftcorner + 8 < y && y < yleftcorner + selectedElementHeight - 8) {
                selectedElementToChange.style.cursor = 'ew-resize';
                insideWhitePage.style.cursor = 'ew-resize';

                insideWhitePage.onmousedown = function() {
                console.log("baruunaar sungah")

                    insideWhitePage.onmousemove = function(e) {
                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.width = x - xleftcorner + 'px';
                    }
                }
                
                insideWhitePage.onmouseup = function () {
                    insideWhitePage.onmousedown = function(){
                        
                    }
                    insideWhitePage.onmousemove = function(){
                        
                    }


                

                }   
            //Hureenii dortor bolon gaduurah cursoriin helberiig zaahaas gadna elementiin bairshiliig uurchluh bolomjtoi bolgoh
            }else{
                insideWhitePage.style.cursor = 'default';
                selectedElementToChange.style.cursor = 'all-scroll';
                selectedElementToChange.style.position = 'absolute';
                selectedElementToChange.onmousedown = function () {
                    insideWhitePage.onmousedown = function(){
                        
                    }
                    insideWhitePage.onmousemove = function(){
                        
                    }
                    selectedElementToChange.onmousemove = function(e){
                        x = e.clientX;
                        y = e.clientY;
                        selectedElementToChange.style.left = x - selectedElementWidth/2 + "px";
                        selectedElementToChange.style.top = y - selectedElementHeight/2 + "px";
                    }
                }
                
                selectedElementToChange.onmouseup = function () {
                    selectedElementToChange.onmousedown = function(){
                    }
                    selectedElementToChange.onmousemove = function(){
                        
                    }
                    
                }
                
            }
            
        })
        
        
    }else{
        selectedElementToChange = null;
   

    }

});

// if (selectedElementToChange.classList.contains('selectable')) {
    //     selectedElementToChange.style.outline = "5px solid #87CEFA"
    // notSelectDiv = selectedElementToChange.tagName.toLowerCase().substring(0, 3);
    // if (notSelectDiv.includes('div')) {
        //     selectedElementToChange.style.width="100%"
        // } else {
            //     //Zuuh uyed duudah function
            //     let chooseElement = null;
            //     console.log(chooseElement)
            //         selectedElementToChange.style.position = "absolute";
            //         chooseElement = selectedElementToChange;
            //         document.onmousemove = (e) => {
                //              x = e.clientX;
                //              y = e.clientY;
                    
//             chooseElement.style.left = x - 50 + "px";
//             chooseElement.style.top = y - 10 + "px";
//         }
//         document.onmouseup = function (e) {
//             chooseElement = null;
//         }
//     }