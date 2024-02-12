const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pas1El = document.getElementById("pas1")
let pas2El = document.getElementById("pas2")
let lenght = 15
function btn() {
        let pw = ""
        let pw2 = ""
        pw += characters[Math.floor(Math.random() * characters.length)]
        pw2 += characters[Math.floor(Math.random() * characters.length)]
        for (i = 0; i < characters.length; i++) {
            if (lenght > pw.length && lenght > pw2.length){
                pw += characters[Math.floor(Math.random() * characters.length)]
                pw2 += characters[Math.floor(Math.random() * characters.length)]     
            }
            pas1El.textContent = pw
            pas2El.textContent = pw2
        }
}