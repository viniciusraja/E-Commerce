 function stringOfnumbersOrError(input){
    if(!input.match(/^[0-9.,]+$/))throw("O valor contém caracteres indevidos!")
    return input
}

function euToUsCurrencyFormat(input) {
    return input.replace(/[,]/g,(x)=>".")
}
function checkIfThereIsMoreThanOneDecimalSeparator(input){
    const numberOfDecimalSeparators= (input.match(/[,.]/g)||[]).length
    if(numberOfDecimalSeparators > 1)throw("O valor apresenta formato decimal indevido")
    return input
}

 export const forcePriceInputToValid=input=>checkIfThereIsMoreThanOneDecimalSeparator(euToUsCurrencyFormat(stringOfnumbersOrError(input)))
 console.log(forcePriceInputToValid("3,5"))