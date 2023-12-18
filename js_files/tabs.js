var content_aanbod = document.getElementById("content_aanbod");
var content_vraag = document.getElementById("content_vraag");
var btn_aanbod = document.getElementById("btn_aanbod");
var btn_vraag =  document.getElementById("btn_vraag");

function openAanbod(){
    content_aanbod.style.transform = "translateX(0)";
    content_vraag.style.transform = "translateX(100%)";
}

function openVraag(){
    content_aanbod.style.transform = "translateX(100%)";
    content_vraag.style.transform = "translateX(0)";
}