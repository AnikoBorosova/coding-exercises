// The forecast today is 293 Kelvin. This will stay constant
const kelvin = 0;
// Celsius is 273 degrees less than Kelvin (273.15, but CodeCademy is wrong :( )
let celsius = kelvin - 273;
let fahrenheit = celsius * (9 / 5) + 32;

// round down to nearest integer
celsius = Math.floor(celsius);
console.log(`The temperature is ${celsius} degrees Celsius.`);

// round down to nearest integer
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// same for Newton scale
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);