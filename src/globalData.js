function typeWriterEffect(id,msg){
    var text = "";
    var length = msg.length;
    var x = 0;
    var speed = 1;
    function nextLetter(){
      text += msg.charAt(x);
      // add this for "<center>"+text+"</center>"
      document.getElementById(id).innerHTML = text;
      
      if (x < length){
        x++;
        
        setTimeout(nextLetter,speed);
      }
    }
    nextLetter();
};

let background = backgrounds.RAIN;
let gif = gifs.CLOUDS;
let promptSymbol = promptSymbols[1];
let quote = "Woman! Life! Freedom!";


let StartingText = `Starting ........ 
                <br> (҂◡̀_◡́)ᕤ Hey normies🛸
                <br> <span style="color:#cb6790;font-size:150%;">I am Ali Ebadi</span>
                A 'Backend' Developer
                <br> Welcome to my page
                <br>find me online on:

                <ul>
         <li>
            <a href="https://www.linkedin.com/in/aliebadi-dev/" target="_blank"
              >LinkedIn</a
            >
          </li>
          <li>
            <a href="https://github.com/EbadiDev" target="_blank">Github</a>
          </li>
         
          <li>
            <a href="https://twitter.com/EbadiDev" target="_blank"
              >Twitter</a
            >
          </li>
          <li>
            <a href="https://www.instagram.com/archmage.inc/" target="_blank"
              >Instagram</a
            >
          </li>
         </ul>



                `;

typeWriterEffect("test",StartingText);

let greetingsText = `
            <span style="color:#cb6790;font-size:150%;">Ebadi@Dev</span>
`;

let bookmarks = [];



  