const subTotalHandler = function (cardItems) {
    let subTotal = 0;
    cardItems.map(item => {
        const price = item.price; //get each item price
        const qty = item.quantity; //get the quantity of a particular item 
        subTotal += (qty * price)
    })
    return subTotal.toFixed(2)
}
export default subTotalHandler