let newName=document.getElementById("txName")
newName.addEventListener("blur", f_blur)


function f_blur(){
if(newName.value.length==0)
newName.focus()
else{
    sessionStorage.setItem("name", newName.value)
    window.location="hone.html"

}

}