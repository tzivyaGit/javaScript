
let t_name= document.getElementById("txName")
let myName=sessionStorage.getItem("name")
myName=t_name.value+"היי"



let toGame= document.getElementById("toGame")
 
toGame.addEventListener("click", click )

function click(){
    window.location= "html.html"

}
