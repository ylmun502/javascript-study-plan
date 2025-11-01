function add(a, b) {
    return a + b;
}
console.log("Regular function:", add(10 + 8));

const addArrowFunction = (a, b) => a + b;
console.log("Arrow function:", addArrowFunction(10 + 8));