function Calculate(){
    let lawnSize = document.getElementById("lawnSize").value;
    let hours = document.getElementById("hours").value;
    const taxrate = .047;
    
    let price = lawnSize * hours;
    let tax = price * taxrate;
    let total = price + tax;
    document.getElementById("price").textContent = "Price: $" + price;
    document.getElementById("tax").textContent = "Tax: $" + tax.toFixed(2);
    document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
}