
let answer1;
let answer2;
let answer3;
let goodanswers = ['parijs', '8', 'ijselmeer']


function showMessage()
{
    answer1 = document.getElementById("parijs");
    answer2 = document.getElementById("8");
    answer3 = document.getElementById("ijselmeer");
    if (answer1.value == goodanswers[0]) {
       
        answer1.style.background="green";
       
        document.getElementById("message").innerText="alles is goed";  
console.log("goed")        
    }
    else {
        console.log("fout")
        answer1.style.background="red";
        document.getElementById("message").innerText="der is een antwoord fout"; 

    }
    if (answer2.value == goodanswers[1]) {
       
        answer2.style.background="green";
       
        document.getElementById("message").innerText="alles is goed";  
console.log("goed")        
    }
    else {
        console.log("fout")
       
        answer2.style.background="red";
        
        document.getElementById("message").innerText="der is een antwoord fout"; 

    }
    if (answer3.value == goodanswers[2]) {
       
        answer3.style.background="green";
       
        document.getElementById("message").innerText="alles is goed";  
console.log("goed")        
    }
    else {
        console.log("fout")
        answer3.style.background="red";
        document.getElementById("message").innerText="der is een antwoord fout"; 

    }
  
}