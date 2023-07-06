let totzaa=new Array(4)
let colors = ['hsl(0, 88%, 68%)', 'hsl(143, 97%, 49%)',  'hsla(189, 98%, 50%, 0.815)', 'hsl(337, 87%, 56%)', 'hsla(59, 98%, 50%, 0.815)', 'hsla(29, 92%, 48%, 0.815)',]
let currentRow = 1; //שורה עכשיו
let currentRowColors = ["", "", "", ""];//צבעים שבחר בשורה עכשיו
let currentCircle = 0 //העיגול שנבחר עכשיו
let secbool = document.getElementById("secbp")
let numBlack = 0
 let numWhite = 0;
 

// //רנדום על הצבעים שהמחשב בוחר
for(i=0; i<4;){
    
   let color=Math.floor(Math.random() * colors.length)
   let gusse =colors[color];
     if(totzaa.indexOf(gusse)==-1){
      totzaa[i] = gusse;
         i++  
     }   
  }  

    //הגדרת 6 כפתורי צבעים
    let plata_colorsElement = document.getElementById("plata_colors")
    for (let index = 0; index < colors.length; index++) { //עובר על המערך של הצבעים שהוגדר למעלה
        let colorElement = document.createElement("input")
        colorElement.setAttribute("type", "button")
        colorElement.setAttribute("id", index)
        colorElement.setAttribute("data-colors", colors[index])//שם הצבע נשמר dataב
        colorElement.style.backgroundColor = colors[index]
        plata_colorsElement.appendChild(colorElement)
        colorElement.className = 'plata_colors'
        colorElement.addEventListener("click", f_click)

}

let t=0
let count=1
function f_click() {
   
    let keep_color = event.srcElement.getAttribute("data-colors")  //שומר את הצבע שנבחר
    let id = "bchira" + currentRow + "_" + currentCircle;
    document.getElementById(id).style.background = keep_color     // צןבע את העיגול בצבע שנבחר
    event.srcElement.style.display='none'                         // מוציא את הצבע
    currentCircle++;
    currentRowColors[t++] = keep_color          // מערך של צבעים שהוא שווה לשורה שעכשיו צבעים
    if (currentCircle == 4) {
        checkBulPgiaa();
        currentRow++;
        currentCircle = 0;
        t = 0;
        count++
        for(i=0; i<=5; i++)    
            document.getElementById(i).style.display = 'block'
        
    }
}
     // הגדרת כפתור תחילת משחק
     let startGame = document.getElementById("toStartGame")
     let start = document.createElement("input")
     start.setAttribute("type", "button")
     startGame.appendChild(start)
     start.setAttribute("value","to start")//מה יהיה כתוב בתוך התיבה
     start.className = 'toStartGame'
     start.addEventListener("click", f_start)

  function f_start(){

      window.location="html.html"
  }  

    //הגדרת כפתור מחיקה צבע אחרון
       let deletee = document.getElementById("delete")
       let delite = document.createElement("input")
       delite.setAttribute("type", "button")
       deletee.appendChild(delite)
       delite.setAttribute("value","delete")//מה יהיה כתוב בתוך התיבה
       delite.className = 'toStartGame'
       delite.addEventListener("click", f_deletee)
  
  function f_deletee(){
    // currentRowColors(i).style.background="none"
  }


//פונקציה שבןדקת כמה בולים וכמה פגיעות
function checkBulPgiaa() {

    for (let f = 0; f < 4; f++) {     // סופרת כמה בולים יש
        if (currentRowColors[f] == totzaa[f]) {
            numBlack++
        }
    }
    for (i = 0; i < 4; i++) {        // סופרת כמה פגיעות יש
        for (let j = 0; j < 4; j++) {
            if (currentRowColors[i] == totzaa[j] && i != j) 
                numWhite++
            }
        }
    
    if (numBlack == 4 && numWhite == 0) {       //אם הוא הצליח למצוא את הצבעים
        window.location="won.html"
    }
    if (numBlack > 0 || numWhite > 0) {

        // מייצר ריבועים בכמות של השחורים
        for (let r = 0; r < numBlack; r++) {
            let btnbp = document.createElement("button")
            btnbp.setAttribute("id", "btnbp" + r)
            btnbp.style.backgroundColor = "black"
            secbool.appendChild(btnbp)

        }
        // מייצר ריבועים בכמות של הלבנים
        for (let a = 0; a < numWhite; a++) {
            let btnbp = document.createElement("button")
            btnbp.setAttribute("id", "btnbp" +a)
            btnbp.style.backgroundColor ="white"
            secbool.appendChild(btnbp)
        }
    }
    secbool.appendChild(document.createElement("br"))
    secbool.appendChild(document.createElement("br"))
    secbool.appendChild(document.createElement("br"))
    secbool.appendChild(document.createElement("br"))

    numBlack = 0;
    numWhite = 0;
    }


let theName= document.getElementById("txName")



