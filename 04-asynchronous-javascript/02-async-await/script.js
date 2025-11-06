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

function selectElementAsync(id) {
    return new Promise((resolve, reject) => {
        const element = document.getElementById(id);
        if (element === null) {
            reject(`Element with ID "${id}" was not found`);
        } else {
            resolve(element);
        }
    });
}

async function handleDomError() {
    try {
        const element = await selectElementAsync("nonExistenId");
        element.textContent = "Select Id found by using async";
    } catch (error) {
        console.error("Error handler caught:", error);
    } finally {
        console.log("All operations are done!");
    }
}

handleDomError();