
//declaration des variables
const selectBtn = document.getElementById("selectBtn")
const addNameBtn = document.getElementById("addNameBtn")
const list = document.getElementById("list")
const inpName = document.getElementById("inpName")
const modal = document.getElementById("modal").style
const deleteName = document.getElementById("deleteName")
const showName = document.getElementById("showName")
let chosenLi = null



//Adding new element in the list ul
addNameBtn.addEventListener("click", function addition() {
    const newList = document.createElement("li")
    newList.textContent = inpName.value
    list.appendChild(newList)
    inpName.value = ""
})

//Random picking an item from the list
selectBtn.addEventListener('click', function randomPick() {
    // varibal to count how many items on ul
    const countLis = list.getElementsByTagName('li');
    // condition if countLis was 0
    if (countLis.length == 0) {
        modal.display = "block";       
        showName.textContent = "No names to show"; 
        deleteName.style.display = "none";   
        return;
    }
    //else : show the modal and delete button
    modal.display = "block";
    deleteName.style.display = "block";
    // variable to pick a random number from 1 to variable.length
    const random = Math.floor(Math.random() * countLis.length);
    // replace the number with its li
    chosenLi = countLis[random];
    // after that show the name
    showName.textContent = chosenLi.textContent;
    console.log(chosenLi);
});

//delete name from modal 
deleteName.addEventListener("click", function deleteBtn() {
    if (chosenLi) {
        chosenLi.remove()
    }
    modal.display = "none"
})

