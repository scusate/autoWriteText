const text = "SCUSATE \n This is an example of auto-typed text.      ";

let index = 0;

function writeText() {
  document.getElementById("text").innerText = text.slice (0, index);
  
  index++;
  
  if (index > text.length - 1){
    index = 0;
  }
}

setInterval(writeText, 150);