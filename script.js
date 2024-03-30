
function usdToPkr(usdAmount) {
    return usdAmount * 277; 
}

function pkrToUsd(pkrAmount) {
    return pkrAmount / 277;
}

let continueConversion = true;

while (continueConversion) {
    let choice = prompt("Enter 1 to convert USD to PKR, 2 to convert PKR to USD:");
    
    if (choice === null) {
        continueConversion = false;
        break;
    }

    if (choice !== "1" && choice !== "2") {
        alert("Invalid choice! Please enter 1 or 2.");
        continue;
    }

    let amountInput = prompt("Enter the amount:");


    if (amountInput === null || isNaN(amountInput)) {
        alert("Invalid input! Please enter a valid number.");
        continue;
    }

    let amount = parseFloat(amountInput);

    if (choice === "1") {
        let pkrAmount = usdToPkr(amount);
        alert(`${amount} USD = ${pkrAmount.toFixed(2)} PKR`);
    } else {
        let usdAmount = pkrToUsd(amount);
        alert(`${amount} PKR = ${usdAmount.toFixed(2)} USD`);
    }

    let again = confirm("Do you want to convert again?");
    if (!again) {
        continueConversion = false;
    }
}

alert("Thank you");