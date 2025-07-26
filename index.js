let convertBtnEl = document.querySelector("#convertBtn")
let inputEl = document.querySelector("#inputBox")
let inputLengthOne = document.querySelector("#inputLengthOne")
let inputLengthTwo = document.querySelector("#inputLengthTwo")
let inputLengthThree = document.querySelector("#inputLengthThree")
let errorBtnEl = document.querySelector("#errorBtn")

convertBtnEl.addEventListener("click", function() {
    //covert inputEl value into number
    let inputNumber = Number(inputEl.value)
    // Check if Number is Int or Float not String if true run the coversion and change the text content
    if ( Number.isInteger(inputNumber) ) {
        let convertFeets = inputNumber * 3.281
        let convertMeters = inputNumber * 0.3048
        let convertGallon = inputNumber * 0.264
        let convertLiter = inputNumber * 3.78541
        let convertPound = inputNumber * 2.204
        let convertKilo = inputNumber * 0.453592
        //clear error message
        errorBtnEl.textContent = ""
        
        //change text content using Template String
        inputLengthOne.textContent = `${inputNumber} meters = ${convertFeets.toFixed(4)} feet | ${inputNumber} feet = ${convertMeters.toFixed(4)} meters`

        inputLengthTwo.textContent = `${inputNumber} liters = ${convertGallon.toFixed(4)} gallons | ${inputNumber} gallons = ${convertLiter.toFixed(4)} liters`

        inputLengthThree.textContent = `${inputNumber} kilos = ${convertPound.toFixed(4)} pounds | ${inputNumber} pounds = ${convertKilo.toFixed(4)} kilos`
    } else if (typeof inputNumber === 'number' && !Number.isNaN(inputNumber) && inputNumber % 1 !== 0) {
        let convertFeets = inputNumber * 3.281
        let convertMeters = inputNumber * 0.3048
        let convertGallon = inputNumber * 0.264
        let convertLiter = inputNumber * 3.78541
        let convertPound = inputNumber * 2.204
        let convertKilo = inputNumber * 0.453592
        //clear error message
        errorBtnEl.textContent = ""

        //change text content using Template String
        inputLengthOne.textContent = `${inputNumber} meters = ${convertFeets.toFixed(4)} feet | ${inputNumber} feet = ${convertMeters.toFixed(4)} meters`

        inputLengthTwo.textContent = `${inputNumber} liters = ${convertGallon.toFixed(4)} gallons | ${inputNumber} gallons = ${convertLiter.toFixed(4)} liters`

        inputLengthThree.textContent = `${inputNumber} kilos = ${convertPound.toFixed(4)} pounds | ${inputNumber} pounds = ${convertKilo.toFixed(4)} kilos`
    } else {
        errorBtnEl.textContent = "Please input number instead of text."
    }
})