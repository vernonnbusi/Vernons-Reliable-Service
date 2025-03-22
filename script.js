function updatePrices() {
    let newLawnPrice = prompt("Enter new Lawn Work price:");
    let newDogPrice = prompt("Enter new Dog Walking price:");
    let newTutorPrice = prompt("Enter new Tutoring price:");

    if (newLawnPrice) document.getElementById("lawnPrice").textContent = `$${newLawnPrice}`;
    if (newDogPrice) document.getElementById("dogPrice").textContent = `$${newDogPrice}`;
    if (newTutorPrice) document.getElementById("tutorPrice").textContent = `$${newTutorPrice}`;
}