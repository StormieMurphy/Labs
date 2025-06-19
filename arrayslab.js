// Task 1

const iceCreamFlavors = ["Vanilla", "Chocolate", "Strawberry", "Mint Chocolate Chip", "Bubblegum", "Cookies and Cream", "Chocolate Chip Cookie Dough", "Rocky Road", "Tiger Tail", "Lemon"];

iceCreamFlavors.forEach((item) => {
    console.log(item);
})

// Task 2

function joinFlavors (list) {
    console.log(list.join(' & '));
}

joinFlavors(iceCreamFlavors);