//declaration des variables
const selectBtn = document.getElementById("selectBtn")
const addNameBtn = document.getElementById("addNameBtn")
const list = document.getElementById("list")
const inpName = document.getElementById("inpName")
const modal = document.getElementById("modal")
const deleteBtn = document.getElementById("deleteBtn")
const showName = document.getElementById("showName")
const closeBtn = document.getElementById("closeBtn")
let chosenLi = null

//function to show modal
function showModal(message, showDelete = false) {
    modal.style.visibility="visible"
    modal.style.opacity=1
    showName.textContent=message
    deleteBtn.style.display=showDelete?"block":"none"
}

//function to hide modal
function hideModal() {
    modal.style.opacity = 0
    modal.style.visibility = "hidden"
}



// Add new name
addNameBtn.addEventListener("click", function addition() {
    //variable to stock a new list
    const newList = document.createElement("li")
    //check if the input is empty or has a number or a symbol
    if (inpName.value==="" || /\d/.test(inpName.value) || /[^a-zA-Z0-9\\s]/.test(inpName.value)) {
        showModal("invalid input",false)
        inpName.value = ""
        return
    } 
    newList.textContent = inpName.value
    list.appendChild(newList)
    inpName.value = ""
})

//pick a random name
selectBtn.addEventListener('click', function randomPick() {
    //get the li by a number
    const countLis = list.getElementsByTagName('li')
    //check if the li = 0
    if (countLis.length === 0) {
        showModal("No names to show", false)
        return
    }
    //pick a random number form 1 to countlis.lenght
    const random = Math.floor(Math.random() * countLis.length)
    // replace the number with the li
    chosenLi = countLis[random]
    // put the 
    showModal(chosenLi.textContent, true)
})

// Delete name
deleteBtn.addEventListener("click", function deleteName() {
    if (chosenLi) chosenLi.remove()
    hideModal()
})

// Close modal
closeBtn.addEventListener("click", function closeModal() {
    hideModal()
})
