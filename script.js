// coin of the day
const USD = 5.70
const EUR = 6.46
const GBP = 7.56
// getting elements of the form
const form = document.querySelector("form")
const amount = document.getElementById("amount") // when use getElement don't need to use #.
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// manipulate input to receive just numbers.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, " ") // change letters for nothing
})

// collecting submit event from form
form.onsubmit = (event) => {
    event.preventDefault() // use this code for page don't reload

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break

    }
}

// Create function to convert the value or coin
function convertCurrency(amount, price, symbol) {
    try {
        // showing the quote of the selected currency
        
        description.textContent = `${symbol} 1 = ${price}`
        // calculate total
        let total = amount * price

        // format the total value
        total = formatCurrencyBRL(total).replace("R$", "")


        // show total result
        result.textContent = `${total} Reais`

        // apply class that displays footer and shows result.
        footer.classList.add("show-result")
    } catch (error) {
        // remove class from footer removing of the screen.
        footer.classList.remove("show-result")
        console.log(error)
        alert("not possible to convert. Try again later")
    }
}

// Format the currency and Brazilian real
function formatCurrencyBRL(value) {
    // convert to number to use tolocaleString to format in BRL standard R$(00,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
