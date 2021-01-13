var textbox= document.getElementById("textbox");
textbox.addEventListener("blur",helloMessage)
function helloMessage() {
    str=""
    if(textbox.value !== str)
    {
        textbox.value= textbox.value.toUpperCase();
        var change =document.getElementById("Account")
        change.innerHTML =` <p>Hello, ${textbox.value}</p>
        <p>press Next to contniue ...........</p>`
        change.style.color = 'rgba';
        change.style.fontSize = '3pc';
    }
}
