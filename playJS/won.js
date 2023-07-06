     // הגדרת כפתור תחילת משחק
     let startGame = document.getElementById("toStartGame")
     let start = document.createElement("input")
     start.setAttribute("type", "button")
     startGame.appendChild(start)              
     start.setAttribute("value","new game")   //מה יהיה כתוב בתוך התיבה
     start.className = 'toStartGame'
     start.addEventListener("click", f_start)

  function f_start(){
      
      window.location="html.html"
  }   
  