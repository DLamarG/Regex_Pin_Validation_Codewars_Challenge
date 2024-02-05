function validatePIN (pin) {
    let newString = pin.toString()
       if (/\W/g.test(newString) === false && /[0-9]/g.test(newString) === true && /[a-zA-Z]/g.test(newString) === false) {
         return newString.length === 4 || newString.length === 6 ? true : false
       } else {
         return false
       }
   }


console.log(validatePIN("a1234"))
console.log(validatePIN("1234$%"))
console.log(validatePIN("-12345"))
console.log(validatePIN("1234678"))
console.log(validatePIN("123554"))
console.log(validatePIN("1234"))