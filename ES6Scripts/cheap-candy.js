let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
];

let newProd = products.filter(product=> {
    return product.price < 4
})
console.log(newProd)


let newProds = products.filter(product => {
    return product.product.includes('M&Ms')
})
console.log(newProds)

let newProducts = products.filter(product => {
    return product.product === "Swedish Fish"
}) // QUESTION!!! (when i type = instead of ===) the 
    // filter method works like forEach method
console.log(newProducts)

