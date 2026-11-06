const idade = Number (prompt("informe a sua idade"))
const altura = Number (prompt("diga sua altura"))

let podeentrar = false;

if (idade >= 16 && altura >= 1.60){
    podeentrar = true;
}

else { podeentrar = false;
    
} 
alert("apto" + podeentrar)