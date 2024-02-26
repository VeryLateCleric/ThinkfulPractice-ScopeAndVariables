const DISCOUNT_PERCENTAGE = 0.15;
function discountPricesInCents(products) {
    const result = [];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        let price = product.priceInCents;
        if (DISCOUNT_PERCENTAGE > 0) {
            const multiplier = 1 - DISCOUNT_PERCENTAGE;
            price = product.priceInCents * multiplier;
        }
        result.push(price);
    }
    return result
}

const shirt = [
    {
        name: "Black Longline T-Shirt",
        priceInCents: 1500,
        availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    }
];

const finalPriceInCents = discountPricesInCents(shirt);
console.log(finalPriceInCents);

// The purpose of this practice is identifying scope of the project.

// In the Global Scope we have
// DISCOUNT_PERCENTAGE
// shirt
// finalPriceInCents
    // In the local function discountPricesInCents we have
    // products
    // result
        // inside of that function, we have a local loop with variables inside the local loop
        // i
        // product
        // price
            // Finally inside of that for loop we have a local if statement with:
            // multiplier

// Below we see an example showing exceptions

let CURRENT_BUYER = "James O'Leary";
const product = {
    name: "Black Longline T-Shirt",
    priceInCents: 1500,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"]
}
if (DISCOUNT_PERCENTAGE > 0) {
    const multiplier = 1 - DISCOUNT_PERCENTAGE;
    const price = product.priceInCents *  multiplier;
    console.log(price);
} else {
    const price = product.priceInCents;
    console.log(price);
}

// Above we see that even though price is declared twice, each is contained inside the scope of it's own if/else statement and does not conflict with the other.