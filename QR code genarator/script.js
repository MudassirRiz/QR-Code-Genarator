let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let inputBox = document.getElementById("input-Box");
let btn = document.getElementById("btn");


function generateQR(){
    if(inputBox.value.length > 0)
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ inputBox.value;

    
    
    
    
}
btn.addEventListener("click", generateQR());
//this is not genarating the qr code , it seems like the api is failed bcz in network throwing an error 300
