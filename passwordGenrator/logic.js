const input = document.getElementById("input");
const copybtn = document.getElementById("copy");
const button = document.getElementById("btn");
let values = "123456789ABCDEabcdefghijklmnop@#$";

const create = () => {
    const ne = generatepass(8);
    input.value = ne ;
}

function generatepass(length){
   let passkey  = " ";
   for(let i = 0 ; i < length ; i++){
    let randompas = Math.floor(Math.random() * values.length)
    passkey += values.charAt(randompas);
   copybtn.addEventListener("click",()=>copybn(passkey))
   }
   return  passkey;
}

function copybn(elem){
    navigator.clipboard.writeText(elem).then(()=>{

    })
}

// function copy(){
//     input.select();
//     document.execCommand('copy');
// }

// copybtn.addEventListener("click",copy)