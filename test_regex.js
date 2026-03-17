const fs = require('fs');

const text = "Movement is medicine";
const regex = /\bmedical\b/gi;
console.log(regex.test(text));
