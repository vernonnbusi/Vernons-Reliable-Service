function updatePrices() {
    let newLawnPrice = prompt("Enter new Lawn Work price:");
    let newDogPrice = prompt("Enter new Dog Walking price:");
    let newTutorPrice = prompt("Enter new Tutoring price:");

    if (newLawnPrice !== null && newLawnPrice.trim() !== "") {
        document.getElementById("lawnPrice").textContent = `$${newLawnPrice}`;
    }
    if (newDogPrice !== null && newDogPrice.trim() !== "") {
        document.getElementById("dogPrice").textContent = `$${newDogPrice}`;
    }
    if (newTutorPrice !== null && newTutorPrice.trim() !== "") {
        document.getElementById("tutorPrice").textContent = `$${newTutorPrice}`;
    }
}