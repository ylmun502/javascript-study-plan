function asyncDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Learning JS is fun!");
        }, 2000);
    });
}

async function loadAsyncDelay() {
    const result = await asyncDelay();
    alert(result);
}

loadAsyncDelay();

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

delay(100)
.then(() => {
    alert("Step 1 done.");
    return delay(1000);
})
.then(() => {
    alert("Step 2 done.");
    return delay(1000);
})
.then(() => alert("Done."));

function loadDelay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function dataLoad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.7 ) {
                resolve("Data fetched successfully");
            } else {
                reject("Connection failed");
            }
        }, 1000);
    });
}

loadDelay(1000)
.then(() => {
    console.log("Connecting to server...");
    return dataLoad();
})
.then((message) => {
    console.log(message);
    return loadDelay(1000);
})
.then(() => {
    console.log("Processing data...");
    console.log("All done");
})
.catch((err) => {
    console.log("Error: ", err);
})
.finally(() => console.log("Operation complete"));