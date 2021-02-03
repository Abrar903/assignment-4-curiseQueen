//function for first class and economy click and conditions
function handleticketChange(ticket, isIncrease) {
    const ticketCount = getInputValue(ticket);

    let ticketNewCount = ticketCount;
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    document.getElementById(ticket + "-count").value = ticketNewCount;

    let ticketTotal = 0;
    if (ticket == 'firstClass') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'economy') {
        ticketTotal = ticketNewCount * 100;
    }
    calculateTotal();
}


//tske input value
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

//calculate total
function calculateTotal() {
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue("economy");

    if (firstClassCount == 0 && economyCount == 0) {
        document.getElementById("booking-button").addEventListener("click", function () {
            alert(" 'You Cannot Buy less than One ticket' ");
        })
    }

    const subtotal = firstClassCount * 150 + economyCount * 100;
    document.getElementById("sub-total").innerText = "$" + subtotal;

    const vat = Math.round(subtotal * .1);
    document.getElementById("vat-total").innerText = "$" + vat;

    const total = subtotal + vat;
    document.getElementById("grand-total").innerText = "$" + total;
}

//(function) take to another page
function redirectingAnotherPage() {
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue("economy");

    if (firstClassCount > 0 || economyCount > 0) {
        document.getElementById("booking-area").style.display = "none";
        document.getElementById("confirmation-area").style.display = "block";
    }

}