var agora = new Date()
var atual = agora.getHours()
var hora = `${atual}`

console.log (`Agora são extamente ${hora}hrs`)
if (hora < 12) {
    console.log ('Boom diaa')
}
 else if (hora <= 18) {
    console.log ('Boa tardeee')
 }
 else  {
    console.log ('Boa noite')
 }