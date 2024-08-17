
let colors = ["red", "green", "blue"];
console.log(colors[0]);

colors[1] = "yellow";
console.log(colors[1]);

colors.push("purple");
console.log(colors[colors.length - 1]);

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

let index = 0;
while (index < colors.length) {
    console.log(colors[index]);
    index++;
}

for (const color of colors) {
    console.log(color);
}

console.log(typeof colors);
console.log(colors.length);

colors.push("orange");
colors.pop();
console.log(colors.indexOf("blue"));

colors.owner = "Dipali";
console.log(colors);

for (const property in colors) {
    console.log(`${property}: ${colors[property]}`);
}
