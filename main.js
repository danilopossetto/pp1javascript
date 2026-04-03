const fullName = prompt ("Ingrese su nombre")
const age = prompt ("Ingrese su edad")
const password = prompt ("ingrese una constraseña minimo 6 caracteres")
const minimum = 6
if (fullName === ""){
    console.log("ERROR")    
}else if (age < 18){

    console.log("ACCESO DENEGADO")
}
else if  (password.length < minimum){
    console.log("CONTRASEÑA INVALIDA")
}else{
    const tenYears=age + 10
    console.log("bienvenido",fullName,"un placer recibirte") 
    console.log("En 10 años tendras", tenYears,"años")
    console.log("actualmente tenes:",age,"años, dentro de 10 años vas a tener:", tenYears,"años")
    console.log("un placer saludarte",fullName)

}

