async function fetchDogBreeds() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Data fetching completely.");
    }
}

fetchDogBreeds();