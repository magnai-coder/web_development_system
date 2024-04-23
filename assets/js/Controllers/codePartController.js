const codeContext = document.querySelector(".codePage");
const renderContext = document.querySelector(".whitePage");
const shifterLever = document.querySelector(".shifterPart");
codeContext.style.display =  "flex";
renderContext.style.height = "95vh";   
console.log(shifterLever)
    shifterLever.onclick = function(){
       
       renderContext.style.height = renderContext.style.height === "95vh" ? "45vh" : "95vh";
       codeContext.style.display = codeContext.style.display === "none" ? "flex" : "none";

    }
