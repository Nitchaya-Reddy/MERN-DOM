function applyStyle() {
    const date = document.getElementById("date").value;
    const color = document.getElementById("color").value;
    const fontStyle = document.getElementById("fontStyle").value;
    const fontSize = document.getElementById("fontSize").value + "px";
    var content= document.getElementById("content");
    content.style.color = color;
    content.style.fontFamily = fontStyle;
    content.style.fontSize = fontSize;
    content.textContent = 'This is the document content that will change based on the date entered.'+"Date: "+date;
}