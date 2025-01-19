let inputText =document.getElementById("inputtext")
let imgSrc=document.getElementById("imgqr")

function generate(){
    imgSrc.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputText.value
}
