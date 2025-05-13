window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".calculator").style.display = "block";
    }, 1000); // after splash screen
});
let currentOperation=document.querySelector(".current-operation");
let justEvaluated = false;
let buttons=document.querySelectorAll(".button")

buttons.forEach((button) => {
    
    button.addEventListener("click", () => {
        const value = button.textContent;
        
        if (currentOperation.textContent === "0") {
            currentOperation.textContent = value;
            justEvaluated = false;
        } 
        else  {
            
            if (value === "C") {
            currentOperation.textContent = "0";
            justEvaluated = false;
            }
        
            else if (value === "=") {
                try {
                    let expression = currentOperation.textContent
                        .replace(/×/g, "*")
                        .replace(/÷/g, "/")
                        .replace(/−/g, "-")
                        .replace(/%/g,"*0.01");

                    currentOperation.textContent = eval(expression);
                    justEvaluated = true;

                } 
                catch (e) {
                    currentOperation.textContent = "Error";
                    justEvaluated = true;
                }
            }
            else if(value==="⌫"){
                if(currentOperation.textContent.length==1){
                    currentOperation.textContent="0";
                    justEvaluated = false;
                }
                currentOperation.textContent=currentOperation.textContent.slice(0,-1);
                justEvaluated = false;
            }
            
           
            
            else {
                if (currentOperation.textContent === "0" || justEvaluated) {
                    currentOperation.textContent = value;
                } else {
                    currentOperation.textContent += value;
                }
                justEvaluated = false;
            }

            
        }
        
        
            
        
        // if (value === "C") {
        //     currentOperation.textContent = "0";
        // } 
        // else if (value === "=") {
        //     currentOperation.textContent = eval(currentOperation.textContent);
        // }
        
    });
});



