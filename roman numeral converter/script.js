function convertToRoman() {
    const num = document.getElementById('number').value.trim();
    const output = document.getElementById('output');
     if(num === "") {
        output.innerText = "Please enter a valid number";
    } 
    else{
        let numValue = parseInt(num);
        if(isNaN(numValue)||numValue < 1){
        output.innerText = "Please enter a number greater than or equal to 1";
        }
        else if (num >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        }
        else{
        output.innerText = toRoman(num);
        }
    }
}

function toRoman(num) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let result = '';

    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            result += key;
            num -= romanNumerals[key];
        }
    }

    return result;
}