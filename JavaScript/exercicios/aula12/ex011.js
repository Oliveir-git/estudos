var voto = 68
if (voto < 16) {
    console.log ('Voce nao pode votar')
}
else if (voto < 18 || voto > 67) {
    console.log ('Seu voto é opcional')
}
    else {
        console.log('Voce é obrigado a votar')
    }