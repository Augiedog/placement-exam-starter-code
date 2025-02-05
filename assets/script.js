// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Auguste Bren" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0   // total amount of cookies

// Code to update display 
document.getElementById('credit').textContent = `Created by ${yourName}`

document.getElementById('qty-sugar').textContent = `${sugar}`


//Gingerbread
document.getElementById('add-gb').addEventListener('click', function() {
    gb = gb + 1
    document.getElementById('qty-gb').textContent = `${gb}`
    total = gb + cc + sugar
    document.getElementById('qty-total').textContent = `${total}`
})
document.getElementById('minus-gb').addEventListener('click', function() {
    gb = gb - 1
    document.getElementById('qty-gb').textContent = `${gb}`
    total = gb + cc + sugar
    document.getElementById('qty-total').textContent = `${total}`
})

// chocolate chip
document.getElementById('minus-cc').addEventListener('click', function() {
    cc = cc - 1
    document.getElementById('qty-cc').textContent = `${cc}`
    total = gb + cc + sugar
    document.getElementById('qty-total').textContent = `${total}`
})
document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc + 1
    document.getElementById('qty-cc').textContent = `${cc}`
    total = gb + cc + sugar
    document.getElementById('qty-total').textContent = `${total}`
})
// Sugar Sprinkle
document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar = sugar - 1
    document.getElementById('qty-sugar').textContent = `${sugar}`
    total = gb + cc + sugar
    document.getElementById('qty-total').textContent = `${total}`
    })
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar = sugar + 1
    document.getElementById('qty-sugar').textContent = `${sugar}`
    total = gb + cc + sugar
    document.getElementById('qty-total').textContent = `${total}`
})
