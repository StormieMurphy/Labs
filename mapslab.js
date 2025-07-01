// Task 1

const rainbowColors = new Map([
    ["R", "Red"],
    ["O", "Orange"],
    ["Y", "Yellow"],
    ["G", "Green"],
    ["B", "Blue"],
    ["V", "Violet"]
])

function returnColors () {
    return rainbowColors;
}

returnColors();

// Task 2

function printColors (key, value) {
    console.log(key);
    console.log(value);
}

function colorsForEach () {
    rainbowColors.forEach(printColors)
}

colorsForEach();