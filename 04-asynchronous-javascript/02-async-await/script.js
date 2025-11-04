// Convert the following to async/await syntax
const greetingPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, world!");
    }, 500);
});

greetingPromise.then((message) => {
    console.log(message);
});

async function displayGreeting() {
    const greetingMessage = await greetingPromise;
    console.log(greetingMessage);
}

displayGreeting();