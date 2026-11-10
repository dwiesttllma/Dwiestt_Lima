let corPulseira = "amarela"
let idadePaciente = "65"
let gestante = false

if(corPulseira === "vermelha"){
    console.log ("Atendimento de emergencia: Sala de trauma imediata");
}else if (corPulseira === "amarela") {
    if (idadePaciente >= 60 || gestante){
        console.log ("Atendimento urgente: Prioridade especial preferencial");
    }else{
        console.log("Atendimento urgente: sala padrao amarela");
    }   
}else if (corPulseira === "verde"){
    let destino = idadePaciente < 12 ? "Encaminhar para Clinica Geral":
    console.log (destino);
}else{
    console.warn ("Codigo de pulseira desconhecido")
}
