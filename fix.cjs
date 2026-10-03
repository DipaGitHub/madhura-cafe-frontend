const fs = require('fs');
const file = 'e:/Freelance/madhura-cafe-frontend/src/styles/dark.css';
let data = fs.readFileSync(file, 'utf8');

// Find the index of the corrupted part
const idx = data.lastIndexOf('}/ *');
if (idx !== -1) {
    data = data.substring(0, idx + 1); // keep the '}'
    fs.writeFileSync(file, data);
    console.log("Fixed!");
} else {
    console.log("Not found.");
}
